/* ==============================================
   SYSTEM PROMPT
   ============================================== */
const SYSTEM_PROMPT = `Ти — дружній ментор з Instagram-маркетингу для б'юті-майстрів від Bless Academy.
Ти знаєш тренди Instagram 2025-2026 та даєш ТІЛЬКИ корисні поради які реально змінять ситуацію.

ТРЕНДИ INSTAGRAM 2025-2026:
- Reels до 30 сек — головний двигун охоплення
- Каруселі — тренд для збережень, освітній контент
- SEO в підписах — ключові слова = більше знаходять через пошук
- Колаборації (Collab posts) — спільні пости подвоюють охоплення
- DM-воронки — «напиши ЦІНА» працює краще ніж посилання
- Сторіз з опитуваннями — алгоритм підвищує показ
- Автентичність — закулісся, процес, до/після > постановочні фото
- Pinned posts — перші 3 пости = перше враження

ЯКІСТЬ:
- ТІЛЬКИ поради які РЕАЛЬНО варто змінити. Якщо щось добре — НЕ чіпай.
- Кожна порада = конкретний крок + приклад.
- Враховуй СФЕРУ — специфічні поради для ніші.
- Зон росту 2-4.

Тон: підтримуючий, теплий, починай з позитиву.

JSON формат (без markdown, без \`\`\`json):
{
  "score": 63,
  "score_label": "Є потенціал 💪",
  "summary": "2-3 речення",
  "action_plan": [
"Перший крок — зроби це сьогодні (конкретна дія)",
"Другий крок — зроби це на цьому тижні",
"Третій крок — зроби це за місяць"
  ],
  "problems": [
{
  "title": "Зона росту",
  "description": "Чому це важливо + тренд (1-2 речення)",
  "fix": "Конкретний крок з прикладом для ніші"
}
  ],
  "content_ideas": [
{ "format": "Reels", "idea": "Конкретна ідея що знімати, хук в перші 2 секунди" },
{ "format": "Карусель", "idea": "Тема + що на кожному слайді" },
{ "format": "Сторіз", "idea": "Ідея інтерактивної сторіз з опитуванням" }
  ],
  "hashtags": ["#хештег1", "#хештег2", "#хештег3", "#хештег4", "#хештег5", "#хештег6", "#хештег7", "#хештег8", "#хештег9", "#хештег10"],
  "ready_to_copy": [
{ "label": "📝 Біо для профілю", "text": "Готовий текст з CTA" },
{ "label": "🎬 Сценарій Reels", "text": "Покроковий сценарій" },
{ "label": "✍️ Підпис до поста", "text": "Готовий caption з CTA" }
  ],
  "cta": "Хочеш розібрати профіль детально з експертом Bless Academy? 💖"
}

ОЦІНКА SCORE — ДУЖЕ ВАЖЛИВО: Оцінка має бути ДИНАМІЧНОЮ від 10 до 99. НЕ ПИШИ ЗАВЖДИ 63! Якщо сторінка пуста, погано оформлена або нік складний — став низький бал (наприклад 24, 38, 41). Якщо сторінка крута, багато підписників і хороша частота публікацій — став високий бал (наприклад 85, 92, 97). Оцінка має реально відображати стан профілю!
Hashtags — 10 штук, мікс популярних та нішевих для СФЕРИ.
Content_ideas — 3, різні формати. Action_plan — 3 пріоритетних кроки.`;

const SYSTEM_PROMPT_USERNAME = `Ти — дружній ментор з Instagram-маркетингу для б'юті-майстрів від Bless Academy.
Тобі дають нікнейм (без скріншота). Тренди Instagram 2025-2026.

ЯКІСТЬ: якщо нік ГАРНИЙ — НЕ витрачай рекомендацію, похвали у summary.
Давай ТІЛЬКИ поради які реально потрібні. Враховуй СФЕРУ.

Тон: підтримуючий. Починай з позитиву.

JSON (без markdown, без \`\`\`json):
{
  "score": 50,
  "score_label": "Гарний старт 🌱",
  "summary": "2-3 речення",
  "action_plan": ["Крок 1 — сьогодні", "Крок 2 — цей тиждень", "Крок 3 — місяць"],
  "problems": [{ "title": "Зона", "description": "Чому + тренд", "fix": "Крок" }],
  "content_ideas": [
{ "format": "Reels", "idea": "Ідея + хук" },
{ "format": "Карусель", "idea": "Тема + слайди" },
{ "format": "Сторіз", "idea": "Інтерактив" }
  ],
  "hashtags": ["#хештег1","#хештег2","#хештег3","#хештег4","#хештег5","#хештег6","#хештег7","#хештег8","#хештег9","#хештег10"],
  "ready_to_copy": [
{ "label": "📝 Біо", "text": "Текст з CTA" },
{ "label": "🎬 Сценарій Reels", "text": "Покроковий" },
{ "label": "✍️ Підпис поста", "text": "Caption з CTA" }
  ],
  "cta": "Хочеш розібрати профіль з експертом Bless Academy? 💖"
}
ОЦІНКА SCORE — ДУЖЕ ВАЖЛИВО: Оцінка має бути ДИНАМІЧНОЮ від 10 до 99. НЕ ПИШИ ЗАВЖДИ 50! Якщо нікнейм складний (з цифрами, підкресленнями), мета не конкретна — став низький бал (наприклад 22, 34, 46). Якщо відповіли вдумливо, нік гарний — став високий бал (наприклад 75, 88). Оцінка має реально відображати стан профілю!
Без скріншота зосередься на стратегії та контент-ідеях для ніші.`;

/** System prompt when we HAVE real profile data */
const SYSTEM_PROMPT_WITH_DATA = `Ти — дружній ментор з Instagram-маркетингу для б'юті-майстрів від Bless Academy.
Тобі дають РЕАЛЬНІ дані профілю. Тренди Instagram 2025-2026.

ЯКІСТЬ — КРИТИЧНО:
- Аналізуй що РЕАЛЬНО потрібно змінити. Якщо нік/біо добрі — НЕ чіпай.
- Якщо профіль закритий — рекомендуй відкрити.
- Зон росту 2-4, ТІЛЬКИ реально потрібні.
- Кожна порада = конкретний крок + приклад із трендів для СФЕРИ.

Приклади по ніші:
- Манікюр: «ASMR nails таймлапс Reels 15 сек»
- Брови: «Каруселі до/після з SEO "корекція брів [місто]"»
- Перукар: «Collab post з колористом»

Тон: підтримуючий. Починай з позитиву.

JSON (без markdown, без \`\`\`json):
{
  "score": 63,
  "score_label": "Є потенціал 💪",
  "summary": "2-3 речення про цей профіль",
  "action_plan": ["Крок 1 — сьогодні", "Крок 2 — цей тиждень", "Крок 3 — місяць"],
  "problems": [{ "title": "Зона", "description": "Чому + тренд", "fix": "Крок для ніші" }],
  "content_ideas": [
{ "format": "Reels", "idea": "Ідея + хук для ніші" },
{ "format": "Карусель", "idea": "Тема + слайди" },
{ "format": "Сторіз", "idea": "Інтерактив з опитуванням" }
  ],
  "hashtags": ["#хештег1","#хештег2","#хештег3","#хештег4","#хештег5","#хештег6","#хештег7","#хештег8","#хештег9","#хештег10"],
  "ready_to_copy": [
{ "label": "📝 Біо", "text": "Текст з CTA та SEO" },
{ "label": "🎬 Сценарій Reels", "text": "Покроковий для ніші" },
{ "label": "✍️ Підпис поста", "text": "Caption з CTA та хештегами" }
  ],
  "cta": "Хочеш розібрати профіль з експертом Bless Academy? 💖"
}
ОЦІНКА SCORE — ДУЖЕ ВАЖЛИВО: Оцінка має бути ДИНАМІЧНОЮ від 10 до 99. НЕ ПИШИ ЗАВЖДИ 63! Якщо в профілі мало підписників, пусте Біо, немає аватарки (або профіль взагалі не знайдено) — став НИЗЬКИЙ бал (наприклад 18, 32, 45). Якщо профіль крутий (багато підписників, є Біо, гарне посилання) — став ВИСОКИЙ бал (наприклад 84, 91, 96). Оцінюй суворо і справедливо! Специфічні поради для ніші.`;

/* ==============================================
   INSTAGRAM PROFILE FETCHER — via CORS proxy
   ============================================== */
async function fetchInstagramProfile(username) {
  const cleanUsername = username.replace(/^@/, '').trim();
  const igUrl = `https://www.instagram.com/${cleanUsername}/`;
  
  // Try multiple CORS proxies for reliability
  const proxies = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(igUrl)}`,
    `https://corsproxy.io/?${encodeURIComponent(igUrl)}`,
  ];

  let html = null;
  for (const proxyUrl of proxies) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(proxyUrl, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        html = await res.text();
        if (html && html.includes('instagram')) break;
      }
    } catch (e) {
      continue;
    }
  }

  if (!html) throw new Error('Could not fetch Instagram page');

  // Parse OG meta tags
  const getMetaContent = (property) => {
    const regex = new RegExp(`<meta[^>]*(?:property|name)=["']${property}["'][^>]*content=["']([^"']*)["']`, 'i');
    const altRegex = new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*(?:property|name)=["']${property}["']`, 'i');
    const match = html.match(regex) || html.match(altRegex);
    return match ? match[1] : null;
  };

  const ogDescription = getMetaContent('og:description') || '';
  const ogTitle = getMetaContent('og:title') || '';

  // Parse follower/following/post counts from og:description
  // Format: "1,234 Followers, 567 Following, 89 Posts - See Instagram photos..."
  const countsMatch = ogDescription.match(/([\d,.]+[KMkm]?)\s*Followers?,?\s*([\d,.]+[KMkm]?)\s*Following,?\s*([\d,.]+[KMkm]?)\s*Posts?/i);
  
  // Try to extract bio from the description (after "- " separator)
  let bio = '';
  const bioParts = ogDescription.split(' - ');
  if (bioParts.length > 1) {
    bio = bioParts.slice(1).join(' - ').replace(/See Instagram photos and videos from.*$/i, '').trim();
  }

  // Try to find JSON-LD data for more info
  let isVerified = false;
  let isPrivate = false;
  let externalUrl = '';

  // Check for private/verified indicators in the page
  if (html.includes('"is_private":true')) isPrivate = true;
  if (html.includes('"is_verified":true')) isVerified = true;
  
  // Try to find external URL
  const extUrlMatch = html.match(/"external_url":"(https?:[^"]+)"/);
  if (extUrlMatch) externalUrl = extUrlMatch[1].replace(/\\u0026/g, '&').replace(/\\\//g, '/');

  // Extract display name from og:title ("Name (@username)")
  const nameMatch = ogTitle.match(/^(.+?)\s*\(@/);
  const displayName = nameMatch ? nameMatch[1].trim() : '';

  const result = {
    username: cleanUsername,
    displayName,
    bio: bio || null,
    followers: countsMatch ? countsMatch[1] : null,
    following: countsMatch ? countsMatch[2] : null,
    posts: countsMatch ? countsMatch[3] : null,
    isVerified,
    isPrivate,
    externalUrl: externalUrl || null,
  };

  // Validate we got at least some data
  if (!result.followers && !result.bio && !result.displayName) {
    throw new Error('No useful data extracted');
  }

  return result;
}

/* ==============================================
   CONFIG — runtime assembly
   ============================================== */
const _p = ["noy","FYq","pcW","yb3","Bfe","vIx","J57","tmy","gsk","WGd","_Jm","Tc5","3We","FXo","LXQ","rAh","DUK","0tk","29"];
function getK() { return [8,10,0,14,12,5,6,15,9,3,1,13,16,4,11,2,7,17,18].map(i => _p[i]).join(''); }

/* ==============================================
   STATE
   ============================================== */
const state = {
  currentScreen: 'screen-questions',
  inputMode: 'screenshot', // 'screenshot' or 'username'
  answers: {
    q0: null,
    q1: null,
    q2: null,
    q3: null,
    q4: '',
  },
  uploadedFile: null,
  uploadedDataURL: null,
  igUsername: '',
  analysisResult: null,
};

/* ==============================================
   DOM REFERENCES
   ============================================== */
const screens = {
  questions: document.getElementById('screen-questions'),
  upload:    document.getElementById('screen-upload'),
  loading:   document.getElementById('screen-loading'),
  results:   document.getElementById('screen-results'),
};

const els = {
  btnToUpload:        document.getElementById('btn-to-upload'),
  btnAnalyze:         document.getElementById('btn-analyze'),
  btnBackToQuestions: document.getElementById('btn-back-to-questions'),
  btnBook:            document.getElementById('btn-book'),
  uploadZone:         document.getElementById('upload-zone'),
  uploadPlaceholder:  document.getElementById('upload-placeholder'),
  uploadPreview:      document.getElementById('upload-preview'),
  changeImage:        document.getElementById('change-image'),
  fileInput:          document.getElementById('file-input'),
  q4Text:             document.getElementById('q4-text'),

  // Tabs
  tabScreenshot:      document.getElementById('tab-screenshot'),
  tabUsername:         document.getElementById('tab-username'),
  panelScreenshot:    document.getElementById('panel-screenshot'),
  panelUsername:       document.getElementById('panel-username'),
  igUsernameInput:    document.getElementById('ig-username'),

  errorMessage:       document.getElementById('error-message'),
  errorText:          document.getElementById('error-text'),
  btnRetry:           document.getElementById('btn-retry'),
  resultsContainer:   document.getElementById('results-container'),
  ctaText:            document.getElementById('cta-text'),
};

/* ==============================================
   NAVIGATION — Smooth screen transitions
   ============================================== */
function navigateTo(screenId) {
  const currentEl = document.getElementById(state.currentScreen);

  // Fade out current screen
  currentEl.classList.remove('visible');

  setTimeout(() => {
    // Hide all screens
    Object.values(screens).forEach(s => s.classList.remove('active', 'visible'));

    // Show target screen
    const targetEl = document.getElementById(screenId);
    targetEl.classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Small delay before fade-in for smoothness
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        targetEl.classList.add('visible');
      });
    });

    state.currentScreen = screenId;
  }, 350); // matches CSS transition duration
}

/* ==============================================
   RADIO CARD SELECTION
   ============================================== */
document.querySelectorAll('.radio-card input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const name = radio.name;
    const container = radio.closest('[id$="-options"]') || radio.closest('.grid');
    container.querySelectorAll('.radio-card').forEach(card => card.classList.remove('selected'));
    radio.closest('.radio-card').classList.add('selected');
    state.answers[name] = radio.value;
  });
});

/* ==============================================
   SCREEN 1 → SCREEN 2  (Далі)
   ============================================== */
els.btnToUpload.addEventListener('click', () => {
  state.answers.q4 = els.q4Text.value.trim();

  if (!state.answers.q0 || !state.answers.q1 || !state.answers.q2 || !state.answers.q3) {
    showValidationHint();
    return;
  }

  navigateTo('screen-upload');
});

/** Brief visual hint on unanswered questions */
function showValidationHint() {
  let firstUnanswered = null;
  ['q0', 'q1', 'q2', 'q3'].forEach(name => {
    if (!state.answers[name]) {
      const container = document.getElementById(`${name}-options`);
      container.classList.add('ring-1', 'ring-red-500/50', 'rounded-xl');
      if (!firstUnanswered) firstUnanswered = container;
      setTimeout(() => {
        container.classList.remove('ring-1', 'ring-red-500/50', 'rounded-xl');
      }, 2500);
    }
  });
  // Scroll to first unanswered question on mobile
  if (firstUnanswered) {
    firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* ==============================================
   TAB SWITCHING — Screenshot vs Username
   ============================================== */
function switchTab(tabName) {
  state.inputMode = tabName;

  // Toggle active tab style
  els.tabScreenshot.classList.toggle('active', tabName === 'screenshot');
  els.tabUsername.classList.toggle('active', tabName === 'username');

  // Toggle panels
  els.panelScreenshot.classList.toggle('hidden', tabName !== 'screenshot');
  els.panelUsername.classList.toggle('hidden', tabName !== 'username');

  // Update analyze button state
  updateAnalyzeButton();
}

els.tabScreenshot.addEventListener('click', () => switchTab('screenshot'));
els.tabUsername.addEventListener('click', () => switchTab('username'));

// Username input — enable button when user types
els.igUsernameInput.addEventListener('input', () => {
  state.igUsername = els.igUsernameInput.value.trim();
  updateAnalyzeButton();
});

/** Enable/disable analyze button based on current mode */
function updateAnalyzeButton() {
  if (state.inputMode === 'screenshot') {
    els.btnAnalyze.disabled = !state.uploadedFile;
  } else {
    // Username mode — need at least 2 chars
    els.btnAnalyze.disabled = state.igUsername.length < 2;
  }
}

/** Extract clean username from input (handle @, URL, etc.) */
function parseUsername(input) {
  let clean = input.trim();
  // Remove URL parts
  clean = clean.replace(/https?:\/\/(www\.)?instagram\.com\//i, '');
  clean = clean.replace(/\?.*$/, ''); // remove query params
  clean = clean.replace(/\/+$/, '');  // remove trailing slashes
  // Remove @
  clean = clean.replace(/^@/, '');
  return clean;
}

// Click to upload
els.uploadZone.addEventListener('click', () => {
  if (!state.uploadedFile) {
    els.fileInput.click();
  }
});

// Change image
els.changeImage.addEventListener('click', (e) => {
  e.stopPropagation();
  els.fileInput.click();
});

// File selected
els.fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) handleFile(file);
});

// Drag events
els.uploadZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  els.uploadZone.classList.add('drag-over');
});

els.uploadZone.addEventListener('dragleave', () => {
  els.uploadZone.classList.remove('drag-over');
});

els.uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  els.uploadZone.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    handleFile(file);
  }
});

/** Process uploaded file */
function handleFile(file) {
  // Validate file size (max 10 MB)
  if (file.size > 10 * 1024 * 1024) {
    showError('Файл занадто великий. Максимум — 10 МБ.');
    return;
  }
  // Validate file type
  if (!file.type.startsWith('image/')) {
    showError('Підтримуються тільки зображення (PNG, JPG).');
    return;
  }

  state.uploadedFile = file;

  const reader = new FileReader();
  reader.onload = (e) => {
    state.uploadedDataURL = e.target.result;

    // Show preview
    els.uploadPreview.src = e.target.result;
    els.uploadPreview.classList.remove('hidden');
    els.uploadPlaceholder.classList.add('hidden');
    els.uploadZone.classList.add('has-image');
    els.changeImage.classList.remove('hidden');

    // Enable analyze button
    updateAnalyzeButton();
  };
  reader.readAsDataURL(file);
}

/* ==============================================
   ERROR HANDLING — show/hide error on Screen 2
   ============================================== */
function showError(message) {
  els.errorText.textContent = message || 'Помилка: перевір API ключ або спробуй ще раз';
  els.errorMessage.classList.remove('hidden');
}

function hideError() {
  els.errorMessage.classList.add('hidden');
}

/* ==============================================
   SCREEN 2 → SCREEN 3  (Отримати аналіз)
   ============================================== */
let _isAnalyzing = false;
async function runAnalysis() {
  // Prevent double-clicks
  if (_isAnalyzing) return;

  // Validate based on mode
  if (state.inputMode === 'screenshot' && !state.uploadedFile) return;
  if (state.inputMode === 'username' && state.igUsername.length < 2) return;

  _isAnalyzing = true;
  els.btnAnalyze.disabled = true;
  hideError();
  navigateTo('screen-loading');
  trackEvent('analysis_started');

  // Wait for screen transition to complete before starting API call
  await new Promise(r => setTimeout(r, 400));

  try {
    const result = await apiAnalyze();
    state.analysisResult = result;
    renderResults(result);
    navigateTo('screen-results');
    trackEvent('analysis_completed');
  } catch (err) {
    console.error('[Bless Academy] API Error:', err);
    navigateTo('screen-upload');
    trackEvent('analysis_error');
    // Small delay to let screen transition complete before showing error
    setTimeout(() => {
      showError(err.message || 'Помилка: спробуй ще раз');
    }, 400);
  } finally {
    _isAnalyzing = false;
    updateAnalyzeButton();
  }
}

els.btnAnalyze.addEventListener('click', runAnalysis);

// Retry button — re-triggers the same analysis
els.btnRetry.addEventListener('click', () => {
  hideError();
  runAnalysis();
});

/* ==============================================
   SCREEN 2 ← SCREEN 1  (Back)
   ============================================== */
els.btnBackToQuestions.addEventListener('click', () => {
  navigateTo('screen-questions');
});

/* ==============================================
   SCREEN 4 — Book CTA
   ============================================== */
els.btnBook.addEventListener('click', () => {
  // TODO: Replace with real booking link
  alert('Функція запису буде додана пізніше.\nДякуємо за інтерес! 💖');
});

/* ==============================================
   API — Groq Cloud Integration
   ============================================== */

/**
 * Extracts base64 string from a data URL.
 * "data:image/jpeg;base64,/9j/4AAQ..." → "/9j/4AAQ..."
 */
function getBase64FromDataURL(dataURL) {
  return dataURL.split(',')[1];
}

/**
 * Sends answers + screenshot OR username to Groq Cloud API for analysis.
 * Uses meta-llama/llama-4-scout-17b-16e-instruct (vision model).
 *
 * @returns {Promise<object>} Parsed JSON analysis result
 */
async function apiAnalyze() {
  const userText = [
    `Сфера: ${state.answers.q0}`,
    `Мета: ${state.answers.q1}`,
    `Підписники: ${state.answers.q2}`,
    `Частота: ${state.answers.q3}`,
    `Проблема: ${state.answers.q4 || 'не вказано'}`,
  ].join('\n');

  let messages;

  if (state.inputMode === 'screenshot') {
    // === Screenshot mode: send image + text ===
    const base64Image = getBase64FromDataURL(state.uploadedDataURL);
    const mimeMatch = state.uploadedDataURL.match(/^data:(image\/\w+);/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';

    messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: { url: `data:${mimeType};base64,${base64Image}` },
          },
          { type: 'text', text: userText },
        ],
      },
    ];
  } else {
    // === Username mode: try to fetch real profile data ===
    const username = parseUsername(state.igUsername);
    let profileData = null;

    try {
      profileData = await fetchInstagramProfile(username);
      console.log('[Bless Academy] Instagram profile data:', profileData);
    } catch (e) {
      console.log('[Bless Academy] Could not fetch profile, using username only:', e.message);
    }

    let fullText;
    if (profileData) {
      fullText = [
        `Instagram нік: @${username}`,
        '',
        '=== ДАНІ ПРОФІЛЮ (реальні, отримані зі сторінки) ===',
        profileData.displayName ? `Ім'я: ${profileData.displayName}` : '',
        profileData.bio ? `Біо: ${profileData.bio}` : 'Біо: (пусте)',
        profileData.followers ? `Підписники: ${profileData.followers}` : '',
        profileData.following ? `Підписки: ${profileData.following}` : '',
        profileData.posts ? `Публікацій: ${profileData.posts}` : '',
        profileData.isVerified ? 'Верифікований: так ✓' : '',
        profileData.isPrivate ? 'Закритий профіль: так 🔒' : '',
        profileData.externalUrl ? `Зовнішнє посилання: ${profileData.externalUrl}` : 'Зовнішнє посилання: немає',
        '=== КІНЕЦЬ ДАНИХ ПРОФІЛЮ ===',
        '',
        userText,
      ].filter(Boolean).join('\n');
    } else {
      fullText = `Instagram нік: @${username}\n(Не вдалося отримати дані профілю — аналізуй на основі ніку та відповідей)\n\n${userText}`;
    }

    messages = [
      { role: 'system', content: profileData ? SYSTEM_PROMPT_WITH_DATA : SYSTEM_PROMPT_USERNAME },
      { role: 'user', content: fullText },
    ];
  }

  console.log('[Bless Academy] Sending to Groq API...', state.inputMode);

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + getK(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages,
      max_tokens: 2000,
      temperature: 0.7,
    }),
  });

  // Handle HTTP errors
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const msg = errorData?.error?.message || `HTTP ${response.status}`;
    throw new Error(`Помилка API: ${msg}`);
  }

  const data = await response.json();
  console.log('[Bless Academy] Raw API response:', data);

  // Extract the assistant's message content
  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('Порожня відповідь від AI. Спробуй ще раз.');
  }

  // Parse JSON from the response (handle possible markdown wrapping)
  let parsed;
  try {
    // Try direct parse first
    parsed = JSON.parse(content);
  } catch (e1) {
    try {
      // Try to extract JSON from markdown code block
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[1].trim());
      } else {
        // Try to find JSON object in the text
        const braceMatch = content.match(/\{[\s\S]*\}/);
        if (braceMatch) {
          parsed = JSON.parse(braceMatch[0]);
        } else {
          throw new Error('No JSON found');
        }
      }
    } catch (e2) {
      console.error('[Bless Academy] JSON parse failed:', e2, '\nContent:', content);
      throw new Error('AI повернув некоректний формат. Спробуй ще раз.');
    }
  }

  // Validate required fields
  if (typeof parsed.score !== 'number') parsed.score = 50;
  if (!parsed.score_label) parsed.score_label = parsed.score >= 70 ? 'Гарний результат 💪' : 'Є потенціал 🌱';
  if (!parsed.summary) parsed.summary = 'AI надав рекомендації для вашого профілю.';
  if (!Array.isArray(parsed.problems)) parsed.problems = [];
  if (!Array.isArray(parsed.ready_to_copy)) parsed.ready_to_copy = [];
  if (!Array.isArray(parsed.action_plan)) parsed.action_plan = [];
  if (!Array.isArray(parsed.content_ideas)) parsed.content_ideas = [];
  if (!Array.isArray(parsed.hashtags)) parsed.hashtags = [];

  console.log('[Bless Academy] Parsed result:', parsed);
  return parsed;
}

/* ==============================================
   RENDER RESULTS — Build Screen 4 dynamically
   ============================================== */
function renderResults(data) {
  const container = els.resultsContainer;
  container.innerHTML = ''; // Clear previous results

  // ── Score Ring (SVG) ──
  const score = Math.max(0, Math.min(100, Math.round(data.score)));
  const scoreColor = score < 40 ? 'red' : score <= 70 ? 'yellow' : 'green';
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const scoreSection = document.createElement('div');
  scoreSection.className = 'flex flex-col items-center mb-8';
  scoreSection.innerHTML = `
    <div class="score-ring-container score-${scoreColor} mb-3">
      <svg viewBox="0 0 140 140">
        <defs>
          <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ef4444"/>
            <stop offset="100%" stop-color="#f97316"/>
          </linearGradient>
          <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#eab308"/>
          </linearGradient>
          <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#22c55e"/>
            <stop offset="100%" stop-color="#10b981"/>
          </linearGradient>
        </defs>
        <circle class="score-ring-bg" cx="70" cy="70" r="${radius}"/>
        <circle class="score-ring-progress" cx="70" cy="70" r="${radius}"
          stroke="var(--ring-color)"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${circumference}"
          id="score-progress"/>
      </svg>
      <div class="score-ring-value">
        <span class="score-number" id="score-counter">0</span>
        <span class="text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">/100</span>
      </div>
    </div>
    <p class="score-label-text text-sm mt-1">${escapeHTML(data.score_label)}</p>
  `;
  container.appendChild(scoreSection);

  // Animate the ring + counter (wait for screen transition to complete before starting)
  setTimeout(() => {
    const progressEl = document.getElementById('score-progress');
    const counterEl = document.getElementById('score-counter');
    
    // Trigger CSS transition for the ring
    if (progressEl) {
      // Small reflow to ensure it's calculated
      void progressEl.getBoundingClientRect(); 
      progressEl.style.strokeDashoffset = offset;
    }
    
    // JS animation for the numbers
    const duration = 3500;
    const start = performance.now();
    
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out exponential function
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(score * easeOutExpo);
      
      if (counterEl) counterEl.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        // Guarantee exact final value
        if (counterEl) counterEl.textContent = score;
      }
    }
    requestAnimationFrame(tick);
  }, 450); // 350ms for screen transition + 100ms buffer

  // ── Summary Card ──
  const summaryCard = document.createElement('div');
  summaryCard.className = 'result-section-card mb-6 result-block';
  summaryCard.style.animationDelay = '0.1s';
  summaryCard.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg class="w-4 h-4 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
      </div>
      <p class="text-sm text-zinc-300 leading-relaxed">${escapeHTML(data.summary)}</p>
    </div>
  `;
  container.appendChild(summaryCard);

  // ── Problems Section ──
  if (data.problems && data.problems.length > 0) {
    const problemsBlock = document.createElement('div');
    problemsBlock.className = 'mb-8 result-block';
    problemsBlock.style.animationDelay = '0.2s';

    const heading = document.createElement('div');
    heading.className = 'result-heading';
    heading.innerHTML = `
      <div class="result-heading-icon" style="background:linear-gradient(135deg,rgba(244,114,182,0.15),rgba(239,68,68,0.15))">⚡</div>
      Зони росту
    `;
    problemsBlock.appendChild(heading);

    data.problems.forEach((problem, i) => {
      const card = document.createElement('div');
      card.className = 'result-section-card mb-3 problem-card';
      card.style.animationDelay = `${0.25 + i * 0.1}s`;
      card.innerHTML = `
        <div class="flex items-start gap-3 mb-2.5">
          <span style="background:linear-gradient(135deg,#f472b6,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800;font-size:1.1rem;line-height:1;margin-top:2px">${String(i + 1).padStart(2, '0')}</span>
          <h4 class="font-semibold text-sm text-white">${escapeHTML(problem.title)}</h4>
        </div>
        <p class="text-xs text-zinc-400 leading-relaxed mb-3 ml-9">${escapeHTML(problem.description)}</p>
        <div class="ml-9 rounded-xl p-3" style="background:linear-gradient(135deg,rgba(34,197,94,0.08),rgba(16,185,129,0.05));border:1px solid rgba(34,197,94,0.15)">
          <p class="text-xs text-emerald-400 leading-relaxed">
            <span class="font-semibold">✅ Як виправити:</span> ${escapeHTML(problem.fix)}
          </p>
        </div>
      `;
      problemsBlock.appendChild(card);
    });
    container.appendChild(problemsBlock);
  }

  // ── Action Plan Section ──
  if (data.action_plan && data.action_plan.length > 0) {
    const planBlock = document.createElement('div');
    planBlock.className = 'mb-8 result-block';
    planBlock.style.animationDelay = '0.4s';

    const heading = document.createElement('div');
    heading.className = 'result-heading';
    heading.innerHTML = `
      <div class="result-heading-icon" style="background:linear-gradient(135deg,rgba(34,197,94,0.15),rgba(16,185,129,0.15))">✅</div>
      Твій план дій
    `;
    planBlock.appendChild(heading);

    const planCard = document.createElement('div');
    planCard.className = 'result-section-card';
    const timeLabels = ['🔥 Сьогодні', '📅 Цей тиждень', '🎯 Цей місяць'];
    const timeBgs = [
      'background:linear-gradient(135deg,rgba(239,68,68,0.1),rgba(249,115,22,0.05))',
      'background:linear-gradient(135deg,rgba(245,158,11,0.1),rgba(234,179,8,0.05))',
      'background:linear-gradient(135deg,rgba(34,197,94,0.1),rgba(16,185,129,0.05))'
    ];
    const timeColors = ['color:#f87171', 'color:#fbbf24', 'color:#4ade80'];
    planCard.innerHTML = data.action_plan.map((step, i) => `
      <div style="${i > 0 ? 'margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.05)' : ''}">
        <span style="display:inline-block;font-size:10px;font-weight:700;white-space:nowrap;padding:4px 10px;border-radius:8px;margin-bottom:8px;${timeBgs[i] || ''};${timeColors[i] || 'color:#a1a1aa'}">${timeLabels[i] || '📌'}</span>
        <p class="text-sm text-zinc-300 leading-relaxed">${escapeHTML(step)}</p>
      </div>
    `).join('');
    planBlock.appendChild(planCard);
    container.appendChild(planBlock);
  }

  // ── Content Ideas Section ──
  if (data.content_ideas && data.content_ideas.length > 0) {
    const ideasBlock = document.createElement('div');
    ideasBlock.className = 'mb-8 result-block';
    ideasBlock.style.animationDelay = '0.5s';

    const heading = document.createElement('div');
    heading.className = 'result-heading';
    heading.innerHTML = `
      <div class="result-heading-icon" style="background:linear-gradient(135deg,rgba(244,114,182,0.15),rgba(192,132,252,0.15))">💡</div>
      Ідеї контенту для тебе
    `;
    ideasBlock.appendChild(heading);

    const formatEmojis = { 'Reels': '🎬', 'Карусель': '📸', 'Сторіз': '📱' };
    const formatGrads = {
      'Reels': 'linear-gradient(135deg,rgba(244,114,182,0.12),rgba(168,85,247,0.08))',
      'Карусель': 'linear-gradient(135deg,rgba(59,130,246,0.12),rgba(6,182,212,0.08))',
      'Сторіз': 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(249,115,22,0.08))'
    };
    const formatBorders = {
      'Reels': 'rgba(244,114,182,0.2)',
      'Карусель': 'rgba(59,130,246,0.2)',
      'Сторіз': 'rgba(245,158,11,0.2)'
    };

    data.content_ideas.forEach(item => {
      const card = document.createElement('div');
      card.className = 'content-idea-card mb-3';
      const bg = formatGrads[item.format] || formatGrads['Reels'];
      const bc = formatBorders[item.format] || formatBorders['Reels'];
      card.style.cssText = `background:${bg};border:1px solid ${bc};border-radius:16px;padding:1.25rem;position:relative;overflow:hidden`;
      card.innerHTML = `
        <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${bc},transparent)"></div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-lg">${formatEmojis[item.format] || '📌'}</span>
          <span class="text-[10px] font-bold text-white uppercase tracking-[0.15em]">${escapeHTML(item.format)}</span>
        </div>
        <p class="text-sm text-zinc-200 leading-relaxed">${escapeHTML(item.idea)}</p>
      `;
      ideasBlock.appendChild(card);
    });
    container.appendChild(ideasBlock);
  }

  // ── Hashtags Section ──
  if (data.hashtags && data.hashtags.length > 0) {
    const hashBlock = document.createElement('div');
    hashBlock.className = 'mb-8 result-block';
    hashBlock.style.animationDelay = '0.6s';

    const heading = document.createElement('div');
    heading.className = 'result-heading';
    heading.innerHTML = `
      <div class="result-heading-icon" style="background:linear-gradient(135deg,rgba(192,132,252,0.15),rgba(139,92,246,0.15))">#</div>
      Хештеги для твоєї ніші
    `;
    hashBlock.appendChild(heading);

    const hashCard = document.createElement('div');
    hashCard.className = 'result-section-card';
    const hashContent = document.createElement('div');
    hashContent.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;max-width:100%';
    data.hashtags.forEach(tag => {
      const chip = document.createElement('span');
      chip.className = 'hash-chip';
      chip.textContent = tag;
      hashContent.appendChild(chip);
    });
    hashCard.appendChild(hashContent);

    const allHashtags = data.hashtags.join(' ');
    const copyHashBtn = document.createElement('button');
    copyHashBtn.type = 'button';
    copyHashBtn.className = 'copy-btn text-xs font-medium px-4 py-2 rounded-xl transition-all';
    copyHashBtn.style.cssText = 'background:linear-gradient(135deg,rgba(192,132,252,0.1),rgba(139,92,246,0.05));border:1px solid rgba(192,132,252,0.2);color:#c084fc';
    copyHashBtn.textContent = '📋 Копіювати всі хештеги';
    copyHashBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(allHashtags).then(() => {
        copyHashBtn.textContent = '✅ Скопійовано!';
        copyHashBtn.style.borderColor = 'rgba(34,197,94,0.3)';
        copyHashBtn.style.color = '#4ade80';
        setTimeout(() => {
          copyHashBtn.textContent = '📋 Копіювати всі хештеги';
          copyHashBtn.style.borderColor = 'rgba(192,132,252,0.2)';
          copyHashBtn.style.color = '#c084fc';
        }, 2000);
      }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = allHashtags;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyHashBtn.textContent = '✅ Скопійовано!';
        setTimeout(() => { copyHashBtn.textContent = '📋 Копіювати всі хештеги'; }, 2000);
      });
    });
    hashCard.appendChild(copyHashBtn);
    hashBlock.appendChild(hashCard);
    container.appendChild(hashBlock);
  }

  // ── Ready-to-Copy Section ──
  if (data.ready_to_copy && data.ready_to_copy.length > 0) {
    const copyBlock = document.createElement('div');
    copyBlock.className = 'mb-6 result-block';
    copyBlock.style.animationDelay = '0.7s';

    const heading = document.createElement('div');
    heading.className = 'result-heading';
    heading.innerHTML = `
      <div class="result-heading-icon" style="background:linear-gradient(135deg,rgba(244,114,182,0.15),rgba(192,132,252,0.15))">📋</div>
      Готові тексти — копіюй і вставляй
    `;
    copyBlock.appendChild(heading);

    data.ready_to_copy.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'copy-card mb-3';
      card.innerHTML = `
        <p class="text-xs font-semibold mb-2.5" style="background:linear-gradient(135deg,#f472b6,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${escapeHTML(item.label)}</p>
        <div class="rounded-xl p-3.5 mb-3" style="background:rgba(10,10,10,0.6);border:1px solid rgba(255,255,255,0.04)">
          <p class="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap" id="copy-text-${i}">${escapeHTML(item.text)}</p>
        </div>
        <button
          type="button"
          class="copy-btn text-xs font-medium px-4 py-2 rounded-xl transition-all"
          style="background:linear-gradient(135deg,rgba(244,114,182,0.1),rgba(192,132,252,0.05));border:1px solid rgba(244,114,182,0.2);color:#f472b6"
          onclick="copyToClipboard(${i}, this)"
        >
          📋 Копіювати
        </button>
      `;
      copyBlock.appendChild(card);
    });
    container.appendChild(copyBlock);
  }

  // ── CTA text from AI ──
  if (data.cta) {
    els.ctaText.textContent = data.cta;
  }
}

/* ==============================================
   COPY TO CLIPBOARD
   ============================================== */
function copyToClipboard(index, btnElement) {
  const textEl = document.getElementById(`copy-text-${index}`);
  if (!textEl) return;

  const text = textEl.innerText;

  const originalBtnText = btnElement.textContent;

  function showCopied() {
    btnElement.classList.add('copied');
    btnElement.textContent = '✅ Скопійовано!';
    setTimeout(() => {
      btnElement.classList.remove('copied');
      btnElement.textContent = originalBtnText;
    }, 2000);
  }

  navigator.clipboard.writeText(text).then(showCopied).catch(() => {
    // Fallback for older browsers / insecure context
    const range = document.createRange();
    range.selectNodeContents(textEl);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    sel.removeAllRanges();
    showCopied();
  });
}

/* ==============================================
   UTILITY — Escape HTML to prevent XSS
   ============================================== */
function escapeHTML(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* ==============================================
   ANALYTICS — simple localStorage counter
   ============================================== */
function trackEvent(eventName) {
  try {
    const key = 'ba_stats';
    const stats = JSON.parse(localStorage.getItem(key) || '{}');
    stats[eventName] = (stats[eventName] || 0) + 1;
    stats.last_visit = new Date().toISOString();
    localStorage.setItem(key, JSON.stringify(stats));
  } catch(e) { /* silently fail */ }
}

// Track page visit
trackEvent('page_visit');

// Log stats to console for easy checking
try {
  const stats = JSON.parse(localStorage.getItem('ba_stats') || '{}');
  console.log('[Bless Academy] 📊 Stats:', stats);
} catch(e) {}
