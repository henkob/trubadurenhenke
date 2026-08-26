// Google Analytics 4
const gaMeasurementId='G-N0619NSN9N';
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config',gaMeasurementId);
const gaScript=document.createElement('script');gaScript.async=true;gaScript.src=`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;document.head.appendChild(gaScript);

// GA4 interaction tracking
const trackEvent=(name,params={})=>{if(typeof gtag==='function')gtag('event',name,params);};
document.addEventListener('click',event=>{const link=event.target.closest('a,button');if(!link)return;const text=(link.textContent||link.getAttribute('aria-label')||'').trim().replace(/\s+/g,' ').slice(0,100);if(link.closest('.video-trigger')||link.closest('.video-modal'))return;if(link.matches('a[href^="#"]'))trackEvent('section_click',{link_text:text,section_target:link.getAttribute('href')});if(link.matches('a[href^="mailto:"]'))trackEvent('contact_click',{contact_type:'email',link_text:text});if(link.matches('a[href^="tel:"]'))trackEvent('contact_click',{contact_type:'phone',link_text:text});});

const button=document.querySelector('.menu-button');const nav=document.querySelector('#main-nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));}const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

const heroVideos=document.querySelectorAll('.hero-video');heroVideos.forEach(video=>{video.muted=true;video.defaultMuted=true;video.loop=true;video.playsInline=true;video.setAttribute('muted','');video.setAttribute('playsinline','');video.setAttribute('webkit-playsinline','');video.preload='auto';const source=video.querySelector('source');if(source&&source.src&&!source.src.includes('v=hero2')){const url=new URL(source.src,window.location.href);url.searchParams.set('v','hero2');source.src=url.href;video.load();}const tryPlay=()=>{const p=video.play();if(p&&typeof p.catch==='function')p.catch(()=>{});};if(video.readyState>=2)tryPlay();else video.addEventListener('canplay',tryPlay,{once:true});window.addEventListener('pageshow',tryPlay);document.addEventListener('visibilitychange',()=>{if(!document.hidden)tryPlay();});});

const heroEyebrow=document.querySelector('.hero .eyebrow');if(heroEyebrow)heroEyebrow.textContent='Trubadur • Livemusik • Musikquiz';
const heroLead=document.querySelector('.hero .lead');if(heroLead)heroLead.textContent='Från skönt mingel till allsång och fullt ös. Jag läser av publiken och ser till att musiken passar både stunden och festen.';
const heroLocation=document.querySelector('.hero .location');if(heroLocation)heroLocation.textContent='Utgår från Västerås · Mångårig scenvana · Egen ljudutrustning';
const introEyebrow=document.querySelector('.intro .eyebrow');if(introEyebrow)introEyebrow.textContent='Vad behöver ni?';
const introHeading=document.querySelector('.intro h2');if(introHeading)introHeading.textContent='Musik som passar just er kväll';
const introLead=document.querySelector('.intro .section-lead');if(introLead)introLead.textContent='Ingen spelning är den andra lik. Jag blandar välkända låtar, svenska favoriter, rock, pop, allsång och önskemål efter människorna i rummet.';
const bookingOptionsHeading=document.querySelector('#spelningar-title');if(bookingOptionsHeading)bookingOptionsHeading.textContent='Var ska det bli drag?';
document.querySelectorAll('#spelningar .card').forEach(card=>{const title=card.querySelector('h3')?.textContent.trim();const text=card.querySelector('p');if(title==='Pub & restaurang'&&text)text.textContent='Bred repertoar, önskelåtar och nära kontakt med publiken. Jag anpassar kvällen efter både gästerna och stället.';if(title==='Musikquiz'&&text)text.textContent='Musik, frågor och liveframträdanden blandas i ett quiz där hela sällskapet kan vara med.';});
const cardEventTypes={'Fest & födelsedag':'Privat fest / födelsedag','Afterski & after beach':'Afterski / after beach','Företag':'Företag / konferens','Pub & restaurang':'Pub / restaurang','Musikquiz':'Musikquiz','Partycoverbandet HenkoBenko':'Annat'};
document.querySelectorAll('#spelningar .card').forEach(card=>{const title=card.querySelector('h3')?.textContent.trim();if(!cardEventTypes[title])return;card.setAttribute('role','link');card.setAttribute('tabindex','0');card.setAttribute('aria-label',`${title}: gå till bokningsförfrågan`);const openBooking=()=>{const eventType=document.querySelector('#event-type');if(eventType)eventType.value=cardEventTypes[title];document.querySelector('#kontakt')?.scrollIntoView({behavior:'smooth'});trackEvent('booking_card_click',{event_type:cardEventTypes[title]});};card.addEventListener('click',openBooking);card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openBooking();}});});
const testimonialsIntro=document.querySelector('#referenser .section-heading p:last-child');if(testimonialsIntro)testimonialsIntro.textContent='Några av de restauranger, hotell och eventarrangörer som har bokat mig genom åren.';
const aboutSide=document.querySelector('#om .about-side');if(aboutSide)aboutSide.remove();
const aboutCopy=document.querySelector('#om .about-copy');if(aboutCopy){aboutCopy.innerHTML='<p class="eyebrow">Om Henke</p><h2>Musiken har hängt med sedan jag var 12</h2><p>Jag har hållit på med musik nästan hela livet. Som 12-åring startade jag mitt första band och 1987 började jag spela som trubadur. Sedan dess har det blivit tusentals timmar på scen.</p><p>På 90-talet startade jag partybandet <strong>Ramalama Tubsox</strong> tillsammans med en trubadurkollega. Det blev många år av spelningar och turnéer i Sverige, Norge och Alperna, inte minst på afterski där samspelet med publiken blev en viktig del av mitt sätt att uppträda.</p><p>I dag spelar jag både solo som Trubaduren Henke och med partycoverbandet <strong>HenkoBenko</strong>, på allt från pubar och privata fester till företagsevent, afterski, after beach och större arrangemang.</p><p>Med HenkoBenko har jag också fått spela tillsammans med artister som <strong>David Lindgren, Méndez, Andreas Lundstedt, Nordman och Nanne Grönvall</strong>.</p><h3>Publiken är fortfarande det viktigaste</h3><p>Det är mötet med publiken som gör spelningen. Jag gillar när det inte går att förutse exakt hur det kommer att utvecklas. Ibland passar musiken bäst i bakgrunden, ibland står hela rummet och sjunger med. Att känna när det är dags att växla upp är en stor del av jobbet.</p>';}
document.querySelectorAll('.testimonial').forEach(testimonial=>{const nameEl=testimonial.querySelector('figcaption strong');const name=nameEl?.textContent.trim();const quote=testimonial.querySelector('blockquote');const logo=testimonial.querySelector('.testimonial-logo');const roleEl=testimonial.querySelector('figcaption span');if(name==='Eddy Estigarribia'){if(quote)quote.textContent='”Vi har haft ett långt och mycket gott samarbete med Henke. Han är en fantastisk sångare och entertainer som levererar varje gång. Vi har samarbetat i över ett decennium och hoppas ha honom hos oss länge till.”';if(logo)logo.src='images/ref/brasse.png';}if(name==='Petronella Hägre'){nameEl.textContent='Eventteamet';if(roleEl)roleEl.textContent='Steam Hotel, Västerås';}if(name==='Markus Pettersson'){if(quote)quote.textContent='”Henkes spelningar hos oss på Fårö har varit episka. Varje år ser vi fram emot att han ska komma tillbaka till oss, något som blivit en tradition sedan flera år tillbaka.”';if(logo)logo.src='images/ref/Majkens-v2_vit_plain_2-495x374-2.png';}});
const contactLead=document.querySelector('#kontakt .section-lead');if(contactLead)contactLead.textContent='Fyll i när, var och vad ni planerar, så återkommer jag med ett förslag på upplägg och pris.';
const contactHeading=document.querySelector('#kontakt h2');if(contactHeading)contactHeading.textContent='Berätta om er kväll';
const mobileLogoStyle=document.createElement('style');mobileLogoStyle.textContent='@media(max-width:850px){.testimonial-logo{margin-left:auto!important;margin-right:auto!important;object-position:center center!important;}}';document.head.appendChild(mobileLogoStyle);
const quoteStyles=document.createElement('link');quoteStyles.rel='stylesheet';quoteStyles.href='css/quote.css?v=4';document.head.appendChild(quoteStyles);

const eyebrowSizeStyle=document.createElement('style');eyebrowSizeStyle.textContent='.section .eyebrow{font-size:1.12rem!important;line-height:1.25;letter-spacing:.12em;margin-bottom:16px}@media(max-width:520px){.section .eyebrow{font-size:1rem!important;letter-spacing:.11em;margin-bottom:13px}}';document.head.appendChild(eyebrowSizeStyle);

const refinementStyle=document.createElement('style');refinementStyle.textContent='.intro{padding-bottom:64px}.cards{padding-top:64px}.location{color:#f0ede7;font-size:.95rem;font-weight:700;line-height:1.55}.card[role="link"]{cursor:pointer;transition:background .18s ease,transform .18s ease,box-shadow .18s ease}.card[role="link"]:hover{background:#fff;transform:translateY(-3px);box-shadow:0 12px 28px rgba(23,23,23,.09);position:relative;z-index:1}.card[role="link"]:focus-visible{outline:3px solid #9b7227;outline-offset:-4px;background:#fff}.dark p,.testimonial figcaption span{color:#d0d0d0}.testimonial figcaption span{font-size:.92rem;line-height:1.5}.benefit-grid p{color:#5b5650}@media(max-width:850px){.intro{padding-bottom:44px}.cards{padding-top:44px}}@media(prefers-reduced-motion:reduce){.card[role="link"]{transition:none}.card[role="link"]:hover{transform:none}}';document.head.appendChild(refinementStyle);

const bookingForm=document.querySelector('#booking-form');
if(bookingForm){
  bookingForm.setAttribute('action','https://formspree.io/f/xnpalpgg');
  bookingForm.setAttribute('method','POST');
  bookingForm.setAttribute('novalidate','');
  let bookingStarted=false;
  const markBookingStart=()=>{if(bookingStarted)return;bookingStarted=true;trackEvent('booking_start',{form_id:'booking-form'});};
  bookingForm.addEventListener('input',markBookingStart,{once:true});bookingForm.addEventListener('change',markBookingStart,{once:true});

  const date=bookingForm.querySelector('#date');
  if(date){date.required=true;const label=bookingForm.querySelector('label[for="date"]');if(label)label.innerHTML='Datum för spelningen <span aria-hidden="true">*</span>';}

  const eventType=bookingForm.querySelector('#event-type');
  if(eventType){eventType.innerHTML='<option value="">Välj</option><option>Privat fest / födelsedag</option><option>Bröllop</option><option>Företag / konferens</option><option>Pub / restaurang</option><option>Afterski / after beach</option><option>Musikquiz</option><option>Annat</option>';eventType.required=true;}

  const message=bookingForm.querySelector('#message');if(message){message.required=false;message.removeAttribute('required');message.placeholder='Tider, upplägg, publik, önskemål eller annat som är bra för mig att känna till.';const label=bookingForm.querySelector('label[for="message"]');if(label)label.textContent='Övrig information';}

  const submitButton=bookingForm.querySelector('.form-submit');
  const formNote=bookingForm.querySelector('.form-note');if(formNote)formNote.textContent='Fyll i formuläret och skicka din bokningsförfrågan. Jag återkommer så snart jag kan.';

  const status=document.createElement('div');
  status.className='form-status';
  status.setAttribute('aria-live','assertive');
  status.setAttribute('tabindex','-1');
  status.innerHTML='<div class="form-success" hidden><strong>Tack!</strong> Din bokningsförfrågan är skickad. Jag återkommer så snart jag kan.</div><div class="form-error" hidden><strong>Något gick fel.</strong> Försök igen eller kontakta mig direkt.</div>';
  bookingForm.insertBefore(status,submitButton||null);

  const style=document.createElement('style');
  style.textContent='.form-status{grid-column:1/-1}.form-success,.form-error{margin:0 0 18px;padding:16px 18px;border-radius:10px;font-size:1rem;line-height:1.5}.form-success{background:#eef7ee;border:1px solid #bdd8bd;color:#254d25}.form-error{background:#fff1f0;border:1px solid #e3b8b4;color:#7a2720}.field-error{margin:2px 0 0;color:#9b1c1c;font-size:.84rem;line-height:1.35}.form-field input[aria-invalid="true"],.form-field select[aria-invalid="true"],.form-field textarea[aria-invalid="true"],.date-control:has(input[aria-invalid="true"]){border-color:#b3261e!important;box-shadow:0 0 0 3px rgba(179,38,30,.12)!important}.form-submit:disabled{opacity:.65;cursor:wait;transform:none;box-shadow:none}';
  document.head.appendChild(style);

  const fields=[...bookingForm.querySelectorAll('input:not([type="hidden"]),select,textarea')];
  function clearFieldError(field){field.removeAttribute('aria-invalid');const wrap=field.closest('.form-field');const old=wrap?.querySelector('.field-error');if(old)old.remove();}
  function setFieldError(field,msg){clearFieldError(field);field.setAttribute('aria-invalid','true');const wrap=field.closest('.form-field');if(!wrap)return;const el=document.createElement('p');el.className='field-error';el.textContent=msg;wrap.appendChild(el);}
  function validate(){let first=null;fields.forEach(field=>{clearFieldError(field);let msg='';if(field.required&&!String(field.value||'').trim())msg='Fyll i det här fältet.';else if(field.type==='email'&&field.value&&!field.validity.valid)msg='Ange en giltig e-postadress.';if(msg){setFieldError(field,msg);if(!first)first=field;}});if(first){first.focus();first.scrollIntoView({behavior:'smooth',block:'center'});return false;}return true;}
  fields.forEach(field=>{field.addEventListener('input',()=>clearFieldError(field));field.addEventListener('change',()=>clearFieldError(field));});

  bookingForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const success=status.querySelector('.form-success');const error=status.querySelector('.form-error');success.hidden=true;error.hidden=true;
    if(!validate()){trackEvent('booking_validation_error',{form_id:'booking-form'});return;}
    if(submitButton){submitButton.disabled=true;submitButton.textContent='Skickar…';}
    try{
      const response=await fetch(bookingForm.action,{method:'POST',body:new FormData(bookingForm),headers:{Accept:'application/json'}});
      if(!response.ok)throw new Error('Formspree request failed');
      trackEvent('booking_submit',{form_id:'booking-form',event_type:eventType?.value||''});
      bookingForm.reset();bookingStarted=false;fields.forEach(clearFieldError);success.hidden=false;status.focus({preventScroll:true});status.scrollIntoView({behavior:'smooth',block:'center'});
    }catch(err){trackEvent('booking_error',{form_id:'booking-form'});error.hidden=false;status.focus({preventScroll:true});status.scrollIntoView({behavior:'smooth',block:'center'});}
    finally{if(submitButton){submitButton.disabled=false;submitButton.textContent='Skicka förfrågan';}}
  });
}

const liveGalleryStyles=document.createElement('link');liveGalleryStyles.rel='stylesheet';liveGalleryStyles.href='css/live-gallery.css?v=2';document.head.appendChild(liveGalleryStyles);const liveGalleryScript=document.createElement('script');liveGalleryScript.src='js/live-gallery.js?v=4';liveGalleryScript.defer=true;document.head.appendChild(liveGalleryScript);
