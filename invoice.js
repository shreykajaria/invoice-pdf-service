/* ------------------ all currencies (code, label, symbol) ------------------ */
const ALL_CURRENCIES = [
  {code:'AED', label:'UAE Dirham', sym:'د.إ'},
  {code:'AFN', label:'Afghani', sym:'؋'},
  {code:'ALL', label:'Lek', sym:'L'},
  {code:'AMD', label:'Armenian Dram', sym:'դր'},
  {code:'ANG', label:'Netherlands Antillean Guilder', sym:'ƒ'},
  {code:'AOA', label:'Kwanza', sym:'Kz'},
  {code:'ARS', label:'Argentine Peso', sym:'$'},
  {code:'AUD', label:'Australian Dollar', sym:'A$'},
  {code:'AWG', label:'Aruban Florin', sym:'ƒ'},
  {code:'AZN', label:'Azerbaijan Manat', sym:'₼'},
  {code:'BAM', label:'Convertible Mark', sym:'KM'},
  {code:'BBD', label:'Barbadian Dollar', sym:'$'},
  {code:'BDT', label:'Taka', sym:'৳'},
  {code:'BGN', label:'Bulgarian Lev', sym:'лв'},
  {code:'BHD', label:'Bahraini Dinar', sym:'ب.د'},
  {code:'BIF', label:'Burundi Franc', sym:'Fr'},
  {code:'BMD', label:'Bermudian Dollar', sym:'$'},
  {code:'BND', label:'Brunei Dollar', sym:'$'},
  {code:'BOB', label:'Boliviano', sym:'Bs.'},
  {code:'BRL', label:'Brazilian Real', sym:'R$'},
  {code:'BSD', label:'Bahamian Dollar', sym:'$'},
  {code:'BTN', label:'Ngultrum', sym:'Nu.'},
  {code:'BWP', label:'Pula', sym:'P'},
  {code:'BYN', label:'Belarusian Ruble', sym:'Br'},
  {code:'BZD', label:'Belize Dollar', sym:'$'},
  {code:'CAD', label:'Canadian Dollar', sym:'CA$'},
  {code:'CDF', label:'Congolese Franc', sym:'Fr'},
  {code:'CHF', label:'Swiss Franc', sym:'CHF'},
  {code:'CLP', label:'Chilean Peso', sym:'$'},
  {code:'CNY', label:'Chinese Yuan', sym:'¥'},
  {code:'COP', label:'Colombian Peso', sym:'$'},
  {code:'CRC', label:'Costa Rican Colón', sym:'₡'},
  {code:'CVE', label:'Cabo Verde Escudo', sym:'Esc'},
  {code:'CZK', label:'Czech Koruna', sym:'Kč'},
  {code:'DJF', label:'Djibouti Franc', sym:'Fdj'},
  {code:'DKK', label:'Danish Krone', sym:'kr'},
  {code:'DOP', label:'Dominican Peso', sym:'RD$'},
  {code:'DZD', label:'Algerian Dinar', sym:'دج'},
  {code:'EGP', label:'Egyptian Pound', sym:'£'},
  {code:'ERN', label:'Nakfa', sym:'Nfk'},
  {code:'ETB', label:'Ethiopian Birr', sym:'Br'},
  {code:'EUR', label:'Euro', sym:'€'},
  {code:'FJD', label:'Fiji Dollar', sym:'$'},
  {code:'FKP', label:'Falkland Islands Pound', sym:'£'},
  {code:'GBP', label:'Pound Sterling', sym:'£'},
  {code:'GEL', label:'Lari', sym:'₾'},
  {code:'GHS', label:'Ghana Cedi', sym:'₵'},
  {code:'GIP', label:'Gibraltar Pound', sym:'£'},
  {code:'GMD', label:'Dalasi', sym:'D'},
  {code:'GNF', label:'Guinean Franc', sym:'Fr'},
  {code:'GTQ', label:'Quetzal', sym:'Q'},
  {code:'GYD', label:'Guyanese Dollar', sym:'$'},
  {code:'HKD', label:'Hong Kong Dollar', sym:'HK$'},
  {code:'HNL', label:'Lempira', sym:'L'},
  {code:'HRK', label:'Kuna', sym:'kn'},
  {code:'HTG', label:'Gourde', sym:'G'},
  {code:'HUF', label:'Forint', sym:'Ft'},
  {code:'IDR', label:'Rupiah', sym:'Rp'},
  {code:'ILS', label:'Israeli New Shekel', sym:'₪'},
  {code:'INR', label:'Indian Rupee', sym:'₹'},
  {code:'IQD', label:'Iraqi Dinar', sym:'ع.د'},
  {code:'IRR', label:'Iranian Rial', sym:'﷼'},
  {code:'ISK', label:'Iceland Krona', sym:'kr'},
  {code:'JMD', label:'Jamaican Dollar', sym:'J$'},
  {code:'JOD', label:'Jordanian Dinar', sym:'د.ا'},
  {code:'JPY', label:'Japanese Yen', sym:'¥'},
  {code:'KES', label:'Kenyan Shilling', sym:'KSh'},
  {code:'KGS', label:'Som', sym:'лв'},
  {code:'KHR', label:'Riel', sym:'៛'},
  {code:'KMF', label:'Comorian Franc', sym:'Fr'},
  {code:'KPW', label:'North Korean Won', sym:'₩'},
  {code:'KRW', label:'South Korean Won', sym:'₩'},
  {code:'KWD', label:'Kuwaiti Dinar', sym:'د.ك'},
  {code:'KYD', label:'Cayman Islands Dollar', sym:'$'},
  {code:'KZT', label:'Tenge', sym:'₸'},
  {code:'LAK', label:'Kip', sym:'₭'},
  {code:'LBP', label:'Lebanese Pound', sym:'ل.ل'},
  {code:'LKR', label:'Sri Lankan Rupee', sym:'Rs'},
  {code:'LRD', label:'Liberian Dollar', sym:'$'},
  {code:'LSL', label:'Loti', sym:'L'},
  {code:'LYD', label:'Libyan Dinar', sym:'ل.د'},
  {code:'MAD', label:'Moroccan Dirham', sym:'د.م.'},
  {code:'MDL', label:'Moldovan Leu', sym:'L'},
  {code:'MGA', label:'Malagasy Ariary', sym:'Ar'},
  {code:'MKD', label:'Denar', sym:'ден'},
  {code:'MMK', label:'Kyat', sym:'Ks'},
  {code:'MNT', label:'Tugrik', sym:'₮'},
  {code:'MOP', label:'Pataca', sym:'MOP$'},
  {code:'MUR', label:'Mauritian Rupee', sym:'₨'},
  {code:'MVR', label:'Rufiyaa', sym:'Rf'},
  {code:'MWK', label:'Kwacha', sym:'MK'},
  {code:'MXN', label:'Mexican Peso', sym:'MX$'},
  {code:'MYR', label:'Malaysian Ringgit', sym:'RM'},
  {code:'MZN', label:'Mozambique Metical', sym:'MT'},
  {code:'NAD', label:'Namibian Dollar', sym:'$'},
  {code:'NGN', label:'Naira', sym:'₦'},
  {code:'NIO', label:'Cordoba', sym:'C$'},
  {code:'NOK', label:'Norwegian Krone', sym:'kr'},
  {code:'NPR', label:'Nepalese Rupee', sym:'₨'},
  {code:'NZD', label:'New Zealand Dollar', sym:'NZ$'},
  {code:'OMR', label:'Rial Omani', sym:'ر.ع.'},
  {code:'PAB', label:'Balboa', sym:'B/. '},
  {code:'PEN', label:'Sol', sym:'S/.'},
  {code:'PGK', label:'Kina', sym:'K'},
  {code:'PHP', label:'Philippine Peso', sym:'₱'},
  {code:'PKR', label:'Pakistani Rupee', sym:'₨'},
  {code:'PLN', label:'Zloty', sym:'zł'},
  {code:'PYG', label:'Guarani', sym:'₲'},
  {code:'QAR', label:'Qatari Riyal', sym:'﷼'},
  {code:'RON', label:'Romanian Leu', sym:'lei'},
  {code:'RSD', label:'Serbian Dinar', sym:'дин.'},
  {code:'RUB', label:'Russian Ruble', sym:'₽'},
  {code:'RWF', label:'Rwanda Franc', sym:'Fr'},
  {code:'SAR', label:'Saudi Riyal', sym:'﷼'},
  {code:'SBD', label:'Solomon Islands Dollar', sym:'$'},
  {code:'SCR', label:'Seychelles Rupee', sym:'₨'},
  {code:'SDG', label:'Sudanese Pound', sym:'£'},
  {code:'SEK', label:'Swedish Krona', sym:'kr'},
  {code:'SGD', label:'Singapore Dollar', sym:'S$'},
  {code:'SHP', label:'Saint Helena Pound', sym:'£'},
  {code:'SLL', label:'Leone', sym:'Le'},
  {code:'SOS', label:'Somali Shilling', sym:'Sh'},
  {code:'SRD', label:'Surinam Dollar', sym:'$'},
  {code:'SSP', label:'South Sudanese Pound', sym:'£'},
  {code:'STD', label:'Dobra', sym:'Db'},
  {code:'SYP', label:'Syrian Pound', sym:'£'},
  {code:'SZL', label:'Lilangeni', sym:'L'},
  {code:'THB', label:'Thai Baht', sym:'฿'},
  {code:'TJS', label:'Somoni', sym:'SM'},
  {code:'TMT', label:'Turkmenistan Manat', sym:'m'},
  {code:'TND', label:'Tunisian Dinar', sym:'د.ت'},
  {code:'TOP', label:'Paʻanga', sym:'T$'},
  {code:'TRY', label:'Turkish Lira', sym:'₺'},
  {code:'TTD', label:'Trinidad and Tobago Dollar', sym:'TT$'},
  {code:'TWD', label:'New Taiwan Dollar', sym:'NT$'},
  {code:'TZS', label:'Tanzanian Shilling', sym:'Sh'},
  {code:'UAH', label:'Hryvnia', sym:'₴'},
  {code:'UGX', label:'Uganda Shilling', sym:'UGX'},
  {code:'USD', label:'US Dollar', sym:'$'},
  {code:'UYU', label:'Peso Uruguayo', sym:'$U'},
  {code:'UZS', label:'Uzbekistan Som', sym:'лв'},
  {code:'VEF', label:'Bolívar', sym:'Bs.'},
  {code:'VND', label:'Dong', sym:'₫'},
  {code:'VUV', label:'Vatu', sym:'Vt'},
  {code:'WST', label:'Tala', sym:'T'},
  {code:'XAF', label:'CFA Franc BEAC', sym:'Fr'},
  {code:'XCD', label:'East Caribbean Dollar', sym:'EC$'},
  {code:'XOF', label:'CFA Franc BCEAO', sym:'Fr'},
  {code:'XPF', label:'CFP Franc', sym:'Fr'},
  {code:'YER', label:'Yemeni Rial', sym:'﷼'},
  {code:'ZAR', label:'South African Rand', sym:'R'},
  {code:'ZMW', label:'Zambian Kwacha', sym:'ZK'}
];
/* ------------------ end currency list ------------------ */

/* quick lookup maps */
const CURRENCY_SYMBOL_MAP = {};
const CURRENCY_LABEL_MAP = {};
ALL_CURRENCIES.forEach(c => { CURRENCY_SYMBOL_MAP[c.code] = c.sym || c.code; CURRENCY_LABEL_MAP[c.code] = c.label || c.code; });


const LOCAL_KEY = 'invgen_live_v3';
let logoDataURL = '', watermarkDataURL = '', signatureDataURL = '';

function defaultInvoice(){
  const today = new Date().toISOString().slice(0,10);
  return {
    companyName: 'Your Company Pvt Ltd',
    companyAddress: 'Address line 1\nCity, State',
    companyEmail: 'email@company.com',
    companyPhone: '+91 99999 99999',
    companyTax: 'GST / Tax ID',
    invoiceNumber: 'INV-' + Date.now().toString().slice(-6),
    issueDate: today,
    dueDate: today,
    clientName: 'Client Name',
    clientAddress: 'Client address line 1\nCity',
    clientEmail: 'client@email.com',
    clientPhone: '',
    items: [{ description: 'Item description', qty: 1, rate: 0, discount: 0 }],
    notes: '',
    terms: '',
    totalDiscountType: 'flat',
    totalDiscountValue: 0,
    taxPercent: 0,
    shipping: 0,
    payments: { bank:false, bankDetails:'', upi:false, upiId:'', paypal:false, paypalLink:'', cash:false, payLink:false, payLinkUrl:'' },
    template: localStorage.getItem('invgen_template') || 'card',
    currency: 'INR',
    watermarkText: ''
  };
}
if (!window._invState) window._invState = defaultInvoice();

function escapeHTML(s){ return (s===null||s===undefined)?'':(''+s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]); }
function formatNumber(v, currencyCode){
  const amount = Number(v || 0);
  const code = (currencyCode || (window._invState && window._invState.currency) || document.getElementById('currencySelect')?.value || 'INR').toString().trim().toUpperCase();
  // try Intl to get localized string with symbol; but if Intl returns code instead of symbol, use our map
  try{
    const nf = new Intl.NumberFormat(undefined, { style:'currency', currency: code, minimumFractionDigits:2, maximumFractionDigits:2 });
    const formatted = nf.format(amount);
    // if formatted contains code (like "USD") then replace with our symbol or code
    if(formatted.includes(code)){
      const sym = CURRENCY_SYMBOL_MAP[code] || code;
      const numberOnly = amount.toLocaleString(undefined, { minimumFractionDigits:2, maximumFractionDigits:2 });
      return (sym ? (sym + ' ' + numberOnly) : (code + ' ' + numberOnly));
    } else {
      return formatted; // Intl already gave symbol & number in local style
    }
  }catch(e){
    const numberOnly = amount.toLocaleString(undefined, { minimumFractionDigits:2, maximumFractionDigits:2 });
    const sym = CURRENCY_SYMBOL_MAP[code] || code;
    return (sym ? (sym + ' ' + numberOnly) : (code + ' ' + numberOnly));
  }
}


function excelDateToISO(v){ if(v===undefined||v===null||v==='') return ''; if(v instanceof Date) return v.toISOString().slice(0,10); if(typeof v === 'number'){ const d=new Date(Math.round((v-25569)*86400*1000)); return new Date(d.getTime() + d.getTimezoneOffset()*60000).toISOString().slice(0,10);} const s=(''+v).trim(); const p=new Date(s); if(!isNaN(p.getTime())) return p.toISOString().slice(0,10); return s; }

function applyTemplateClass(){
  const container = document.getElementById('livePreviewContainer');
  if(!container) return;
  const classes = ['template-card','template-bar','template-lines','template-block','template-luxe','template-saas-b','template-saas-c','template-premium-geo','template-horizon'];
  
  classes.forEach(c => container.classList.remove(c));
  let sel = window._invState.template || document.getElementById('templateSelect')?.value || 'card';
  if(document.getElementById('templateSelect')?.value && sel !== document.getElementById('templateSelect').value) sel = document.getElementById('templateSelect').value;
  const map = { card: "template-card",
    bar: "template-bar",
    lines: "template-lines",
    block: "template-block",
    luxe: "template-luxe",
    'saas-b': 'template-saas-b',
    'saas-c': 'template-saas-c',
    'premium-geo': 'template-premium-geo',
    'horizon':'template-horizon' };
  
  container.classList.add(map[sel] || 'template-card');
  window._invState.template = sel;
  localStorage.setItem('invgen_template', sel);
}

function recalcTotalsFromState(inv){
  const subtotal = (inv.items||[]).reduce((s,it)=> s + (Number(it.qty||0)*Number(it.rate||0)*(1 - Number(it.discount||0)/100)), 0);
  const discount = (inv.totalDiscountType === 'percent') ? subtotal*(Number(inv.totalDiscountValue||0)/100) : Number(inv.totalDiscountValue||0);
  const taxable = subtotal - discount;
  const tax = taxable * (Number(inv.taxPercent||0)/100);
  const shipping = Number(inv.shipping||0);
  const total = taxable + tax + shipping;
  return { subtotal, discount, tax, shipping, total };
}

function renderPreview(){
  const inv = window._invState;
  document.getElementById('currencySelect').value = inv.currency || 'INR';
  document.getElementById('templateSelect').value = inv.template || 'card';
  document.getElementById('templateColor').value = localStorage.getItem('invgen_accent') || '#0FA4AF';
  document.documentElement.style.setProperty('--accent', document.getElementById('templateColor').value);

  // watermark: show uploaded image OR watermark text OR nothing
  const watermarkHtml = watermarkDataURL
    ? `<div class="invoice-watermark" id="watermarkPlaceholder"><img src="${watermarkDataURL}" alt="branding"/></div>`
    : (inv.watermarkText ? `<div class="invoice-watermark" id="watermarkPlaceholder"><div contenteditable="true" data-field="watermarkText" class="ce">${escapeHTML(inv.watermarkText||'')}</div></div>` : '');

  // logo: if uploaded show image, otherwise render empty container (no "LOGO" text)
  const logoHtml = logoDataURL
    ? `<div class="logo-preview" id="logoPlaceholder"><img src="${logoDataURL}" alt="logo" /></div>`
    : `<div class="logo-preview" id="logoPlaceholder" style="width:120px;height:60px;"></div>`;

  // signature: if uploaded show image, otherwise empty container (no "SIGNATURE" text)
  const signatureHtml = signatureDataURL
    ? `<div id="signaturePlaceholder" style="display:flex;justify-content:flex-end;width:100%;"><img src="${signatureDataURL}" style="max-width:200px;max-height:80px;display:block;" alt="signature"/></div>`
    : `<div id="signaturePlaceholder" style="display:flex;justify-content:flex-end;width:100%;"><div style="width:auto;height:48px;padding:8px;"></div></div>`;

  let itemsHtml = '';
  (inv.items || []).forEach((it, idx) => {
    const qty = Number(it.qty||0), rate = Number(it.rate||0), disc = Number(it.discount||0);
    const lineTotal = qty*rate*(1 - disc/100);
    itemsHtml += `<tr data-idx="${idx}">
      <td style="min-width:240px"><div contenteditable="true" data-field="item:${idx}:description" class="ce">${escapeHTML(it.description||'')}</div></td>
      <td style="text-align:right;white-space:nowrap"><div contenteditable="true" data-field="item:${idx}:qty" class="ce">${escapeHTML(String(it.qty||0))}</div></td>
      <td style="text-align:right;white-space:nowrap"><div contenteditable="true" data-field="item:${idx}:rate" class="ce">${escapeHTML(Number(it.rate||0).toFixed(2))}</div></td>
      <td style="text-align:right;white-space:nowrap"><div contenteditable="true" data-field="item:${idx}:discount" class="ce">${escapeHTML(String(it.discount||0))}</div></td>
      <td style="text-align:right;white-space:nowrap">${formatNumber(lineTotal, inv.currency)}</td>
      <td style="text-align:center" class="hide-on-export"><button class="btn-remove" data-idx="${idx}">Delete</button></td>
    </tr>`;
  });

  const totals = recalcTotalsFromState(inv);

  const html = `
    ${watermarkHtml}
    <div style="position:relative;z-index:1">
      <div class="invoice-top">
        <div class="left-col">
          <div id="logoWrap">${logoHtml}</div>
          <div contenteditable="true" data-field="companyName" class="company-name ce" style="color:var(--accent);margin-top:8px">${escapeHTML(inv.companyName)}</div>
          <div contenteditable="true" data-field="companyAddress" class="smaller ce" style="margin-top:6px">${escapeHTML(inv.companyAddress)}</div>
          <div style="margin-top:8px" class="smaller">Email: <span contenteditable="true" data-field="companyEmail" class="ce">${escapeHTML(inv.companyEmail)}</span> | Phone: <span contenteditable="true" data-field="companyPhone" class="ce">${escapeHTML(inv.companyPhone)}</span></div>
          <div class="smaller" style="margin-top:6px">Tax ID: <span contenteditable="true" data-field="companyTax" class="ce">${escapeHTML(inv.companyTax)}</span></div>
        </div>

       <div class="right-col invoice-meta" aria-hidden="false">
  <div class="meta-row meta-title" style="font-weight:800;font-size:18px;color:var(--accent);justify-content:flex-end;display:flex;">Invoice</div>

  <div class="meta-row" style="margin-top:6px;display:flex;justify-content:flex-end;align-items:center;gap:8px">
    <div class="meta-label" aria-hidden="true">#</div>
    <div class="meta-value"><span contenteditable="true" data-field="invoiceNumber" class="ce">${escapeHTML(inv.invoiceNumber)}</span></div>
  </div>

  <div class="meta-row smaller" style="margin-top:8px;display:flex;justify-content:flex-end;align-items:center;gap:8px">
    <div class="meta-label" aria-hidden="true">Issue:</div>
    <div class="meta-value"><input type="date" id="issueDateInput" value="${escapeHTML(inv.issueDate)}" class="input-date" /></div>
  </div>

  <div class="meta-row smaller" style="margin-top:6px;display:flex;justify-content:flex-end;align-items:center;gap:8px">
    <div class="meta-label" aria-hidden="true">Due:</div>
    <div class="meta-value"><input type="date" id="dueDateInput" value="${escapeHTML(inv.dueDate)}" class="input-date" /></div>
  </div>
</div>

      </div>

      <hr />

      <div style="display:flex;gap:20px;flex-wrap:wrap">
        <div style="flex:1;min-width:220px">
          <div style="font-weight:700;color:var(--accent)">Bill To:</div>
          <div contenteditable="true" data-field="clientName" class="ce" style="margin-top:6px">${escapeHTML(inv.clientName)}</div>
          <div contenteditable="true" data-field="clientAddress" class="smaller ce" style="margin-top:6px">${escapeHTML(inv.clientAddress)}</div>
          <div style="margin-top:6px" class="smaller">Email: <span contenteditable="true" data-field="clientEmail" class="ce">${escapeHTML(inv.clientEmail)}</span> | Phone: <span contenteditable="true" data-field="clientPhone" class="ce">${escapeHTML(inv.clientPhone)}</span></div>
        </div>

        <div style="min-width:260px">
          <div style="font-weight:700;color:var(--accent)">Payment</div>
          <div id="paymentPills" style="margin-top:8px"></div>
          <div id="paymentFields" style="margin-top:8px"></div>
        </div>
      </div>

      <table class="invoice-table" style="margin-top:12px">
        <thead><tr><th>Item Description</th><th style="text-align:right">Qty</th><th style="text-align:right">Rate</th><th style="text-align:right">Discount %</th><th style="text-align:right">Amount</th><th class="hide-on-export"></th></tr></thead>
        <tbody id="itemsBody">${itemsHtml}</tbody>
      </table>

      <!-- NOTE: added class items-summary-row so CSS can stack summary under Add Item on phones -->
      <div class="items-summary-row" style="display:flex;justify-content:space-between;align-items:flex-start;margin-top:12px;gap:16px">
        <div class="items-actions"><button id="addItemBtn" class="btn btn-primary hide-on-export">+ Add Item</button></div>

        <div class="summary">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><div style="font-weight:700">Summary</div><div class="smaller">Currency: ${escapeHTML(inv.currency||'INR')}</div></div>

          <div class="summary-row"><div>Subtotal</div><div id="subtotalText">${formatNumber(totals.subtotal)}</div></div>

          <div class="summary-row" style="flex-direction:column;align-items:flex-start">
            <div style="width:100%;display:flex;justify-content:space-between;align-items:center">
              <div style="font-weight:600">Discount</div>
              <div style="display:flex;gap:8px;align-items:center">
                <select id="previewDiscountType" class="inline" style="width:96px">
                  <option value="flat"${inv.totalDiscountType==='flat'?' selected':''}>Flat</option>
                  <option value="percent"${inv.totalDiscountType==='percent'?' selected':''}>Percent</option>
                </select>
                <input id="previewDiscountValue" class="inline" type="number" min="0" value="${escapeHTML(Number(inv.totalDiscountValue||0))}" style="width:120px" />
              </div>
            </div>
            <div style="margin-top:8px;width:100%;display:flex;justify-content:space-between"><div class="smaller">Amount</div><div id="discountText">${formatNumber(totals.discount)}</div></div>
          </div>

          <div class="summary-row" style="flex-direction:column;align-items:flex-start">
            <div style="width:100%;display:flex;justify-content:space-between;align-items:center">
              <div style="font-weight:600">Tax</div>
              <div style="display:flex;gap:8px;align-items:center">
                <input id="previewTaxInput" class="inline" type="number" min="0" max="100" value="${escapeHTML(Number(inv.taxPercent||0))}" style="width:96px" /> <span class="smaller">%</span>
              </div>
            </div>
            <div style="margin-top:8px;width:100%;display:flex;justify-content:space-between"><div class="smaller">Amount</div><div id="taxText">${formatNumber(totals.tax)}</div></div>
          </div>

          <div class="summary-row" style="flex-direction:column;align-items:flex-start">
            <div style="width:100%;display:flex;justify-content:space-between;align-items:center">
              <div style="font-weight:600">Shipping</div>
              <div style="display:flex;gap:8px;align-items:center">
                <input id="previewShippingInput" class="inline" type="number" min="0" step="0.01" value="${escapeHTML(Number(inv.shipping||0))}" style="width:120px" />
              </div>
            </div>
            <div style="margin-top:8px;width:100%;display:flex;justify-content:space-between"><div class="smaller">Amount</div><div id="shippingText">${formatNumber(totals.shipping)}</div></div>
          </div>

          <div style="height:0px"></div>
          <div class="summary-row total"><div>Total Amount</div><div id="totalText">${formatNumber(totals.total)}</div></div>
        </div>
      </div>

      <div style="margin-top:12px">
        <div style="font-weight:700;color:var(--accent)">Notes</div>
        <div contenteditable="true" data-field="notes" class="smaller ce" style="margin-top:6px">${escapeHTML(inv.notes)}</div>
      </div>

      <div style="margin-top:8px">
        <div style="font-weight:700;color:var(--accent)">Terms</div>
        <div contenteditable="true" data-field="terms" class="smaller ce" style="margin-top:6px">${escapeHTML(inv.terms)}</div>
      </div>

      <div style="margin-top:12px">${signatureHtml}</div>
    </div>
  `;
  document.getElementById('livePreviewContainer').innerHTML = html;
  applyTemplateClass();
  wireAfterRender();
}

// ensure the Discount summary row gets marked so we can style it precisely
(function markDiscountRow(){
  try{
    const el = document.getElementById('previewDiscountType');
    if(!el) return;
    // find nearest ancestor .summary-row
    let row = el.closest('.summary-row');
    if(row) row.classList.add('discount-row');
    // if the element is nested a level deeper, also handle a parent-of-parent scenario
    else {
      const maybe = el.parentElement;
      if(maybe && maybe.closest) {
        const r2 = maybe.closest('.summary-row');
        if(r2) r2.classList.add('discount-row');
      }
    }
  }catch(e){ /* ignore */ }
})();


function wireAfterRender(){
  const inv = window._invState;

  const issueInput = document.getElementById('issueDateInput');
  const dueInput = document.getElementById('dueDateInput');
  if(issueInput){
    issueInput.addEventListener('change', (e)=>{ inv.issueDate = e.target.value; if(!inv.dueDate || inv.dueDate === '' || inv.dueDate === inv.issueDate) inv.dueDate = inv.issueDate; window._invState = inv; saveLocal(); renderPreview(); });
  }
  if(dueInput){
    dueInput.addEventListener('change', (e)=>{ inv.dueDate = e.target.value; window._invState = inv; saveLocal(); renderPreview(); });
  }

  const addItemBtn = document.getElementById('addItemBtn');
  if(addItemBtn){ addItemBtn.removeEventListener('click', addItemHandler); addItemBtn.addEventListener('click', addItemHandler); }

  document.querySelectorAll('.btn-remove').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const idx = Number(btn.dataset.idx);
      inv.items.splice(idx,1);
      window._invState = inv; saveLocal(); renderPreview();
    });
  });

  document.querySelectorAll('[contenteditable="true"]').forEach(el=>{
    el.addEventListener('paste', (e)=>{ e.preventDefault(); const txt = (e.clipboardData || window.clipboardData).getData('text/plain'); document.execCommand('insertText', false, txt); });

    el.addEventListener('input', ()=> {
      const field = el.dataset.field;
      if(!field) return;
      if(field.startsWith('item:')){
        const parts = field.split(':'); const idx = Number(parts[1]); const key = parts[2];
        const val = el.innerText.trim();
        if(!inv.items[idx]) return;
        if(key === 'description') inv.items[idx].description = val;
        else if(key === 'qty') inv.items[idx].qty = isNaN(Number(val))?0:Number(val);
        else if(key === 'rate') inv.items[idx].rate = isNaN(Number(val))?0:Number(val);
        else if(key === 'discount') inv.items[idx].discount = isNaN(Number(val))?0:Number(val);
        window._invState = inv;
        updateTotalsInline();
      } else if(field === 'watermarkText'){
        inv.watermarkText = el.innerText.trim(); window._invState = inv;
      } else {
        inv[field] = el.innerText.replace(/\u00A0/g,' ');
        if(field === 'issueDate' && (!inv.dueDate || inv.dueDate === '')) inv.dueDate = inv.issueDate;
        window._invState = inv;
      }
    });

    el.addEventListener('blur', ()=> { saveLocal(); renderPreview(); });
    el.addEventListener('keydown', (e)=> { if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); el.blur(); } });
  });

  const paymentPillsWrap = document.getElementById('paymentPills');
  if(paymentPillsWrap){
    paymentPillsWrap.innerHTML = '';
    const p = inv.payments || {};
    ['bank','upi','paypal','cash','payLink'].forEach(k=>{
      const span = document.createElement('span');
      span.className = 'payment-pill' + (p[k]?' active':'');
      span.textContent = k === 'payLink' ? 'Payment Link' : (k === 'upi' ? 'UPI' : k[0].toUpperCase()+k.slice(1));
      span.dataset.pay = k;
      span.addEventListener('click', ()=>{
        inv.payments = inv.payments || {};
        inv.payments[k] = !inv.payments[k];
        if(inv.payments[k]){
          if(k==='bank' && !inv.payments.bankDetails) inv.payments.bankDetails = 'Bank name, A/C, IFSC';
          if(k==='upi' && !inv.payments.upiId) inv.payments.upiId = 'example@upi';
          if(k==='paypal' && !inv.payments.paypalLink) inv.payments.paypalLink = 'paypal.me/your';
          if(k==='payLink' && !inv.payments.payLinkUrl) inv.payments.payLinkUrl = 'https://';
        }
        window._invState = inv; saveLocal(); renderPreview();
      });
      paymentPillsWrap.appendChild(span);
    });
  }

  const paymentFields = document.getElementById('paymentFields');
  if(paymentFields){
    const p = inv.payments || {};
    paymentFields.innerHTML = '';
    if(p.bank) paymentFields.insertAdjacentHTML('beforeend', `<div class="small">Bank: <div contenteditable="true" data-field="payment:bankDetails" class="ce">${escapeHTML(p.bankDetails||'Bank name, A/C, IFSC')}</div></div>`);
    if(p.upi) paymentFields.insertAdjacentHTML('beforeend', `<div class="small">UPI: <div contenteditable="true" data-field="payment:upiId" class="ce">${escapeHTML(p.upiId||'example@upi')}</div></div>`);
    if(p.paypal) paymentFields.insertAdjacentHTML('beforeend', `<div class="small">PayPal: <div contenteditable="true" data-field="payment:paypalLink" class="ce">${escapeHTML(p.paypalLink||'paypal.me/your')}</div></div>`);
    if(p.payLink) paymentFields.insertAdjacentHTML('beforeend', `<div class="small">Payment Link: <div contenteditable="true" data-field="payment:payLinkUrl" class="ce">${escapeHTML(p.payLinkUrl||'https://')}</div></div>`);
    paymentFields.querySelectorAll('[contenteditable]').forEach(el=>{
      el.addEventListener('input', ()=> {
        const key = el.dataset.field ? el.dataset.field.split(':')[1] : null;
        const val = el.innerText.trim();
        if(key === 'bankDetails') inv.payments.bankDetails = val;
        if(key === 'upiId') inv.payments.upiId = val;
        if(key === 'paypalLink') inv.payments.paypalLink = val;
        if(key === 'payLinkUrl') inv.payments.payLinkUrl = val;
        window._invState = inv;
      });
      el.addEventListener('blur', ()=>{ saveLocal(); renderPreview(); });
    });
  }

  const previewTax = document.getElementById('previewTaxInput');
  if(previewTax){
    previewTax.addEventListener('input', (e)=>{
      inv.taxPercent = Number(e.target.value || 0);
      window._invState = inv;
      saveLocal();
      updateTotalsInline();
    });
    previewTax.addEventListener('blur', ()=>{ renderPreview(); });
  }

  const previewDiscountType = document.getElementById('previewDiscountType');
  const previewDiscountValue = document.getElementById('previewDiscountValue');
  if(previewDiscountType){
    previewDiscountType.addEventListener('change', (e)=>{
      inv.totalDiscountType = e.target.value;
      window._invState = inv;
      saveLocal();
      updateTotalsInline();
    });
  }
  if(previewDiscountValue){
    previewDiscountValue.addEventListener('input', (e)=>{
      inv.totalDiscountValue = Number(e.target.value || 0);
      window._invState = inv;
      saveLocal();
      updateTotalsInline();
    });
    previewDiscountValue.addEventListener('blur', ()=>{ renderPreview(); });
  }

  const previewShipping = document.getElementById('previewShippingInput');
  if(previewShipping){
    previewShipping.addEventListener('input', (e)=>{
      inv.shipping = Number(e.target.value || 0);
      window._invState = inv;
      saveLocal();
      updateTotalsInline();
    });
    previewShipping.addEventListener('blur', ()=>{ renderPreview(); });
  }
}

function updateTotalsInline(){
  const inv = window._invState;
  const subtotal = (inv.items||[]).reduce((s,it)=> s + (Number(it.qty||0)*Number(it.rate||0)*(1 - Number(it.discount||0)/100)), 0);
  const discount = (inv.totalDiscountType === 'percent') ? subtotal*(Number(inv.totalDiscountValue||0)/100) : Number(inv.totalDiscountValue||0);
  const taxable = subtotal - discount;
  const tax = taxable * (Number(inv.taxPercent||0)/100);
  const shipping = Number(inv.shipping||0);
  const total = taxable + tax + shipping;
  const el = document.getElementById('subtotalText'); if(el) el.textContent = formatNumber(subtotal);
  const ed = document.getElementById('discountText'); if(ed) ed.textContent = formatNumber(discount);
  const et = document.getElementById('taxText'); if(et) et.textContent = formatNumber(tax);
  const es = document.getElementById('shippingText'); if(es) es.textContent = formatNumber(shipping);
  const etot = document.getElementById('totalText'); if(etot) etot.textContent = formatNumber(total);
}

function addItemHandler(){ const inv = window._invState; inv.items.push({description:'New item',qty:1,rate:0,discount:0}); window._invState = inv; saveLocal(); renderPreview(); }

document.getElementById('btnLogo').addEventListener('click', ()=> document.getElementById('logoInput').click());
document.getElementById('btnWatermark').addEventListener('click', ()=> document.getElementById('watermarkInput').click());
document.getElementById('btnClearWatermark').addEventListener('click', ()=> { watermarkDataURL=''; saveLocal(); renderPreview(); });
document.getElementById('btnSignature').addEventListener('click', ()=> document.getElementById('signatureInput').click());

document.getElementById('logoInput').addEventListener('change', function(e){
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader(); r.onload = ev => { logoDataURL = ev.target.result; saveLocal(); renderPreview(); }; r.readAsDataURL(f);
});
document.getElementById('watermarkInput').addEventListener('change', function(e){
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader(); r.onload = ev => { watermarkDataURL = ev.target.result; saveLocal(); renderPreview(); }; r.readAsDataURL(f);
});
document.getElementById('signatureInput').addEventListener('change', function(e){
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader(); r.onload = ev => { signatureDataURL = ev.target.result; saveLocal(); renderPreview(); }; r.readAsDataURL(f);
});

function saveLocal(){
  const s = Object.assign({}, window._invState);
  s.logoDataURL = logoDataURL || '';
  s.watermarkDataURL = watermarkDataURL || '';
  s.signatureDataURL = signatureDataURL || '';
  s.template = (document.getElementById('templateSelect')?.value) || s.template;
  s.accent = document.getElementById('templateColor')?.value || s.accent;
  s.currency = document.getElementById('currencySelect')?.value || s.currency;
  s.taxPercent = Number(s.taxPercent || 0);
  s.totalDiscountType = s.totalDiscountType || 'flat';
  s.totalDiscountValue = Number(s.totalDiscountValue || 0);
  s.shipping = Number(s.shipping || 0);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(s));
}
document.getElementById('btnSave').addEventListener('click', ()=>{ saveLocal(); alert('Invoice saved locally'); });

document.getElementById('btnLoad').addEventListener('click', ()=> {
  const raw = localStorage.getItem(LOCAL_KEY);
  if(!raw) return alert('No saved invoice');
  try{
    const obj = JSON.parse(raw);
    window._invState = Object.assign(defaultInvoice(), obj);
    logoDataURL = obj.logoDataURL || '';
    watermarkDataURL = obj.watermarkDataURL || '';
    signatureDataURL = obj.signatureDataURL || '';
    if(obj.template) document.getElementById('templateSelect').value = obj.template;
    if(obj.accent) document.getElementById('templateColor').value = obj.accent;
    if(obj.currency) document.getElementById('currencySelect').value = obj.currency;
    renderPreview();
    alert('Loaded saved invoice');
  }catch(e){ console.error(e); alert('Load failed'); }
});

document.getElementById('btnClear').addEventListener('click', ()=> {
  if(!confirm('Clear invoice?')) return;
  window._invState = defaultInvoice();
  logoDataURL = ''; watermarkDataURL = ''; signatureDataURL = '';
  localStorage.removeItem(LOCAL_KEY);
  renderPreview();
});

/* Helper to load an image into base64 data URL */
function loadImageAsBase64(url){
  return new Promise((resolve,reject)=>{
    if(!url) return reject(new Error('empty'));
    if(typeof url === 'string' && url.startsWith('data:')) return resolve(url);
    const img = new Image(); img.crossOrigin = "Anonymous";
    img.onload = function(){ try{ const c=document.createElement('canvas'); c.width=img.width; c.height=img.height; const ctx=c.getContext('2d'); ctx.drawImage(img,0,0); resolve(c.toDataURL('image/png')); }catch(e){ reject(e); } };
    img.onerror = function(e){ reject(e||new Error('image load error')); };
    img.src = url;
  });
}

function populateCurrencySelect(){
  const sel = document.getElementById('currencySelect');
  if(!sel) return;
  // clear existing options
  sel.innerHTML = '';
  // Optionally add a short "choose" header
  // sel.appendChild(new Option('Select currency',''));
  ALL_CURRENCIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = `${c.code} — ${c.label}`;
    sel.appendChild(opt);
  });

  // restore saved currency or default
  const saved = (window._invState && window._invState.currency) || localStorage.getItem('invgen_currency');
  if(saved && sel.querySelector(`option[value="${saved}"]`)) sel.value = saved;
  else sel.value = 'INR';
}

async function captureAndDownload(){
  saveLocal();
  const previewNode = document.getElementById('livePreviewContainer');
  if(!previewNode) { alert('No preview'); return; }

  // clone for export
  const clone = previewNode.cloneNode(true);

  // Force desktop export width (A4-ish / same as desktop preview)
  clone.style.width = '794px';
  clone.style.margin = '0 auto';
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.classList.add('export-tight');

  // Inject rules to force desktop layout inside the clone (so exported PDF always desktop-style)
  // --- Inject rules to force desktop layout inside the clone (so exported PDF always desktop-style)
const desktopOverrideCSS = `
  /* Force desktop layout for export inside clone */
  .invoice-preview { max-width: none !important; width: 794px !important; padding: 18px !important; }

  /* Header main row forced to desktop two-column layout */
  .invoice-top {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    gap: 12px !important;
  }
  .invoice-top .left-col { flex: 1 1 auto !important; min-width: 220px !important; }
  .invoice-top .right-col { flex: 0 0 auto !important; min-width: 220px !important; width: auto !important; text-align: right !important; }
  .invoice-meta { text-align: right !important; }

  /* Each meta-row is displayed as a block (stacked rows), but label + value stay inline */
  .invoice-meta .meta-row { display:block !important; text-align:right !important; margin-bottom:6px !important; }
  .invoice-meta .meta-row .meta-label { display:inline-block !important; margin-right:8px !important; white-space:nowrap !important; color: #6b7280 !important; font-weight:600 !important; }
  .invoice-meta .meta-row .meta-value { display:inline-block !important; white-space:nowrap !important; }

  /* Prevent the label/value from wrapping onto separate lines unless absolutely necessary */
  .invoice-meta .meta-row { white-space:nowrap !important; }

  /* If space is really limited, let the value wrap but keep label intact */
  @media print, all {
    .invoice-meta .meta-row.breakable { white-space:normal !important; }
  }

  /* --- desktop export tweak for invoice-number and discount layout --- */
.invoice-meta .meta-row .meta-value { min-width: 140px !important; max-width: 320px !important; }
.invoice-meta .meta-value .ce { white-space: nowrap !important; overflow-x: auto !important; }

/* ensure discount row inline on export */
.summary-row.discount-row { display:flex !important; flex-direction:row !important; align-items:center !important; gap:12px !important; }
.summary-row.discount-row .inline, .summary-row.discount-row select, .summary-row.discount-row input.inline { display:inline-flex !important; align-items:center !important; }

  /* Ensure summary & items render in desktop row */
  .items-summary-row { flex-direction: row !important; }
  .items-summary-row .items-actions { order: 1 !important; width: auto !important; margin-bottom: 0 !important; }
  .items-summary-row .summary { order: 2 !important; width: 360px !important; margin-top: 0 !important; }

  /* Ensure all table columns render in the exported image */
  .invoice-table th, .invoice-table td { display: table-cell !important; white-space: nowrap !important; }
  .invoice-table { display: table !important; width: 100% !important; overflow: visible !important; }

  /* Watermark & signature sizing for export */
  .invoice-watermark img { max-width: 360px !important; max-height: 360px !important; }
  #signaturePlaceholder img { max-width: 200px !important; max-height: 80px !important; display: block !important; }

  /* Avoid overflow clipping */
  .invoice-top, .left-col, .right-col { overflow: visible !important; }
`;


  const styleNode = document.createElement('style');
  styleNode.appendChild(document.createTextNode(desktopOverrideCSS));
  clone.insertBefore(styleNode, clone.firstChild);

  document.body.appendChild(clone);

  try{
    const invState = window._invState || {};
    const totals = recalcTotalsFromState(invState);
    const currencySym = CURRENCY_SYMBOL_MAP[(invState.currency||'').toString().trim().toUpperCase()] || '';

    const pdSelect = clone.querySelector('#previewDiscountType');
    const pdInput = clone.querySelector('#previewDiscountValue');
    if(pdSelect){
      const type = invState.totalDiscountType || 'flat';
      const val = Number(invState.totalDiscountValue || 0);
      const discAmount = totals.discount || 0;
      const txt = (type === 'percent') ? `${val}% (${currencySym} ${discAmount.toFixed(2)})` : `Flat ${currencySym} ${val.toFixed(2)}`;
      const span = document.createElement('div'); span.textContent = txt;
      pdSelect.parentNode.replaceChild(span, pdSelect);
    }
    if(pdInput && pdInput.parentNode) pdInput.remove();

    const ptax = clone.querySelector('#previewTaxInput');
    if(ptax){
      const tPerc = Number(invState.taxPercent || 0);
      const txt = `${tPerc}% (${currencySym} ${ (totals.tax||0).toFixed(2) })`;
      const span = document.createElement('div'); span.textContent = txt;
      ptax.parentNode.replaceChild(span, ptax);
    }

    const pship = clone.querySelector('#previewShippingInput');
    if(pship){
      const shipVal = Number(invState.shipping || 0);
      const txt = formatNumber(shipVal, invState.currency);
      const span = document.createElement('div'); span.textContent = txt;
      pship.parentNode.replaceChild(span, pship);
    }

    clone.querySelectorAll('.hide-on-export').forEach(n=>n.remove());

    clone.querySelectorAll('input[type="date"]').forEach(inp=>{
      const span = document.createElement('div'); span.textContent = inp.value || '';
      inp.parentNode.replaceChild(span, inp);
    });

    clone.querySelectorAll('input, select, textarea').forEach(elem=>{
      if(elem.type === 'file') return;
      let text = '';
      if(elem.tagName.toLowerCase() === 'select'){
        const opt = elem.options[elem.selectedIndex];
        text = opt ? opt.textContent.trim() : (elem.value || '');
      } else if(elem.type === 'checkbox' || elem.type === 'radio'){
        text = elem.checked ? 'Yes' : 'No';
      } else {
        text = elem.value || '';
      }
      const span = document.createElement('div'); span.textContent = text;
      elem.parentNode.replaceChild(span, elem);
    });

    clone.querySelectorAll('[contenteditable]').forEach(n=>{
      const text = n.innerText || '';
      const span = document.createElement('div'); span.textContent = text;
      if(n.classList.contains('smaller')) span.className = 'smaller';
      n.parentNode.replaceChild(span, n);
    });

    const paymentWrap = clone.querySelector('#paymentPills');
    if(paymentWrap){
      const active = [];
      paymentWrap.querySelectorAll('.payment-pill').forEach(p=>{
        if(p.classList.contains('active')) active.push(p.textContent.trim());
      });
      const pw = document.createElement('div'); pw.textContent = active.length ? active.join(', ') : '';
      paymentWrap.parentNode.replaceChild(pw, paymentWrap);
    }

    clone.querySelectorAll('button').forEach(b=>b.remove());

    // Remove placeholders if no uploaded images (leave text watermark if provided)
    const logoPlaceholder = clone.querySelector('#logoPlaceholder');
    if(logoPlaceholder){
      const img = logoPlaceholder.querySelector('img');
      if(!img || !img.src || img.src.indexOf('data:') !== 0) { logoPlaceholder.remove(); }
    }
    const watermarkPlaceholder = clone.querySelector('#watermarkPlaceholder');
    if(watermarkPlaceholder){
      const img = watermarkPlaceholder.querySelector('img');
      const textNode = watermarkPlaceholder.querySelector('[data-field="watermarkText"]');
      if(!(img && img.src && img.src.indexOf('data:') === 0) && !(textNode && (textNode.innerText||'').trim())){ watermarkPlaceholder.remove(); }
    }
    const signaturePlaceholder = clone.querySelector('#signaturePlaceholder');
    if(signaturePlaceholder){
      const img = signaturePlaceholder.querySelector('img');
      if(!img || !img.src || img.src.indexOf('data:') !== 0) { signaturePlaceholder.remove(); }
    }

    const canvas = await html2canvas(clone, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 9;
    const imgWidth = pageWidth - margin*2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight; let position = margin;
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight - margin*2;
    while(heightLeft > 0){
      pdf.addPage();
      position = margin - (imgHeight - heightLeft);
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - margin*2;
    }

    const invNum = (window._invState.invoiceNumber || 'invoice').replace(/[^a-zA-Z0-9-_]/g,'_');
    pdf.save((invNum || 'invoice') + '.pdf');
  }catch(err){
    console.error('PDF creation failed', err);
    alert('Failed to create PDF. If images are remote, upload them (logo/watermark/signature).');
  }finally{
    clone.remove();
  }
}

document.getElementById('btnDownload').addEventListener('click', captureAndDownload);

/* init */
function init(){
  document.getElementById('templateSelect').addEventListener('change', (e)=>{ window._invState.template = e.target.value; applyTemplateClass(); saveLocal(); renderPreview(); });
  document.getElementById('templateColor').addEventListener('input', (e)=>{ document.documentElement.style.setProperty('--accent', e.target.value); localStorage.setItem('invgen_accent', e.target.value); renderPreview(); });
  populateCurrencySelect();
document.getElementById('currencySelect').addEventListener('change', (e)=>{ window._invState.currency = e.target.value; localStorage.setItem('invgen_currency', e.target.value); saveLocal(); renderPreview(); });


  const raw = localStorage.getItem(LOCAL_KEY);
  if(raw){
    try{
      const obj = JSON.parse(raw);
      window._invState = Object.assign(defaultInvoice(), obj);
      logoDataURL = obj.logoDataURL || '';
      watermarkDataURL = obj.watermarkDataURL || '';
      signatureDataURL = obj.signatureDataURL || '';
    }catch(e){ console.warn('load parse', e); }
  }
  if(!window._invState.dueDate) window._invState.dueDate = window._invState.issueDate;
  renderPreview();
}
window.addEventListener('load', init);
