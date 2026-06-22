function e(id){return document.getElementById(id)}

function copyOutput(id){
 const el=e(id);el.select();navigator.clipboard?.writeText(el.value);
 const btn=el.nextElementSibling;const orig=btn.textContent;
 btn.textContent='Kopiert!';setTimeout(()=>btn.textContent=orig,2000)
}

function generateImpressum(){
 const n=e('imp-name').value||'[Name/Firma]';
 const s=e('imp-street').value||'[Straße]';
 const c=e('imp-city').value||'[PLZ Ort]';
 const p=e('imp-phone').value;
 const m=e('imp-email').value||'[E-Mail]';
 const u=e('imp-ust').value;
 let t=`Angaben gemäß §5 TMG\n\n`;
 t+=`${n}\n${s}\n${c}\n\n`;
 t+=`**Vertreten durch:**\n${n}\n\n`;
 if(p) t+=`**Kontakt:**\nTelefon: ${p}\n`;
 t+=`E-Mail: ${m}\n\n`;
 if(u) t+=`**Umsatzsteuer-ID:**\n${u}\n\n`;
 t+=`**Verantwortlich für den Inhalt nach §55 Abs.2 RStV:**\n${n}, ${s}, ${c}\n\n`;
 t+=`**Haftungsausschluss:**\n`;
 t+=`Haftung für Inhalte: Die Inhalte wurden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden.\n\n`;
 t+=`Haftung für Links: Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.\n\n`;
 t+=`Urheberrecht: Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der Zustimmung des jeweiligen Autors.`;
 e('imp-output').value=t
}

function generateDatenschutz(){
 const n=e('ds-name').value||'[Name/Firma]';
 const a=e('ds-addr').value||'[Adresse]';
 const em=e('ds-email').value||'[E-Mail]';
 const ph=e('ds-phone').value;
 const purp=e('ds-purpose').value;
 const ga=e('ds-ga').checked;
 const gf=e('ds-gfonts').checked;
 const gm=e('ds-gmaps').checked;
 const wp=e('ds-wp').checked;
 const mail=e('ds-mail').checked;
 const ct=e('ds-contact').checked;
 let t=`Datenschutzerklärung\n\n`;
 t+=`**1. Verantwortlicher**\n`;
 t+=`${n}\n${a}\n`;
 if(ph) t+=`Telefon: ${ph}\n`;
 t+=`E-Mail: ${em}\n\n`;
 t+=`**2. Allgemeines**\n`;
 t+=`Wir nehmen den Schutz personenbezogener Daten ernst. Diese Datenschutzerklärung informiert über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website.\n\n`;
 t+=`**3. Rechtsgrundlagen**\n`;
 t+=`Die Verarbeitung erfolgt auf Grundlage der DSGVO (Art.6 Abs.1 lit.a-f), des TTDSG und ggf. weiterer spezifischer Regelungen.\n\n`;
 t+=`**4. Datenverarbeitung auf dieser Website**\n\n`;
 if(ct){
  t+=`**Kontaktformular**\n`;
  t+=`Wenn du uns über das Kontaktformular kontaktierst, werden deine angegebenen Daten (Name, E-Mail, Nachricht) zwecks Bearbeitung der Anfrage gespeichert. Rechtsgrundlage: Art.6 Abs.1 lit.f DSGVO.\n\n`
 }
 if(mail){
  t+=`**E-Mail-Kontakt**\n`;
  t+=`Bei Kontaktaufnahme per E-Mail wird die Korrespondatur inklusive aller darin enthaltenen personenbezogenen Daten zum Zwecke der Bearbeitung gespeichert. Rechtsgrundlage: Art.6 Abs.1 lit.f DSGVO.\n\n`
 }
 if(ga){
  t+=`**Google Analytics**\n`;
  t+=`Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Ltd. (Gordon House, Barrow Street, Dublin 4, Irland). Google Analytics verwendet Cookies zur Analyse der Nutzung. Die Datenverarbeitung erfolgt auf Basis deiner Einwilligung (Art.6 Abs.1 lit.a DSGVO). Du kannst die Einwilligung jederzeit widerrufen. Die IP-Adresse wird vor der Übermittlung anonymisiert.\n\n`
 }
 if(gf){
  t+=`**Google Fonts**\n`;
  t+=`Diese Website nutzt Google Fonts zur einheitlichen Darstellung von Schriften. Beim Aufruf einer Seite lädt dein Browser die benötigten Schriftarten in den Browsercache. Dabei wird eine Verbindung zu Google-Servern hergestellt. Rechtsgrundlage: Art.6 Abs.1 lit.f DSGVO.\n\n`
 }
 if(gm){
  t+=`**Google Maps**\n`;
  t+=`Diese Website nutzt Google Maps zur Darstellung von Karten. Dabei werden Daten über die Nutzung der Kartenfunktionen an Google übermittelt. Rechtsgrundlage: Art.6 Abs.1 lit.a DSGVO.\n\n`
 }
 if(wp){
  t+=`**WordPress**\n`;
  t+=`Diese Website wird auf Basis von WordPress betrieben. Im Rahmen des Betriebs können technisch notwendige Cookies und Session-Daten verarbeitet werden.\n\n`
 }
 t+=`**5. Cookies**\n`;
 t+=`Diese Website verwendet Cookies. Essenzielle Cookies sind für den Betrieb der Website erforderlich. Analytics- und Marketing-Cookies nur mit deiner Einwilligung. Du kannst deine Cookie-Einstellungen jederzeit anpassen.\n\n`;
 t+=`**6. Speicherdauer**\n`;
 t+=`Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.\n\n`;
 t+=`**7. Deine Rechte**\n`;
 t+=`Du hast das Recht auf Auskunft (Art.15), Berichtigung (Art.16), Löschung (Art.17), Einschränkung der Verarbeitung (Art.18), Datenübertragbarkeit (Art.20) und Widerspruch (Art.21) gemäß DSGVO. Zur Ausübung deiner Rechte kontaktiere uns unter ${em}.\n\n`;
 t+=`**8. Beschwerderecht**\n`;
 t+=`Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren, wenn du der Ansicht bist, dass die Verarbeitung gegen die DSGVO verstößt.\n\n`;
 t+=`Stand: ${new Date().toLocaleDateString('de-DE')}`;
 e('ds-output').value=t
}

function generateCookieBanner(){
 const bn=e('cb-name').value||'Meine Webseite';
 const th=e('cb-theme').value;
 const po=e('cb-position').value;
 const an=e('cb-analytics').checked;
 const mk=e('cb-marketing').checked;
 const bg=th==='dark'?'#1a1a2e':th==='light'?'#fff':'#2563eb';
 const tx=th==='dark'?'#fff':th==='light'?'#1a1a2e':'#fff';
 const btnBg=th==='dark'?'#2563eb':th==='light'?'#2563eb':'#fff';
 const btnTx=th==='dark'?'#fff':th==='light'?'#fff':'#2563eb';
 const pos=po==='top'?'top:0':po==='modal'?'top:50%;left:50%;transform:translate(-50%,-50%)':'bottom:0';
 const modalExtra=po==='modal'?'max-width:420px;border-radius:12px;':'';

 let h=`<!-- Cookie-Banner für ${bn} -->\n`;
 h+=`<style>\n`;
 h+=`#dsgvo-banner{position:fixed;${pos};left:0;right:0;z-index:9999;background:${bg};color:${tx};padding:20px;font-family:sans-serif;font-size:14px;line-height:1.5;box-shadow:0-2px 20px rgba(0,0,0,.25);${modalExtra}}\n`;
 h+=`#dsgvo-banner .cb-inner{max-width:800px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:16px}\n`;
 h+=`#dsgvo-banner .cb-text{flex:1;min-width:200px}\n`;
 h+=`#dsgvo-banner .cb-text a{color:${tx};text-decoration:underline}\n`;
 h+=`#dsgvo-banner .cb-btns{display:flex;gap:8px;flex-wrap:wrap}\n`;
 h+=`#dsgvo-banner .cb-btn{padding:10px 20px;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;transition:opacity .2s}\n`;
 h+=`#dsgvo-banner .cb-btn:hover{opacity:.85}\n`;
 h+=`#dsgvo-banner .cb-btn-primary{background:${btnBg};color:${btnTx}}\n`;
 h+=`#dsgvo-banner .cb-btn-secondary{background:rgba(255,255,255,.15);color:${tx}}\n`;
 h+=`#dsgvo-banner .cb-overlay{display:none}\n`;
 if(po==='modal') h+=`#dsgvo-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9998}\n`;
 h+=`</style>\n`;
 if(po==='modal') h+=`<div id="dsgvo-overlay"></div>\n`;
 h+=`<div id="dsgvo-banner">\n`;
 h+=`<div class="cb-inner">\n`;
 h+=`<div class="cb-text">\n`;
 h+=`<strong>Cookie-Einstellungen</strong><br>\n`;
 h+=`Wir verwenden Cookies, um dir die bestmögliche Erfahrung zu bieten. Essenzielle Cookies sind immer aktiviert.`;
 if(an||mk) h+=` Du kannst weitere Kategorien aktivieren oder ablehnen.`;
 h+=` <a href="/datenschutz">Mehr erfahren</a>\n`;
 h+=`</div>\n`;
 h+=`<div class="cb-btns">\n`;
 h+=`<button class="cb-btn cb-btn-secondary" onclick="dsgvoAccept('essenziell')">Nur essenzielle</button>\n`;
 if(an||mk) h+=`<button class="cb-btn cb-btn-secondary" onclick="dsgvoAccept('auswahl')">Auswahl bestätigen</button>\n`;
 h+=`<button class="cb-btn cb-btn-primary" onclick="dsgvoAccept('alle')">Alle akzeptieren</button>\n`;
 h+=`</div>\n`;
 h+=`</div>\n`;

 if(an||mk){
  h+=`<div class="cb-details" style="max-width:800px;margin:16px auto 0;border-top:1px solid rgba(255,255,255,.15);padding-top:12px">\n`;
  h+=`<label style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><input type="checkbox" checked disabled> Essenziell (immer aktiv)</label>\n`;
  if(an) h+=`<label style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><input type="checkbox" id="cb-analytics-check" checked> Analytics</label>\n`;
  if(mk) h+=`<label style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><input type="checkbox" id="cb-marketing-check"> Marketing</label>\n`;
  h+=`</div>\n`
 }
 h+=`</div>\n`;
 h+=`<script>\n`;
 h+=`function dsgvoAccept(level){\n`;
 h+=` const d=new Date();d.setFullYear(d.getFullYear()+1);\n`;
 h+=` document.cookie='dsgvo_consent='+level+';path=/;expires='+d.toUTCString();\n`;
 h+=` document.getElementById('dsgvo-banner').style.display='none';\n`;
 h+=` const ov=document.getElementById('dsgvo-overlay');if(ov)ov.style.display='none';\n`;
 h+=`}\n`;
 h+=`if(document.cookie.includes('dsgvo_consent=')){document.getElementById('dsgvo-banner').style.display='none';const ov=document.getElementById('dsgvo-overlay');if(ov)ov.style.display='none'}\n`;
 h+=`<\/script>`;
 e('cb-output').value=h
}

function generateAGB(){
 const n=e('agb-name').value||'[Name/Firma]';
 const a=e('agb-addr').value||'[Adresse]';
 const sv=e('agb-services').value||'[Leistung/Produkte]';
 const tp=e('agb-type').value;
 const pm=e('agb-payment').value;
 const payText={14:'innerhalb von 14 Tagen nach Rechnungsstellung',30:'innerhalb von 30 Tagen nach Rechnungsstellung',sofort:'sofort nach Rechnungsstellung ohne Abzug',vorkasse:'per Vorkasse. Die Rechnung ist vor Leistungserbringung fällig'};

 let t=`Allgemeine Geschäftsbedingungen (AGB)\n\n`;
 t+=`**§1 Geltungsbereich**\n`;
 t+=`Diese AGB gelten für alle Verträge zwischen ${n} (nachfolgend "Anbieter") und dem Kunden bezüglich der angebotenen Leistungen: ${sv}. Maßgeblich ist die zum Zeitpunkt des Vertragsschlusses gültige Fassung.\n\n`;
 t+=`**§2 Vertragsschluss**\n`;
 if(tp==='digital'||tp==='mixed') t+=`Die Darstellung der digitalen Produkte stellt kein rechtlich bindendes Angebot dar. Mit Absenden der Bestellung gibt der Kunde ein verbindliches Angebot ab. Der Anbieter bestätigt den Eingang der Bestellung per E-Mail.`;
 if(tp==='service'||tp==='mixed') t+=`Der Vertrag kommt durch die schriftliche oder textförmliche Annahme des Angebots durch den Anbieter zustande.`;
 if(tp==='physical') t+=`Die Darstellung der Waren stellt kein rechtlich bindendes Angebot dar. Der Kunde gibt durch Bestellung ein verbindliches Angebot ab. Der Anbieter bestätigt den Eingang per E-Mail.`;
 t+=`\n\n`;

 t+=`**§3 Leistungsbeschreibung**\n`;
 t+=`Die genaue Leistungsbeschreibung ergibt sich aus der individuellen Vereinbarung bzw. der Leistungsbeschreibung auf der Website. ${n} ist berechtigt, Leistungen durch qualifizierte Dritte erbringen zu lassen.\n\n`;

 t+=`**§4 Vergütung und Zahlungsbedingungen**\n`;
 t+=`Die Vergütung erfolgt zu den vereinbarten Preisen zuzüglich gesetzlicher Umsatzsteuer. Die Zahlung ist ${payText[pm]}. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.\n\n`;

 t+=`**§5 Gewährleistung**\n`;
 t+=`Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln hat der Kunde Nacherfüllung zu verlangen. Schlägt die Nacherfüllung fehl, kann der Kunde vom Vertrag zurücktreten oder die Vergütung mindern.\n\n`;

 t+=`**§6 Haftung**\n`;
 t+=`Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für die Verletzung wesentlicher Vertragspflichten. Im Übrigen ist die Haftung auf den vertragstypischen vorhersehbaren Schaden begrenzt.\n\n`;

 t+=`**§7 Schlussbestimmungen**\n`;
 t+=`Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Erfüllungsort ist der Sitz des Anbieters. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.\n\n`;
 t+=`${n}, ${a}\n`;
 t+=`Stand: ${new Date().toLocaleDateString('de-DE')}`;
 e('agb-output').value=t
}

function generateWiderruf(){
 const n=e('wi-name').value||'[Name/Firma]';
 const a=e('wi-addr').value||'[Adresse]';
 const em=e('wi-email').value||'[E-Mail]';
 const ph=e('wi-phone').value;
 const tp=e('wi-type').value;

 let t=`Widerrufsbelehrung\n\n`;
 t+=`**Widerrufsrecht**\n\n`;
 t+=`Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.\n\n`;
 t+=`Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses`;
 if(tp==='physical') t+=` bzw. ab dem Tag, an dem du oder ein von dir benannter Dritter die Ware in Besitz genommen hast`;
 t+=`.\n\n`;
 t+=`Um dein Widerrufsrecht auszuüben, musst du uns (`;
 t+=`${n}, ${a}, E-Mail: ${em}`;
 if(ph) t+=`, Telefon: ${ph}`;
 t+=`) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren.\n\n`;

 t+=`**Widerrufsfolgen**\n\n`;
 t+=`Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist. Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart.\n\n`;

 if(tp==='digital'){
  t+=`**Besonderheit bei digitalen Produkten**\n\n`;
  t+=`Das Widerrufsrecht erlischt vorzeitig, wenn wir mit der Ausführung des Vertrags begonnen haben und du ausdrücklich zugestimmt hast, dass wir mit der Ausführung vor Ablauf der Widerrufsfrist beginnen, sowie du deine Kenntnis davon bestätigt hast, dass du durch deine Zustimmung dein Widerrufsrecht verlierst.\n\n`
 }
 if(tp==='physical'){
  t+=`**Rücksendung der Waren**\n\n`;
  t+=`Wir holen die Waren nicht selbst ab. Du trägst die unmittelbaren Kosten der Rücksendung der Waren. Du musst für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise nicht notwendigen Umgang mit ihnen zurückzuführen ist.\n\n`
 }

 t+=`**Muster-Widerrufsformular**\n\n`;
 t+=`Wenn du den Vertrag widerrufen willst, fülle bitte dieses Formular aus und sende es zurück:\n\n`;
 t+=`— An ${n}, ${a}, E-Mail: ${em}\n`;
 t+=`— Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf der folgenden Produkte / die Erbringung der folgenden Dienstleistung:\n`;
 t+=`— Bestellt am: _______________ / erhalten am: _______________\n`;
 t+=`— Name: _______________\n`;
 t+=`— Anschrift: _______________\n`;
 t+=`— Datum: _______________\n`;
 t+=`— Unterschrift: _______________\n\n`;
 t+=`${n}, ${a}\n`;
 t+=`Stand: ${new Date().toLocaleDateString('de-DE')}`;
 e('wi-output').value=t
}
