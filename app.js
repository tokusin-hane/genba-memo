/* ──────────────────────────────────────────

   げんばメモ  app.js  v4.0  グループ対応版
────────────────────────────────────────── */

const GROUPS = [
  { key: "共通",    label: "共通",    icon: "🏭" },
  { key: "製造",    label: "製造",    icon: "🔩" },
  { key: "建設",    label: "建設",    icon: "🏗️" },
  { key: "介護",    label: "介護",    icon: "🤝" },
  { key: "生活・会話", label: "生活", icon: "💬" }
];

let activeLang   = 'vi';
let activeGroup  = null;
let activeCat    = null;

function catsInGroup(groupKey) {
  return Object.entries(TERMS)
    .filter(([, d]) => d.group === groupKey)
    .map(([name]) => name);
}

function init() {
  buildGroupBar();
  buildLangBar();
  selectGroup(GROUPS[0].key);
  setupSearch();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  window.addEventListener('offline', () => document.getElementById('offlineBar').classList.add('show'));
  window.addEventListener('online',  () => document.getElementById('offlineBar').classList.remove('show'));
}

function buildGroupBar() {
  const bar = document.getElementById('groupBar');
  bar.innerHTML = '';
  GROUPS.forEach(g => {
    const btn = document.createElement('button');
    btn.className = 'group-btn';
    btn.dataset.group = g.key;
    btn.innerHTML = '<span class="g-icon">' + g.icon + '</span><span class="g-label">' + g.label + '</span>';
    btn.addEventListener('click', () => selectGroup(g.key));
    bar.appendChild(btn);
  });
}

function selectGroup(groupKey) {
  activeGroup = groupKey;
  activeCat   = null;
  document.getElementById('searchBox').value = '';
  document.getElementById('searchArea').style.display = 'none';
  document.querySelectorAll('.group-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.group === groupKey);
  });
  buildCatBar();
  renderTerms();
}

function buildCatBar() {
  const bar = document.getElementById('catBar');
  bar.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'cat-btn active';
  allBtn.textContent = 'すべて';
  allBtn.addEventListener('click', () => {
    activeCat = null;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    renderTerms();
  });
  bar.appendChild(allBtn);
  catsInGroup(activeGroup).forEach(catName => {
    const data = TERMS[catName];
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.innerHTML = data.emoji + ' ' + catName;
    btn.addEventListener('click', () => {
      activeCat = catName;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTerms();
    });
    bar.appendChild(btn);
  });
}

function buildLangBar() {
  const bar = document.getElementById('langBar');
  bar.innerHTML = '';
  Object.entries(LANGS).forEach(([key, lang]) => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn' + (key === activeLang ? ' active' : '');
    btn.innerHTML = lang.flag + ' ' + lang.name;
    btn.addEventListener('click', () => {
      activeLang = key;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTerms();
    });
    bar.appendChild(btn);
  });
}

function renderTerms(searchQuery) {
  const list = document.getElementById('termList');
  list.innerHTML = '';
  const lang = LANGS[activeLang];
  let totalCount = 0;
  if (searchQuery) {
    const q = searchQuery.trim();
    Object.entries(TERMS).forEach(([catName, data]) => {
      const matched = data.items.filter(item =>
        item.ja.includes(q) ||
        item.yomi.includes(q) ||
        (item[lang.key] && item[lang.key].toLowerCase().includes(q.toLowerCase()))
      );
      if (matched.length === 0) return;
      totalCount += matched.length;
      const header = document.createElement('div');
      header.className = 'cat-header';
      header.style.background = data.color;
      header.innerHTML = data.emoji + ' ' + catName;
      list.appendChild(header);
      matched.forEach(item => list.appendChild(makeCard(item, catName, data)));
    });
    if (totalCount === 0) {
      list.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><div>「' + searchQuery + '」は見つかりません</div></div>';
    }
    return;
  }
  const cats = activeCat ? [activeCat] : catsInGroup(activeGroup);
  cats.forEach(catName => {
    const data = TERMS[catName];
    if (!data) return;
    const header = document.createElement('div');
    header.className = 'cat-header';
    header.style.background = data.color;
    header.innerHTML = data.emoji + ' ' + catName;
    list.appendChild(header);
    data.items.forEach(item => {
      list.appendChild(makeCard(item, catName, data));
      totalCount++;
    });
  });
  if (totalCount === 0) {
    list.innerHTML = '<div class="empty"><div class="empty-icon">📂</div><div>用語がありません</div></div>';
  }
}

function makeCard(item, catName, data) {
  const lang = LANGS[activeLang];
  const card = document.createElement('div');
  card.className = 'term-card';
  card.innerHTML =
    '<div class="term-info">' +
      '<div class="term-ja">' + item.ja + '<span class="term-yomi">（' + item.yomi + '）</span></div>' +
      '<div class="term-trans">' + item[lang.key] + '</div>' +
      '<div class="term-kana">' + item[lang.kana] + '</div>' +
    '</div>' +
    '<div class="term-arrow">›</div>';
  card.addEventListener('click', () => openModal(item, catName, data));
  return card;
}

function setupSearch() {
  const input = document.getElementById('searchBox');
  const searchArea = document.getElementById('searchArea');
  const toggleBtn  = document.getElementById('searchToggle');
  toggleBtn.addEventListener('click', () => {
    const open = searchArea.style.display === 'none' || !searchArea.style.display;
    searchArea.style.display = open ? 'block' : 'none';
    if (open) { input.focus(); }
    else { input.value = ''; renderTerms(); }
  });
  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length === 0) { renderTerms(); }
    else { renderTerms(q); }
  });
}

function openModal(item, catName, data) {
  document.getElementById('modalBadge').textContent = data.emoji + ' ' + catName;
  document.getElementById('modalBadge').style.background = data.color;
  document.getElementById('modalJa').textContent = item.ja;
  document.getElementById('modalYomi').textContent = item.yomi;
  document.getElementById('modalLangs').innerHTML = Object.values(LANGS).map(l =>
    '<div class="modal-lang-card">' +
      '<div class="modal-flag">' + l.flag + '</div>' +
      '<div>' +
        '<div class="modal-lang-name">' + l.name + '</div>' +
        '<div class="modal-lang-text">' + item[l.key] + '</div>' +
        '<div class="modal-lang-kana">（' + item[l.kana] + '）</div>' +
      '</div>' +
    '</div>'
  ).join('');
  document.getElementById('modalOverlay').classList.add('show');
}

document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) {
    document.getElementById('modalOverlay').classList.remove('show');
  }
});

init();
