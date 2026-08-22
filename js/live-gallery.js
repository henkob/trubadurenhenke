(()=>{
  const liveSection=document.querySelector('#live');
  if(!liveSection)return;

  const videos=[
    {id:'U6FW0fBWcvg',file:'video/Promo/Angels.mp4',song:'Angels',place:'Brasserie Stadsparken · Västerås'},
    {id:'Noi6hNusP1w',file:'video/Promo/Yellow%20submarine.mp4',song:'Yellow Submarine',place:'Afterski · Åre'},
    {id:'8xrqnT9fWfk',file:'video/Promo/Sa%CC%88g%20mig%20vad%20du%20sta%CC%8Ar.mp4',song:'Säg mig var du står',place:'Afterski · Åre'},
    {id:'Ey3ZzxWfGfQ',file:'video/Promo/99AC4C1A-21B4-4ADA-8105-5E9C39D6624C%202.mp4',song:'I Want It That Way',place:'Event · Vildmarkshotellet'},
    {id:'kUhpfD7tnq8',file:'video/Promo/I%E2%80%99m%20so%20happy.mp4',song:"I'm So Happy",place:'Afterski · Gressoney, Italien'},
    {id:'00vtplmnDv0',file:'video/Promo/What%E2%80%99s%20going%20on.mp4',song:"What's Going On",place:'After sail · Gran Canaria'}
  ];

  liveSection.innerHTML=`
    <div class="section-heading">
      <p class="eyebrow">Se mig live</p>
      <h2>Så här kan det låta</h2>
      <p>Afterski, restaurang, event och after sail. Här får du en känsla för hur det kan låta och se ut när jag spelar live.</p>
    </div>
    <div class="video-grid" aria-label="Livevideor">
      ${videos.map(v=>`
        <figure class="video-card">
          <button class="video-trigger" type="button" data-video-file="${v.file}" data-video-title="${v.song} · ${v.place}" aria-label="Spela ${v.song}, ${v.place}">
            <img class="video-thumb" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy">
            <span class="video-shade" aria-hidden="true"></span>
            <span class="video-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
            <span class="video-meta"><span class="video-song">${v.song}</span><span class="video-place">${v.place}</span></span>
          </button>
        </figure>`).join('')}
    </div>
    <div class="video-modal" id="video-modal" hidden>
      <div class="video-dialog" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
        <button class="video-close" type="button" aria-label="Stäng videon">×</button>
        <div class="video-frame-wrap"></div>
        <p class="video-modal-title" id="video-modal-title"></p>
      </div>
    </div>`;

  const modal=liveSection.querySelector('#video-modal');
  const frameWrap=modal.querySelector('.video-frame-wrap');
  const modalTitle=modal.querySelector('.video-modal-title');
  const closeButton=modal.querySelector('.video-close');
  let lastTrigger=null;

  function openVideo(trigger){
    lastTrigger=trigger;
    const file=trigger.dataset.videoFile;
    const title=trigger.dataset.videoTitle;
    modalTitle.textContent=title;
    modal.hidden=false;
    document.body.classList.add('video-modal-open');
    frameWrap.innerHTML=`<video src="${file}" title="${title}" controls autoplay playsinline preload="metadata"></video>`;
    const player=frameWrap.querySelector('video');
    if(player){const playPromise=player.play();if(playPromise&&typeof playPromise.catch==='function')playPromise.catch(()=>{});}
    closeButton.focus({preventScroll:true});
  }

  function closeVideo(){
    const player=frameWrap.querySelector('video');
    if(player){player.pause();player.removeAttribute('src');player.load();}
    modal.hidden=true;
    frameWrap.innerHTML='';
    modalTitle.textContent='';
    document.body.classList.remove('video-modal-open');
    if(lastTrigger)lastTrigger.focus();
  }

  liveSection.querySelectorAll('.video-trigger').forEach(trigger=>trigger.addEventListener('click',()=>openVideo(trigger)));
  closeButton.addEventListener('click',closeVideo);
  modal.addEventListener('click',event=>{if(event.target===modal)closeVideo();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!modal.hidden)closeVideo();});
})();