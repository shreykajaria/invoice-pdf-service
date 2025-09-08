// server.js
const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.PDF_API_KEY || 'CHANGE_ME'; // set this env var before starting in production

// Basic middlewares
app.use(helmet());
app.use(morgan('dev'));
// CORS: in production, set origin to your front-end domain(s)
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow non-browser clients (curl)
    // TODO: restrict in production:
    // const allowed = ['https://your-frontend.example.com'];
    // return allowed.includes(origin) ? callback(null, true) : callback(new Error('Not allowed by CORS'));
    return callback(null, true);
  },
  allowedHeaders: ['Content-Type','x-pdf-token','Authorization','Accept']
}));
app.use(bodyParser.json({ limit: '25mb' })); // increase limit if you expect big data URLs

function escapeHTML(s){
  if(s === undefined || s === null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// Build invoice HTML from JSON (trusted template)
// Minimal inline CSS - replace/add to match your frontend styling exactly
function renderInvoiceHTML(inv) {
  // safe helper (you likely already have one)
  const esc = s => {
    if (s === undefined || s === null) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  };

  // allow passing through the same template name + accent color as client
  const template = esc(inv.template || 'card');
  const accent = esc(inv.accent || '#0FA4AF');
  // CSS / font used by your client preview
  const cssHref = 'https://hostingraptor.com/wp-content/invgen/invoice.css';
  const fontHref = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';

  // images (data URLs expected)
  const logo = inv.logoDataURL || '';
  const watermark = inv.watermarkDataURL || '';
  const signature = inv.signatureDataURL || '';

  // build items rows (same columns as your preview)
  const itemsHtml = (inv.items || []).map(it => {
    const desc = esc(it.description || '');
    const qty = Number(it.qty || 0);
    const rate = Number(it.rate || 0).toFixed(2);
    const disc = Number(it.discount || 0).toFixed(2);
    const line = (qty * Number(it.rate || 0) * (1 - Number(it.discount || 0) / 100)).toFixed(2);
    return `<tr><td style="min-width:240px;padding:8px">${desc}</td><td style="text-align:right;padding:8px">${qty}</td><td style="text-align:right;padding:8px">${rate}</td><td style="text-align:right;padding:8px">${disc}%</td><td style="text-align:right;padding:8px">${line}</td></tr>`;
  }).join('');

  // compute totals on server-side to be safe
  const subtotal = (inv.items || []).reduce((s,it)=> s + (Number(it.qty||0)*Number(it.rate||0)*(1 - Number(it.discount||0)/100)), 0);
  const discountAmount = (inv.totalDiscountType === 'percent') ? subtotal*(Number(inv.totalDiscountValue||0)/100) : Number(inv.totalDiscountValue||0);
  const taxable = subtotal - discountAmount;
  const tax = taxable * (Number(inv.taxPercent||0)/100);
  const shipping = Number(inv.shipping || 0);
  const total = (taxable + tax + shipping);

  // build the HTML using the same structure/classes your client uses
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link href="${fontHref}" rel="stylesheet">
  <link rel="stylesheet" href="${cssHref}">
  <style>
    :root { --accent: ${accent}; }
    /* force the invoice container width to desktop so layout is stable for PDF */
    body{background:#fff;margin:0;padding:24px}
    .invoice-wrapper{width:760px;margin:0 auto;box-sizing:border-box}
    /* small print adjustments to ensure inputs/controls are hidden on server render */
    input, select, button { display:none !important; }
    .hide-on-print { display:none !important; }
  </style>
</head>
<body>
  <div class="invoice-wrapper">
    ${ watermark ? `<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);opacity:0.06;pointer-events:none"><img src="${watermark}" style="max-width:360px;max-height:360px"/></div>` : '' }
    <div id="livePreviewContainer" class="invoice-preview template-${esc(template)}" role="application" aria-label="Invoice preview">
      <div style="position:relative;z-index:1">
        <div class="invoice-top">
          <div class="left-col">
            ${ logo ? `<div class="logo-preview" style="width:120px;height:60px"><img src="${logo}" alt="logo" style="max-width:100%;max-height:100%"/></div>` : `<div class="logo-preview" style="width:120px;height:60px"></div>` }
            <div style="color:var(--accent);font-weight:800;font-size:20px;margin-top:8px">${esc(inv.companyName||'Your Company')}</div>
            <div class="smaller" style="margin-top:6px">${esc((inv.companyAddress||'').replace(/\n/g,'<br/>'))}</div>
            <div style="margin-top:8px" class="smaller">Email: ${esc(inv.companyEmail||'')} | Phone: ${esc(inv.companyPhone||'')}</div>
            <div class="smaller" style="margin-top:6px">Tax ID: ${esc(inv.companyTax||'')}</div>
          </div>

          <div class="right-col invoice-meta">
            <div style="font-weight:800;font-size:18px;color:var(--accent)">Invoice</div>
            <div style="margin-top:6px"># <span style="font-weight:700">${esc(inv.invoiceNumber||'')}</span></div>
            <div class="smaller" style="margin-top:8px">Issue: ${esc(inv.issueDate||'')}</div>
            <div class="smaller" style="margin-top:6px">Due: ${esc(inv.dueDate||'')}</div>
          </div>
        </div>

        <hr />

        <div style="display:flex;gap:20px;flex-wrap:wrap">
          <div style="flex:1;min-width:220px">
            <div style="font-weight:700;color:var(--accent)">Bill To:</div>
            <div style="margin-top:6px">${esc(inv.clientName||'')}</div>
            <div class="smaller" style="margin-top:6px">${esc((inv.clientAddress||'').replace(/\n/g,'<br/>'))}</div>
            <div style="margin-top:6px" class="smaller">Email: ${esc(inv.clientEmail||'')} | Phone: ${esc(inv.clientPhone||'')}</div>
          </div>

          <div style="min-width:260px">
            <div style="font-weight:700;color:var(--accent)">Payment</div>
            <div style="margin-top:8px">${esc(inv.payments ? Object.keys(inv.payments).filter(k=>inv.payments[k]).join(', ') : '')}</div>
          </div>
        </div>

        <table class="invoice-table" style="margin-top:12px">
          <thead><tr><th>Item Description</th><th style="text-align:right">Qty</th><th style="text-align:right">Rate</th><th style="text-align:right">Discount %</th><th style="text-align:right">Amount</th></tr></thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-top:12px;gap:16px">
          <div></div>
          <div class="summary">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><div style="font-weight:700">Summary</div><div class="smaller">Currency: ${esc(inv.currency||'INR')}</div></div>
            <div class="summary-row"><div>Subtotal</div><div>${esc(inv.currency||'INR')} ${subtotal.toFixed(2)}</div></div>
            <div class="summary-row"><div>Discount</div><div>${esc(inv.currency||'INR')} ${discountAmount.toFixed(2)}</div></div>
            <div class="summary-row"><div>Tax</div><div>${esc(inv.currency||'INR')} ${tax.toFixed(2)}</div></div>
            <div class="summary-row"><div>Shipping</div><div>${esc(inv.currency||'INR')} ${shipping.toFixed(2)}</div></div>
            <div class="summary-row total"><div>Total Amount</div><div style="color:var(--accent);font-weight:800">${esc(inv.currency||'INR')} ${total.toFixed(2)}</div></div>
          </div>
        </div>

        <div style="margin-top:12px"><div style="font-weight:700;color:var(--accent)">Notes</div><div class="smaller" style="margin-top:6px">${esc(inv.notes||'')}</div></div>
        <div style="margin-top:8px"><div style="font-weight:700;color:var(--accent)">Terms</div><div class="smaller" style="margin-top:6px">${esc(inv.terms||'')}</div></div>

        ${ signature ? `<div style="margin-top:12px;text-align:right"><img src="${signature}" style="max-width:200px;max-height:80px"/></div>` : '' }
      </div>
    </div>
  </div>
</body>
</html>`;
}


// Health check
app.get('/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

// Main endpoint
// POST /api/pdf
// body: { url: "https://...", invoice: {...} }
// header: x-pdf-token: <PDF_API_KEY>
app.post('/api/pdf', async (req, res) => {
  try {
    const token = (req.headers['x-pdf-token'] || '').toString();
    if (API_KEY && token !== API_KEY) return res.status(401).send('Unauthorized');

    const { url, invoice } = req.body;
    let htmlContent;

    if (url) {
      // Mode A: server will navigate and render the given URL
      htmlContent = null;
    } else if (invoice) {
      htmlContent = renderInvoiceHTML(invoice);
    } else {
      return res.status(400).send('Provide either "url" or "invoice" JSON in request body');
    }

    // Launch puppeteer
    const browser = await puppeteer.launch({
      args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    // Set viewport to desktop width so PDF matches desktop layout
    await page.setViewport({ width: 1024, height: 1200, deviceScaleFactor: 1 });

    if (url) {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    } else {
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    }

    // Ensure fonts loaded
    try { await page.evaluateHandle('document.fonts.ready'); } catch(e){ /* ignore */ }

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', right: '10mm', bottom: '12mm', left: '10mm' }
    });

    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=invoice.pdf`,
      'Content-Length': pdfBuffer.length
    });
    return res.send(pdfBuffer);

  } catch (err) {
    console.error('PDF generation error:', err);
    return res.status(500).send('PDF generation failed: ' + (err.message || err.toString()));
  }
});

app.listen(PORT, () => {
  console.log(`PDF service listening on port ${PORT}`);
});
