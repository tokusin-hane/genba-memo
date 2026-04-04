const LANGS = {
  vi:{name:"ベトナム語",flag:"🇻🇳",key:"vi",kana:"vi_k"},
  id:{name:"インドネシア語",flag:"🇮🇩",key:"id",kana:"id_k"},
  en:{name:"英語",flag:"🇬🇧",key:"en",kana:"en_k"},
  bn:{name:"ベンガル語",flag:"🇧🇩",key:"bn",kana:"bn_k"},
};

let curCat='all', curLang='all', q='';

const totalWords = Object.values(TERMS).reduce((s,v)=>s+v.items.length,0);
document.getElementById('wordCount').textContent = `全${totalWords}語`;

const catBar=document.getElementById('catBar');
Object.entries(TERMS).forEach(([cat,data])=>{
  const b=document.createElement('button');
  b.className='cat-btn'; b.dataset.cat=cat;
  b.textContent=`${data.emoji} ${cat}`;
  catBar.appendChild(b);
});

catBar.addEventListener('click',e=>{
  const b=e.target.closest('.cat-btn'); if(!b) return;
  document.querySelectorAll('.cat-btn').forEach(x=>{ x.classList.remove('active'); x.style.cssText=''; });
  b.classList.add('active');
  const cat=b.dataset.cat;
  const color=cat==='all'?'#2563eb':TERMS[cat].color;
  b.style.background=color; b.style.color='white'; b.style.borderColor=color;
  curCat=cat; render();
});

document.querySelector('.lang-bar').addEventListener('click',e=>{
  const b=e.target.closest('.lang-btn'); if(!b) return;
  document.querySelectorAll('.lang-btn').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); curLang=b.dataset.lang; render();
});

document.getElementById('searchInput').addEventListener('input',e=>{
  q=e.target.value.trim().toLowerCase(); render();
});

function transRows(item){
  const langs=curLang==='all'?Object.values(LANGS):[LANGS[curLang]];
  return langs.map(l=>`
    <div class="term-row">
      <span class="term-flag">${l.flag}</span>
      <span class="term-text">${item[l.key]}</span>
      <span class="term-kana">（${item[l.kana]}）</span>
    </div>`).join('');
}

function render(){
  const list=document.getElementById('termList');
  list.innerHTML=''; let total=0;
  Object.entries(TERMS).forEach(([cat,data])=>{
    if(curCat!=='all'&&curCat!==cat) return;
    const filtered=data.items.filter(item=>{
      if(!q) return true;
      return item.ja.includes(q)||item.yomi.includes(q)||
             Object.values(LANGS).some(l=>item[l.key].toLowerCase().includes(q));
    });
    if(!filtered.length) return;
    total+=filtered.length;
    const hdr=document.createElement('div');
    hdr.className='cat-section-header';
    hdr.style.color=data.color;
    hdr.innerHTML=`<div class="cat-dot" style="background:${data.color}"></div>${data.emoji} ${cat}`;
    list.appendChild(hdr);
    filtered.forEach(item=>{
      const card=document.createElement('div');
      card.className='term-card';
      card.style.borderLeftColor=data.color;
      card.innerHTML=`
        <div class="term-left">
          <div class="term-ja">${item.ja}</div>
          <div class="term-yomi">${item.yomi}</div>
          ${transRows(item)}
        </div>
        <div class="term-arrow">›</div>`;
      card.addEventListener('click',()=>openModal(item,cat,data));
      list.appendChild(card);
    });
  });
  if(!total) list.innerHTML=`<div class="empty"><div class="empty-icon">🔍</div><div>「${q}」は見つかりません</div></div>`;
}

function openModal(item,cat,data){
  document.getElementById('modalBadge').textContent=`${data.emoji} ${cat}`;
  document.getElementById('modalBadge').style.background=data.color;
  document.getElementById('modalJa').textContent=item.ja;
  document.getElementById('modalYomi').textContent=item.yomi;
  document.getElementById('modalLangs').innerHTML=Object.values(LANGS).map(l=>`
    <div class="modal-lang-card">
      <div class="modal-flag">${l.flag}</div>
      <div>
        <div class="modal-lang-name">${l.name}</div>
        <div class="modal-lang-text">${item[l.key]}</div>
        <div class="modal-lang-kana">（${item[l.kana]}�t�</div>
      </div>
    </div>`).join('');
  document.getElementById('modalOverlay').classList.add('show');
}

document.getElementById('modalOverlay').addEventListener('click',e=>{
  if(e.target===document.getElementById('modalOverlay'))
    document.getElementById('modalOverlay').classList.remove('show');
});

window.addEventListener('offline',()=>document.getElementById('offlineBar').classList.add('show'));
window.addEventListener('online',()=>document.getElementById('offlineBar').classList.remove('show'));

render();
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
