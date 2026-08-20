// Google Analytics 4
const gaMeasurementId='G-N0619NSN9N';
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config',gaMeasurementId);
const gaScript=document.createElement('script');
gaScript.async=true;
gaScript.src=`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
document.head.appendChild(gaScript);

const button=document.querySelector('.menu-button');const nav=document.querySelector('#main-nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));}const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

const introHeading=document.querySelector('.intro h2');
if(introHeading) introHeading.textContent='Musiken anpassas efter tillfället';
const introLead=document.querySelector('.intro .section-lead');
if(introLead) introLead.textContent='Ingen spelning är den andra lik. Jag läser av publiken och blandar välkända låtar, svenska favoriter, rock, pop, allsång och önskemål efter stämningen.';

const bookingOptionsHeading=document.querySelector('#spelningar-title');
if(bookingOptionsHeading) bookingOptionsHeading.textContent='Från mingel till fullt ös';

const benefitsSection=document.querySelector('.benefits');
if(benefitsSection) benefitsSection.remove();

const aboutSide=document.querySelector('#om .about-side');
if(aboutSide) aboutSide.remove();

// Updated testimonial wording and Majkens logo.
document.querySelectorAll('.testimonial').forEach(testimonial=>{
  const name=testimonial.querySelector('figcaption strong')?.textContent.trim();
  const quote=testimonial.querySelector('blockquote');
  if(quote&&name==='Eddy Estigarribia') quote.textContent='”Vi har haft ett långt och mycket gott samarbete med Henke. Han är en fantastisk sångare och entertainer som levererar varje gång. Vi har samarbetat i över ett decennium och hoppas ha honom hos oss länge till.”';
  if(name==='Markus Pettersson'){
    if(quote) quote.textContent='”Henkes spelningar hos oss på Fårö har varit episka. Varje år ser vi fram emot att han ska komma tillbaka till oss, något som blivit en tradition sedan flera år tillbaka.”';
    const logo=testimonial.querySelector('.testimonial-logo');
    if(logo) logo.src='images/ref/Majkens-v2_vit_plain_2-495x374-2.png';
  }
});

const mobileLogoStyle=document.createElement('style');
mobileLogoStyle.textContent='@media(max-width:850px){.testimonial-logo{margin-left:auto!important;margin-right:auto!important;object-position:center center!important;}}';
document.head.appendChild(mobileLogoStyle);

const quoteStyles=document.createElement('link');
quoteStyles.rel='stylesheet';
quoteStyles.href='css/quote.css?v=4';
document.head.appendChild(quoteStyles);

const bookingForm=document.querySelector('#booking-form');
if(bookingForm){
  bookingForm.setAttribute('action','https://formspree.io/f/xnpalpgg');
  bookingForm.setAttribute('method','POST');
  bookingForm.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(field=>field.setAttribute('data-fs-field',''));
  const submitButton=bookingForm.querySelector('.form-submit');
  if(submitButton){submitButton.setAttribute('data-fs-submit-btn','');submitButton.removeAttribute('aria-disabled');}
  const formNote=bookingForm.querySelector('.form-note');
  if(formNote) formNote.textContent='Fyll i formuläret och skicka din bokningsförfrågan. Jag återkommer så snart jag kan.';
  const status=document.createElement('div');
  status.className='form-status';status.setAttribute('aria-live','polite');
  status.innerHTML='<div class="form-success" data-fs-success hidden>Tack! Din bokningsförfrågan är skickad. Jag återkommer så snart jag kan.</div><div class="form-error" data-fs-error hidden>Något gick fel. Försök igen eller kontakta mig direkt.</div>';
  bookingForm.insertBefore(status,submitButton||null);
  const formStatusStyle=document.createElement('style');
  formStatusStyle.textContent='.form-status{grid-column:1/-1}.form-success,.form-error{margin:0 0 18px;padding:14px 16px;border-radius:10px;font-size:.95rem;line-height:1.45}.form-success{background:#eef7ee;border:1px solid #bdd8bd;color:#254d25}.form-error{background:#fff1f0;border:1px solid #e3b8b4;color:#7a2720}.form-success[hidden],.form-error[hidden]{display:none!important}.form-submit:disabled{opacity:.65;cursor:wait;transform:none;box-shadow:none}';
  document.head.appendChild(formStatusStyle);
  window.formspree=window.formspree||function(){(window.formspree.q=window.formspree.q||[]).push(arguments);};
  window.formspree('initForm',{formElement:'#booking-form',formId:'xnpalpgg'});
  const formspreeScript=document.createElement('script');formspreeScript.src='https://unpkg.com/@formspree/ajax@1';formspreeScript.defer=true;document.head.appendChild(formspreeScript);
}

const liveGalleryStyles=document.createElement('link');liveGalleryStyles.rel='stylesheet';liveGalleryStyles.href='css/live-gallery.css?v=1';document.head.appendChild(liveGalleryStyles);
const liveGalleryScript=document.createElement('script');liveGalleryScript.src='js/live-gallery.js?v=1';liveGalleryScript.defer=true;document.head.appendChild(liveGalleryScript);
