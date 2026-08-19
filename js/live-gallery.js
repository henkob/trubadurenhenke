(()=>{
  const liveSection=document.querySelector('#live');
  if(!liveSection)return;

  const videos=[
    {id:'U6FW0fBWcvg',song:'Angels',place:'Brasserie Stadsparken · Västerås'},
    {id:'Noi6hNusP1w',song:'Yellow Submarine',place:'Afterski · Åre'},
    {id:'8xrqnT9fWfk',song:'Säg mig var du står',place:'Afterski · Åre'},
    {id:'Ey3ZzxWfGfQ',song:'I Want It That Way',place:'Event · Vildmarkshotellet'},
    {id:'kUhpfD7tnq8',song:"I'm So Happy",place:'Afterski · Gressoney, Italien'},
    {id:'00vtplmnDv0',song:"What's Going On",place:'After sail · Gran Canaria'}
  ];

  liveSection.innerHTML=`
    <div class="section-heading">
      <p class="eyebrow">Se mig live</p>
      <h2>Sex olika gig. Samma Henke.</h2>
      <p>Afterski, restaurang, event och after sail. Här får du en snabb känsla för hur det kan låta och se ut när jag spelar live.</p>
    </div>
    <div class="video-grid" aria-label="Livevideor">
      ${videos.map(v=>`
        <figure class="video-card">
          <button class="video-trigger" type="button" data-video-id="${v.id}" data-video-title="${v.song} · ${v.place}" aria-label="Spela ${v.song}, ${v.place}">
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
    const id=trigger.dataset.videoId;
    const title=trigger.dataset.videoTitle;
    frameWrap.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modalTitle.textContent=title;
    modal.hidden=false;
    document.body.classList.add('video-modal-open');
    closeButton.focus();
  }

  function closeVideo(){
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