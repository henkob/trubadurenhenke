const button=document.querySelector('.menu-button');const nav=document.querySelector('#main-nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));}const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

// Reference logos are included directly in index.html from images/ref.
// Center them on smaller screens while keeping the desktop layout left aligned.
const mobileLogoStyle=document.createElement('style');
mobileLogoStyle.textContent='@media(max-width:850px){.testimonial-logo{margin-left:auto!important;margin-right:auto!important;object-position:center center!important;}}';
document.head.appendChild(mobileLogoStyle);

// Extra styling for the quote section with portrait background.
// Version query avoids stale CSS in Safari/iPhone caches.
const quoteStyles=document.createElement('link');
quoteStyles.rel='stylesheet';
quoteStyles.href='css/quote.css?v=4';
document.head.appendChild(quoteStyles);

// Formspree AJAX integration for the booking form.
const bookingForm=document.querySelector('#booking-form');
if(bookingForm){
  bookingForm.setAttribute('action','https://formspree.io/f/xnpalpgg');
  bookingForm.setAttribute('method','POST');

  bookingForm.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(field=>{
    field.setAttribute('data-fs-field','');
  });

  const submitButton=bookingForm.querySelector('.form-submit');
  if(submitButton){
    submitButton.setAttribute('data-fs-submit-btn','');
    submitButton.removeAttribute('aria-disabled');
  }

  const formNote=bookingForm.querySelector('.form-note');
  if(formNote) formNote.textContent='Fyll i formuläret och skicka din bokningsförfrågan. Jag återkommer så snart jag kan.';

  const status=document.createElement('div');
  status.className='form-status';
  status.setAttribute('aria-live','polite');
  status.innerHTML='<div class="form-success" data-fs-success hidden>Tack! Din bokningsförfrågan är skickad. Jag återkommer så snart jag kan.</div><div class="form-error" data-fs-error hidden>Något gick fel. Försök igen eller kontakta mig direkt.</div>';
  bookingForm.insertBefore(status,submitButton||null);

  const formStatusStyle=document.createElement('style');
  formStatusStyle.textContent='.form-status{grid-column:1/-1}.form-success,.form-error{margin:0 0 18px;padding:14px 16px;border-radius:10px;font-size:.95rem;line-height:1.45}.form-success{background:#eef7ee;border:1px solid #bdd8bd;color:#254d25}.form-error{background:#fff1f0;border:1px solid #e3b8b4;color:#7a2720}.form-success[hidden],.form-error[hidden]{display:none!important}.form-submit:disabled{opacity:.65;cursor:wait;transform:none;box-shadow:none}';
  document.head.appendChild(formStatusStyle);

  window.formspree=window.formspree||function(){(window.formspree.q=window.formspree.q||[]).push(arguments);};
  window.formspree('initForm',{formElement:'#booking-form',formId:'xnpalpgg'});

  const formspreeScript=document.createElement('script');
  formspreeScript.src='https://unpkg.com/@formspree/ajax@1';
  formspreeScript.defer=true;
  document.head.appendChild(formspreeScript);
}

// Responsive YouTube gallery for the live section.
const liveGalleryStyles=document.createElement('link');
liveGalleryStyles.rel='stylesheet';
liveGalleryStyles.href='css/live-gallery.css?v=1';
document.head.appendChild(liveGalleryStyles);

const liveGalleryScript=document.createElement('script');
liveGalleryScript.src='js/live-gallery.js?v=1';
liveGalleryScript.defer=true;
document.head.appendChild(liveGalleryScript);
