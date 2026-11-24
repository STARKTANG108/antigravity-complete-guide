/* ==========================================================================
   Google Antigravity Complete Guide — Interactive Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollProgressAndBackTop();
  initMobileToc();
  initScrollSpy();
  initPricingToggle();
  initChecklists();
  initCheatSheetFilter();
  initPrompts();
  initCommandChips();
});

/* ---------- Toast Helper ---------- */
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

/* ---------- Clipboard Helper ---------- */
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

/* ---------- 1. Theme Toggle ---------- */
function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('ag-guide-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(initial);

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('ag-guide-theme', next);
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (btn) {
      btn.innerHTML = theme === 'dark'
        ? '<span aria-hidden="true">☀️</span><span>浅色</span>'
        : '<span aria-hidden="true">🌙</span><span>深色</span>';
      btn.setAttribute('aria-label', theme === 'dark' ? '切换为浅色模式' : '切换为深色模式');
    }
  }
}

/* ---------- 2. Reading Progress & Back to Top ---------- */
function initScrollProgressAndBackTop() {
  const bar = document.getElementById('readingProgress');
  const backTop = document.getElementById('backTop');
  const pctLabel = document.getElementById('tocProgressPct');

  function update() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

    if (bar) bar.style.width = pct.toFixed(1) + '%';
    if (pctLabel) pctLabel.textContent = Math.round(pct) + '%';
    if (backTop) {
      if (scrollTop > 420) backTop.classList.add('visible');
      else backTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();

  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ---------- 3. Mobile TOC Drawer ---------- */
function initMobileToc() {
  const openBtn = document.getElementById('mobileTocBtn');
  const sidebar = document.getElementById('tocSidebar');
  const backdrop = document.getElementById('tocBackdrop');

  if (!openBtn || !sidebar || !backdrop) return;

  function setOpen(state) {
    sidebar.classList.toggle('open', state);
    backdrop.classList.toggle('open', state);
    document.body.style.overflow = state ? 'hidden' : '';
  }

  openBtn.addEventListener('click', () => setOpen(!sidebar.classList.contains('open')));
  backdrop.addEventListener('click', () => setOpen(false));

  sidebar.querySelectorAll('a.toc-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) setOpen(false);
    });
  });
}

/* ---------- 4. Scrollspy ---------- */
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.toc-link'));
  const targets = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === id));
        }
      });
    },
    { rootMargin: '-18% 0px -68% 0px', threshold: 0.01 }
  );

  targets.forEach((t) => observer.observe(t));
}

/* ---------- 5. Pricing Mode Toggle (Black Friday vs Regular) ---------- */
function initPricingToggle() {
  const buttons = document.querySelectorAll('[data-pricing-mode]');
  const proPriceEl = document.getElementById('proPriceDisplay');
  const proNoteEl = document.getElementById('proPriceNote');
  const modeHintEl = document.getElementById('pricingModeHint');

  if (!buttons.length || !proPriceEl) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-pricing-mode');
      buttons.forEach((b) => b.classList.toggle('active', b === btn));

      if (mode === 'bf') {
        proPriceEl.innerHTML =
          '<span class="strike-price">29,000日元/年</span>14,500 日元/年<span class="price-sub">折合月均约 1,208 日元（首年最高半价）</span>';
        if (proNoteEl) proNoteEl.textContent = '较按月付费（年 34,800 日元）直省 20,300 日元';
        if (modeHintEl) modeHintEl.textContent = '当前显示：2026 黑五首年特惠价（Ultra 与单月付不参与直降）';
      } else {
        proPriceEl.innerHTML =
          '2,900 日元/月<span class="price-sub" style="color: var(--text-muted)">年付常规价 29,000 日元/年（含税）</span>';
        if (proNoteEl) proNoteEl.textContent = '第 2 年起按 29,000 日元/年自动续费';
        if (modeHintEl) modeHintEl.textContent = '当前显示：日本区常规官方含税定价';
      }
    });
  });
}

/* ---------- 6. Interactive Checklists with Persistence ---------- */
function initChecklists() {
  const groups = document.querySelectorAll('[data-checklist-group]');
  groups.forEach((group) => {
    const groupId = group.getAttribute('data-checklist-group');
    const storageKey = 'ag-checklist-' + groupId;
    const boxes = Array.from(group.querySelectorAll('.step-checkbox'));
    const badge = group.querySelector('.checklist-progress-badge');

    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (_) {
      saved = {};
    }

    function syncUI() {
      let checkedCount = 0;
      boxes.forEach((box) => {
        const item = box.closest('.step-check-item');
        if (box.checked) {
          checkedCount++;
          item && item.classList.add('checked');
        } else {
          item && item.classList.remove('checked');
        }
      });

      if (badge) {
        badge.textContent = checkedCount === boxes.length
          ? `已完成 ${checkedCount}/${boxes.length} ✓`
          : `进度 ${checkedCount}/${boxes.length}`;
        badge.classList.toggle('done', checkedCount === boxes.length);
      }
    }

    boxes.forEach((box) => {
      const id = box.getAttribute('data-step-id');
      if (saved[id]) box.checked = true;

      box.addEventListener('change', () => {
        saved[id] = box.checked;
        localStorage.setItem(storageKey, JSON.stringify(saved));
        syncUI();
        if (box.checked) showToast('已打卡完成此步骤 ✓');
      });
    });

    syncUI();
  });
}

/* ---------- 7. Quick Reference Cheat Sheet Filter & Search ---------- */
function initCheatSheetFilter() {
  const pills = document.querySelectorAll('[data-cheat-filter]');
  const searchInput = document.getElementById('cheatSearch');
  const items = Array.from(document.querySelectorAll('.cheat-item'));
  const emptyMsg = document.getElementById('cheatEmpty');

  if (!items.length) return;

  let activeCat = 'all';

  function applyFilter() {
    const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
    let visible = 0;

    items.forEach((item) => {
      const cat = item.getAttribute('data-cat') || '';
      const text = item.textContent.toLowerCase();
      const catOk = activeCat === 'all' || cat === activeCat;
      const queryOk = !q || text.includes(q);
      const show = catOk && queryOk;
      item.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    if (emptyMsg) emptyMsg.style.display = visible === 0 ? 'block' : 'none';
  }

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      activeCat = pill.getAttribute('data-cheat-filter');
      pills.forEach((p) => p.classList.toggle('active', p === pill));
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }
}

/* ---------- 8. Prompt Copy & CN/JP Version Switcher ---------- */
const PROMPTS = {
  p1: {
    zh: `请围绕以下主题，先通过 Web 搜索与官方文档核查一手信息，再撰写一篇深度长文。

【主题】在此填写你的主题
【目标读者】在此填写目标受众

写作规范：
1. 明确区分已核实的官方事实（价格、日期、基准测试、规格参数）与推断内容
2. 未核实的数字或规格绝不臆测补全，直接写明“未确认”或仅呈现已核实范围
3. 采用自然亲切的口语化表达，保持每段 1~2 句的清爽换行节奏，严禁浮夸煽动与翻译腔
4. 除了亮点，必须客观写出短板、注意事项与场景选型速查表
5. 输出定稿前请自查一遍，确保无前后矛盾或过时信息。`,
    ja: `以下のテーマについて、Web検索と公式ドキュメントで一次情報を裏取りしてから長文記事を書いてください。

【テーマ】ここにテーマを書く
【ターゲット読者】ここに想定読者を書く

執筆ルール：
1. 確認できた公式事実（料金・日付・ベンチマーク・仕様）と推測はハッキリ分けて書く
2. 未確認の数字や仕様は推測で埋めず、「未確認」または確認できた範囲だけ書く
3. 親しみやすい話し言葉ベースで、1段落1〜2文の読みやすい改行リズムにする。大げさな煽りや翻訳調は禁止
4. 良い点だけでなく、弱点・注意点・使い分け表も必ず入れる
5. 出力前に矛盾や古い情報がないか自己チェックしてから完成稿を出す。`
  },
  p2: {
    zh: `/plan /grill-me 我想推进以下这项任务。

【想要制作的内容 / 目标】在此写明你的目的

推进规范：
1. 不要一上来就直接修改文件，只针对需求中模糊的地方每次提 1 个问题（每个问题把推荐方案放在第一位）
2. 方向敲定后，将涉及修改的文件、实施步骤与验证测试项整理成简短计划发我确认
3. 获得批准后再高效执行；若同一个报错连续出现 2 次，先暂停并向我汇报原因及修复方案。`,
    ja: `/plan /grill-me 以下の作業を進めたいです。

【作りたいもの・ゴール】ここに目的を書く

進め方のルール：
1. いきなりファイルを書き換えず、仕様が曖昧な点だけ1問ずつ質問する（各質問におすすめ案を先頭に添える）
2. 方針が固まったら、変更対象ファイル・手順・確認テスト項目を短い計画にまとめて見せる
3. 承認後は効率重視で進め、同じエラーが2回続いたら一度立ち止まって原因と修正計画を報告する。`
  },
  p3: {
    zh: `【在主线任务后台同步调研规格或备选方案时】
/btw 对比当前方案与备选方案（〇〇方案），两者在工作量和 Bug 风险上有什么差异？请实际阅读相关文件后，用 3 句话给出结论。

【将多项任务并行拆分并引入验收把关时】
/swarm 请把以下任务拆分为独立分工并行推进。最后必须由 @verifier 全面核查所有文件与运行结果，确认零问题后再提交完工报告。
・分工 1：〇〇的调研与结构方案制定
・分工 2：〇〇的代码实现与测试编写
・分工 3：最终复核与遗漏修补`,
    ja: `【メイン作業の裏で仕様や別案を調べたいとき】
/btw 今の方針と別案（〇〇案）を比べたとき、作業量と不具合リスクはどう違いますか？関連ファイルを実際に読んで3行で結論を教えてください。

【複数タスクを並列で片づけて検品まで回したいとき】
/swarm 以下のタスクを独立担当に分けて並列で進めてください。最後に必ず@verifierが全ファイルと実行結果をチェックし、問題ゼロになってから完了報告を出してください。
・担当1：〇〇の調査と構成案作成
・担当2：〇〇のコード実装とテスト作成
・担当3：最終チェックと漏れ修正`
  }
};

function initPrompts() {
  document.querySelectorAll('.prompt-card').forEach((card) => {
    const key = card.getAttribute('data-prompt-key');
    const pre = card.querySelector('.prompt-body');
    const langBtns = card.querySelectorAll('.lang-mini-btn');
    const copyBtn = card.querySelector('.copy-btn');

    if (!key || !PROMPTS[key] || !pre) return;

    let currentLang = 'zh';
    pre.textContent = PROMPTS[key][currentLang];

    langBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentLang = btn.getAttribute('data-lang');
        langBtns.forEach((b) => b.classList.toggle('active', b === btn));
        pre.textContent = PROMPTS[key][currentLang];
      });
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await copyText(PROMPTS[key][currentLang]);
          const original = copyBtn.innerHTML;
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = '<span>✓</span><span>已复制</span>';
          showToast(currentLang === 'zh' ? '中文提示词已复制到剪贴板 ✓' : '日文原版提示词已复制 ✓');
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = original;
          }, 1800);
        } catch (_) {
          showToast('复制失败，请手动选中复制');
        }
      });
    }
  });
}

/* ---------- 9. Clickable Command Chips ---------- */
function initCommandChips() {
  document.querySelectorAll('.cmd-chip').forEach((chip) => {
    chip.setAttribute('title', '点击复制命令');
    chip.addEventListener('click', async () => {
      const text = chip.getAttribute('data-copy') || chip.textContent.trim();
      try {
        await copyText(text);
        showToast(`已复制：${text}`);
      } catch (_) {
        showToast('复制失败');
      }
    });
  });
}
