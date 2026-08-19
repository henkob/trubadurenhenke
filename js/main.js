const button=document.querySelector('.menu-button');const nav=document.querySelector('#main-nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));}const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

const testimonialLogos=[
  {src:'images/brasseriet.jpg',alt:'Brasserie Stadsparken'},
  {src:'images/steam.png',alt:'Steam Hotel'},
  {src:'images/Riva_Logo_Guld_2018.webp',alt:'Restaurang Riva'},
  {src:'images/majkens.webp',alt:'Majkens Kök'}
];
document.querySelectorAll('.testimonial').forEach((testimonial,index)=>{const logo=testimonialLogos[index];if(!logo)return;const img=document.createElement('img');img.className='testimonial-logo';img.src=logo.src;img.alt=logo.alt;img.loading='lazy';testimonial.insertBefore(img,testimonial.firstChild);});