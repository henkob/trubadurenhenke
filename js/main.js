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
