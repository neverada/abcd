/* Forgotten Tales — App logic + story data (derived from story.txt) */

/* ------------------------------------------------------------------ */
/*  Story data                                                        */
/* ------------------------------------------------------------------ */
/* Each book holds chapters. Each chapter has story pages, a fun fact, */
/* and an end-of-chapter quiz that must be completed to finish it.    */
/* ------------------------------------------------------------------ */

const BOOKS = [
  {
    id: "moon",
    title: "The Moon Makers",
    color: "lavender",
    themeColor: "var(--lavender-dark)",
    thumbSvg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="56" r="24" fill="#fff7d6"/>
        <circle cx="30" cy="52" r="3" fill="#f3e29a" opacity=".7"/>
        <circle cx="40" cy="60" r="2" fill="#f3e29a" opacity=".6"/>
        <path d="M24 74 Q34 62 44 74" stroke="#e2c98a" stroke-width="3" fill="none" opacity=".7"/>
        <path d="M14 40 Q34 22 54 40" stroke="#fff" stroke-width="2" fill="none" opacity=".5"/>
      </svg>
    `,
    chapters: [
      {
        id: "moon-1",
        title: "Surveyor 3",
        subtitle: "Robotic Scout • April 1967",
        color: "lavender",
        illustration: "moon",
        pages: [
          "Long before people walked on the Moon, a brave little robot went first.",
          "Meet Surveyor 3 — a lander with a tiny robotic claw and a TV camera.",
          "Her mission: test if Moon dust was quicksand that would swallow spaceships.",
          "Her radar glitched, so she bounced TWICE on the lunar dirt like a basketball!",
          "Surveyor 3 proved the ground was solid — paving the way for human explorers.",
        ],
        funFact: "Surveyor 3 landed two years before humans arrived. In 1969, Apollo 12 astronauts visited her and brought her TV camera back to Earth!",
        quiz: [
          {
            q: "What did Surveyor 3 test on the Moon?",
            options: ["If Moon dust was quicksand", "How to grow Moon plants", "If the Moon was made of cheese"],
            correct: 0,
            explain: "Surveyor 3 landed to check whether the Moon's surface could hold a spaceship without sinking.",
          },
          {
            q: "What happened when Surveyor 3 landed?",
            options: ["It bounced twice", "It flew away", "It sank deep"],
            correct: 0,
            explain: "Her radar glitched, so she bounced twice like a basketball before settling.",
          },
        ],
      },
      {
        id: "moon-2",
        title: "Apollo 11 — Eagle & Columbia",
        subtitle: "First Crewed Landing • July 1969",
        color: "lavender",
        illustration: "rocket",
        pages: [
          "In 1969, humans finally stepped onto the Moon.",
          "The Eagle lander carried Neil Armstrong and Buzz Aldrin to the surface.",
          "Eagle's walls were as thin as soda cans — stripped down to save fuel!",
          "Meanwhile, Columbia flew Michael Collins all the way home.",
          "One small step — one giant leap for all of us.",
        ],
        funFact: "Columbia is the only Apollo 11 piece that returned to Earth. You can see the real capsule at the Smithsonian in Washington, D.C.!",
        quiz: [
          {
            q: "Who flew the Columbia command module home?",
            options: ["Michael Collins", "Neil Armstrong", "Buzz Aldrin"],
            correct: 0,
            explain: "While Neil and Buzz walked on the Moon, Michael Collins flew Columbia alone behind the Moon.",
          },
          {
            q: "Which part of Apollo 11 came back to Earth?",
            options: ["Columbia", "Eagle", "The lander's legs"],
            correct: 0,
            explain: "Columbia is the only part of the Apollo 11 spacecraft that made it back to Earth.",
          },
        ],
      },
      {
        id: "moon-3",
        title: "Falcon",
        subtitle: "Extended Lunar Module • July 1971",
        color: "lavender",
        illustration: "lander",
        pages: [
          "Falcon was Apollo 15's lander — bigger, stronger, and ready for gear.",
          "She carried the very first Moon Buggy in a side garage!",
          "Falcon even landed tilted at 11 degrees on a crater rim — and never tipped.",
          "Astronauts stayed 67 hours, more than triple Eagle's visit.",
          "Dave Scott dropped a hammer and a feather — they landed together!",
        ],
        funFact: "Starting with Apollo 15, NASA upgraded the Lunar Module so astronauts could stay on the Moon for up to three days.",
        quiz: [
          {
            q: "What did Falcon carry for the first time?",
            options: ["A Moon Buggy", "A satellite", "A telescope"],
            correct: 0,
            explain: "Falcon had a side garage (Quad 1) to carry the first Lunar Roving Vehicle to the Moon.",
          },
          {
            q: "What did Dave Scott drop on the Moon?",
            options: ["A hammer and a feather", "A rock and a flag", "A camera"],
            correct: 0,
            explain: "He dropped a hammer and a falcon feather at the same time — they hit the dirt together!",
          },
        ],
      },
      {
        id: "moon-4",
        title: "Moon Buggy",
        subtitle: "Lunar Roving Vehicle • 1971–1972",
        color: "lavender",
        illustration: "buggy",
        pages: [
          "Before the buggy, astronauts could only walk a few hundred feet.",
          "The Lunar Roving Vehicle folded like origami to fit inside the lander!",
          "Made of light aluminum tubes with springy wire wheels and titanium cleats.",
          "It zoomed at 11 miles per hour with just a T-bar joystick.",
          "Three Moon Buggies still wait on the Moon today.",
        ],
        funFact: "The entire Lunar Roving Vehicle was left on the Moon on every mission — its TV camera filmed the astronauts blasting off!",
        quiz: [
          {
            q: "How fast did the Moon Buggy go?",
            options: ["11 miles per hour", "100 miles per hour", "1 mile per hour"],
            correct: 0,
            explain: "The Moon Buggy moved at 11 miles per hour with a T-bar joystick.",
          },
          {
            q: "What are the Moon Buggy's wheels made of?",
            options: ["Woven piano wire with titanium cleats", "Rubber", "Wood"],
            correct: 0,
            explain: "It had woven piano-wire tires with titanium cleats for the lunar soil.",
          },
        ],
      },
      {
        id: "moon-5",
        title: "Apollo 17 — Challenger",
        subtitle: "Final Lunar Module • December 1972",
        color: "lavender",
        illustration: "moon",
        pages: [
          "Challenger was the last and most upgraded Lunar Module.",
          "She stayed on the Moon a record 75 hours.",
          "Challenger brought the first scientist-geologist to the Moon.",
          "And she hauled back 243 pounds of Moon rocks!",
          "Every step — from Surveyor's shovel to Challenger's rocks — led to today.",
        ],
        funFact: "Apollo 17 was the final Apollo Moon landing, in December 1972 — and it brought back 243 pounds of Moon rocks!",
        quiz: [
          {
            q: "How long did Challenger stay on the Moon?",
            options: ["75 hours", "7 hours", "700 hours"],
            correct: 0,
            explain: "Challenger stayed on the surface for a record 75 hours.",
          },
        ],
      },
    ],
  },
  {
    id: "mars",
    title: "The Mars Message",
    color: "peach",
    themeColor: "var(--peach-dark)",
    thumbSvg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="42" cy="52" r="20" fill="#e8a07d"/>
        <circle cx="38" cy="48" r="3" fill="#f2b383" opacity=".7"/>
        <path d="M28 72 Q42 60 56 72" stroke="#d98863" stroke-width="3" fill="none" opacity=".7"/>
        <path d="M18 46 Q42 28 66 46" stroke="#ffe0d0" stroke-width="2" fill="none" opacity=".5"/>
      </svg>
    `,
    chapters: [
      {
        id: "mars-1",
        title: "Sojourner",
        subtitle: "Rover • 1997",
        color: "peach",
        illustration: "rover",
        pages: [
          "Sojourner was only the size of a microwave — just 23 pounds!",
          "Pathfinder carried her to Mars, wrapped in giant airbags.",
          "They bounced 15 times like a beach ball before landing.",
          "Sojourner rolled out on six bendy aluminum wheels.",
          "She lasted 83 days instead of the planned 7!",
        ],
        funFact: "Sojourner was the first wheeled robot on another planet — and it used tiny laser stripes to spot rocks and dodge cliffs!",
        quiz: [
          {
            q: "How much did Sojourner weigh?",
            options: ["23 pounds", "100 pounds", "1,000 pounds"],
            correct: 0,
            explain: "Sojourner was only the size of a microwave oven, weighing just 23 pounds.",
          },
        ],
      },
      {
        id: "mars-2",
        title: "Spirit & Opportunity",
        subtitle: "Rover Twins • 2004–2018",
        color: "peach",
        illustration: "rover",
        pages: [
          "Spirit and Opportunity were golf-cart-sized twin rovers.",
          "They had solar-panel wings and 3D camera eyes on a tall neck.",
          "Spirit rolled for 6 years before getting stuck in deep sand.",
          "Opportunity kept going for nearly 15 years — driving 28 miles!",
          "That's a whole marathon on Mars.",
        ],
        funFact: "The twins found tiny round mineral balls nicknamed 'blueberries' — proof that liquid water once flowed on ancient Mars!",
        quiz: [
          {
            q: "How long did Opportunity keep going?",
            options: ["Nearly 15 years", "15 days", "150 years"],
            correct: 0,
            explain: "Opportunity drove for nearly 15 years, covering 28 miles — a whole marathon on Mars.",
          },
        ],
      },
      {
        id: "mars-3",
        title: "Phoenix",
        subtitle: "Lander • 2008",
        color: "peach",
        illustration: "lander",
        pages: [
          "Phoenix rose from the ashes of earlier failed missions.",
          "She landed on fiery rocket thrusters near Mars's icy North Pole.",
          "No bouncy airbags — just a brave, fiery touchdown.",
          "With her 7.7-foot robotic shovel, she dug into frozen dirt.",
          "And found real water ice!",
        ],
        funFact: "Phoenix stayed in one spot and proved there is frozen water just inches under Mars's northern soil!",
        quiz: [
          {
            q: "What did Phoenix find in Mars's frozen dirt?",
            options: ["Water ice", "Gold", "Blueberries"],
            correct: 0,
            explain: "Phoenix dug with her robotic shovel and found real water ice.",
          },
        ],
      },
      {
        id: "mars-4",
        title: "Curiosity",
        subtitle: "Rover • 2012–Present",
        color: "peach",
        illustration: "rover",
        pages: [
          "Curiosity is SUV-sized and runs on a nuclear battery.",
          "She shoots lasers out of her head to vaporize rocks!",
          "A rocket Sky Crane lowered her gently onto her wheels.",
          "Then the Sky Crane flew away to crash safely.",
          "Curiosity has been exploring Gale Crater since 2012.",
        ],
        funFact: "Engineers invented a rocket Sky Crane to lower the one-ton Curiosity rover gently onto its wheels!",
        quiz: [
          {
            q: "How did Curiosity land on Mars?",
            options: ["A rocket Sky Crane lowered her", "Bouncy airbags", "A parachute only"],
            correct: 0,
            explain: "Because Curiosity was too heavy for airbags, a Sky Crane lowered her on nylon ropes.",
          },
        ],
      },
      {
        id: "mars-5",
        title: "Perseverance",
        subtitle: "Rover • 2021–Present",
        color: "peach",
        illustration: "rover",
        pages: [
          "Perseverance is the tough 2.0 upgrade with thicker wheels.",
          "She carries 23 cameras and microphones.",
          "Humans finally heard the Martian wind blow!",
          "She drills rocks and leaves titanium tubes for the future.",
          "And MOXIE turns Mars's toxic air into breathable oxygen!",
        ],
        funFact: "Perseverance carries MOXIE — a mini machine that sucks in Mars's toxic air and turns it into real, breathable oxygen!",
        quiz: [
          {
            q: "What does MOXIE make from Mars's air?",
            options: ["Breathable oxygen", "Water", "Rocket fuel"],
            correct: 0,
            explain: "MOXIE sucks in Mars's toxic air and turns it into real, breathable oxygen.",
          },
        ],
      },
      {
        id: "mars-6",
        title: "Ingenuity",
        subtitle: "Helicopter • 2021–2024",
        color: "peach",
        illustration: "copter",
        pages: [
          "Ingenuity is the first helicopter to fly on another planet!",
          "Mars's air is 100 times thinner than Earth's.",
          "So her carbon-fiber blades spin five times faster.",
          "She was supposed to make 5 test flights — she flew 72!",
          "She carries a piece of the Wright Brothers' 1903 airplane.",
        ],
        funFact: "Ingenuity flew 72 times on Mars and carries a tiny piece of fabric from the Wright Brothers' 1903 airplane!",
        quiz: [
          {
            q: "How many times did Ingenuity fly on Mars?",
            options: ["72 times", "5 times", "1 time"],
            correct: 0,
            explain: "Ingenuity was supposed to make 5 test flights but flew 72 times!",
          },
        ],
      },
    ],
  },
  {
    id: "deep",
    title: "Beyond the Blue",
    color: "mint",
    themeColor: "var(--mint-dark)",
    thumbSvg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38" cy="54" r="18" fill="#b8e0d6"/>
        <path d="M20 44 Q38 32 56 44" stroke="#d8f3e8" stroke-width="2" fill="none" opacity=".8"/>
        <circle cx="42" cy="50" r="2" fill="#d8f3e8" opacity=".8"/>
        <path d="M24 66 Q38 56 52 66" stroke="#a7d8c4" stroke-width="2" fill="none" opacity=".7"/>
      </svg>
    `,
    chapters: [
      {
        id: "deep-1",
        title: "Pioneer 10",
        subtitle: "Deep-Space Probe • 1972",
        color: "mint",
        illustration: "probe",
        pages: [
          "Pioneer 10 was the original trailblazer, launched in 1972.",
          "She crossed the Asteroid Belt — everyone thought she'd shatter.",
          "She didn't even flinch.",
          "Nuclear plutonium batteries kept her going far from the Sun.",
          "She carries a gold plaque for any aliens who might find her.",
        ],
        funFact: "Pioneer 10 was the first spacecraft to travel through the Asteroid Belt and fly past Jupiter!",
        quiz: [
          {
            q: "What did Pioneer 10 carry for aliens?",
            options: ["A gold plaque", "A mixtape", "A letter"],
            correct: 0,
            explain: "Pioneer 10 carries a gold-anodized plaque showing where Earth is in the galaxy.",
          },
        ],
      },
      {
        id: "deep-2",
        title: "Voyager 1",
        subtitle: "Interstellar Probe • 1977",
        color: "mint",
        illustration: "probe",
        pages: [
          "Voyager 1 flies smoother and faster than Pioneer.",
          "She snapped the 'Pale Blue Dot' — Earth as one tiny pixel.",
          "In 2012 she crossed into interstellar space.",
          "She's still talking to Earth from 15 billion miles away.",
          "No rush. Just cruising.",
        ],
        funFact: "Voyager 1 carries the Golden Record — Earth sounds, music, and greetings in 55 languages!",
        quiz: [
          {
            q: "What is the 'Pale Blue Dot'?",
            options: ["Earth seen from far away", "A blue planet", "A star"],
            correct: 0,
            explain: "The Pale Blue Dot is Earth — a tiny pixel in a sunbeam, seen from 3.7 billion miles away.",
          },
        ],
      },
      {
        id: "deep-3",
        title: "Voyager 2",
        subtitle: "Interstellar Probe • 1977",
        color: "mint",
        illustration: "probe",
        pages: [
          "Voyager 2 took the scenic route — four giant worlds in one trip.",
          "She used each planet's gravity like a slingshot — free speed!",
          "Jupiter, Saturn, Uranus, and Neptune — all visited.",
          "She crossed into interstellar space in 2018.",
          "Still whispering back on 1970s hardware.",
        ],
        funFact: "Voyager 2 is the only spacecraft ever to visit all four giant outer planets!",
        quiz: [
          {
            q: "How many giant planets did Voyager 2 visit?",
            options: ["Four", "Two", "One"],
            correct: 0,
            explain: "Voyager 2 visited Jupiter, Saturn, Uranus, and Neptune — all four giant planets.",
          },
        ],
      },
      {
        id: "deep-4",
        title: "New Horizons",
        subtitle: "Flyby Probe • 2006",
        color: "mint",
        illustration: "probe",
        pages: [
          "New Horizons launched faster than any spacecraft before.",
          "She flew past the Moon in just nine hours.",
          "Nine years later, she reached Pluto.",
          "She found a giant frozen heart made of nitrogen glaciers.",
          "Now she's cruising toward the edge of the solar system.",
        ],
        funFact: "New Horizons took the sharpest photos of Pluto ever, revealing a frozen nitrogen heart and icy mountains!",
        quiz: [
          {
            q: "What shape did New Horizons find on Pluto?",
            options: ["A frozen heart", "A star", "A smiley face"],
            correct: 0,
            explain: "New Horizons found a giant frozen heart made of nitrogen glaciers on Pluto.",
          },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  App state                                                         */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "forgotten-tales-progress";

let state = {
  bookId: null,
  chapterIndex: 0,
  pageIndex: 0,
  voiceOn: false,
  uttering: null,
  quiz: {
    qIndex: 0,
    answers: [],      // per-question selected index
    attempts: 0,      // attempts to get the whole quiz right
    completed: false,
  },
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
}
let progress = loadProgress();

function chapterKey(chId) { return chId; }
function getChapterProgress(chId) {
  return progress[chapterKey(chId)] || { completed: false, attempts: 0, badge: null };
}
function setChapterProgress(chId, data) {
  progress[chapterKey(chId)] = data;
  saveProgress(progress);
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function $ (sel, root = document) { return root.querySelector(sel); }
function $$ (sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function bookById(id) { return BOOKS.find(b => b.id === id); }
function chapterById(bookId, chId) {
  const b = bookById(bookId);
  return b ? b.chapters.find(c => c.id === chId) : null;
}
function chapterIndexOf(bookId, chId) {
  const b = bookById(bookId);
  return b ? b.chapters.findIndex(c => c.id === chId) : -1;
}

function getChapter(bookId, index) {
  const b = bookById(bookId);
  return b ? b.chapters[index] : null;
}

function showToast(msg) {
  const t = $("#toast") || createToast();
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1700);
}
function createToast() {
  const t = document.createElement("div");
  t.id = "toast"; t.className = "toast";
  document.body.appendChild(t);
  return t;
}

/* ------------------------------------------------------------------ */
/*  Voice (Web Speech API)                                            */
/* ------------------------------------------------------------------ */

function speak(text) {
  if (!state.voiceOn) return;
  if (state.uttering) { window.speechSynthesis.cancel(); state.uttering = null; }
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.95;
  u.pitch = 1.05;
  state.uttering = u;
  u.onend = () => { state.uttering = null; };
  window.speechSynthesis.speak(u);
}
function stopSpeech() {
  window.speechSynthesis.cancel();
  state.uttering = null;
}

/* ------------------------------------------------------------------ */
/*  Router / render                                                   */
/* ------------------------------------------------------------------ */

const pathRoot = ""; // same-folder html files

function navigate(page, params = {}) {
  stopSpeech();
  const { bookId, chapterIndex } = params;
  if (page === "library") {
    history.pushState(null, "", "index.html");
    renderLibrary();
  } else if (page === "reader") {
    history.pushState(null, "", `reader.html?book=${bookId}&ch=${chapterIndex || 0}`);
    renderReader(bookId, chapterIndex || 0);
  }
}

window.addEventListener("popstate", () => {
  const onReader = location.pathname.endsWith("reader.html");
  if (onReader) {
    const params = new URLSearchParams(location.search);
    renderReader(params.get("book"), parseInt(params.get("ch") || "0", 10));
  } else {
    renderLibrary();
  }
});

function init() {
  const onReader = location.pathname.endsWith("reader.html");
  if (onReader) {
    const params = new URLSearchParams(location.search);
    renderReader(params.get("book"), parseInt(params.get("ch") || "0", 10));
  } else {
    renderLibrary();
  }
}

/* ---------------- Library render ---------------- */

function renderLibrary() {
  const root = $("#app");
  if (!root) return;
  root.innerHTML = `
    <div class="library page-wrap">
      <header class="lib-header">
        <div class="lib-brand">
          <div class="lib-badge">FT</div>
          <div>Forgotten Tales<span class="lib-tagline">• A Little Library of Big Discoveries</span></div>
        </div>
      </header>

      <section class="lib-hero">
        <span class="kicker">Open a world of wonder</span>
        <h1>Where will curiosity take you?</h1>
        <p>Pick a book from the shelf. Turn the pages. Travel from yesterday's inventions to tomorrow's stars.</p>
      </section>

      <section class="bookshelf">
        <div class="sparkle" style="top:18px;left:34px;width:10px;height:10px;"></div>
        <div class="sparkle" style="top:62px;left:70px;width:12px;height:12px;animation-delay:1s;"></div>
        <div class="sparkle" style="top:30px;left:150px;width:10px;height:10px;animation-delay:2s;"></div>
        <div class="sparkle" style="top:8px;left:290px;width:11px;height:11px;animation-delay:1.4s;"></div>
        <div class="sparkle" style="top:50px;left:430px;width:9px;height:9px;animation-delay:2.2s;"></div>
        <div class="sparkle" style="top:24px;left:560px;width:10px;height:10px;animation-delay:0.8s;"></div>
        <div class="shelf">
          ${BOOKS.map(b => `
            <div class="book" data-book="${b.id}" role="button" tabindex="0" aria-label="Open ${b.title}">
              <div class="book-spine" style="background: linear-gradient(180deg, ${bookGradientStart(b.color)}, ${bookGradientEnd(b.color)}); color: ${bookTextColor(b.color)};">
                ${b.title}
              </div>
              <div class="book-cover" style="background: linear-gradient(180deg, ${bookGradientStart(b.color)}, ${bookGradientEnd(b.color)}); color: ${bookTextColor(b.color)};">
                <div class="book-inner-decor">${bookIcon(b.color)}</div>
                <div style="margin-top:8px;font-size:.82rem;opacity:.9;">${b.chapters.length} journeys</div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="stories-section">
        <span class="kicker">Three journeys await</span>
        <h2>Meet the stories</h2>
        <div class="story-grid">
          ${BOOKS.map(b => `
            <article class="story-card" style="border-top:5px solid ${bookGradientStart(b.color)};">
              <div class="story-thumb" style="background:${bookGradientLight(b.color)};">
                ${b.thumbSvg}
              </div>
              <h3>${b.title}</h3>
              <p>${b.chapters.length} chapters of daring hardware and big discoveries.</p>
              <button class="btn open-btn mint" data-book="${b.id}">Open this book &rarr;</button>
            </article>
          `).join("")}
        </div>
      </section>

      <div class="lib-footer">
        Tap a spine to start reading &bull; Scroll down to discover the covers &darr;
      </div>
    </div>
  `;

  $$(".book, [data-book]").forEach(el => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-book") || el.dataset.book;
      navigate("reader", { bookId: id, chapterIndex: 0 });
    });
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); } });
  });
}

function bookGradientStart(c) {
  return { lavender: "#e9e4f7", peach: "#fbe7d6", mint: "#d8f3e8" }[c] || "#e9e4f7";
}
function bookGradientEnd(c) {
  return { lavender: "#c7bdf5", peach: "#f7c89f", mint: "#b8e0d6" }[c] || "#c7bdf5";
}
function bookTextColor(c) {
  return { lavender: "#5b4b9e", peach: "#8a4f25", mint: "#2e6b54" }[c] || "#5b4b9e";
}
function bookIcon(c) {
  return { lavender: "🚀", peach: "🪐", mint: "🛰️" }[c] || "🚀";
}

/* ---------------- Reader render ---------------- */

function renderReader(bookId, chapterIndex) {
  const book = bookById(bookId);
  if (!book) { renderLibrary(); return; }
  const chapter = getChapter(bookId, chapterIndex);
  if (!chapter) { renderLibrary(); return; }

  state.bookId = bookId;
  state.chapterIndex = chapterIndex;
  state.pageIndex = 0;

  const chProgress = getChapterProgress(chapter.id);
  const alreadyDone = chProgress.completed;

  const root = $("#app");
  if (!root) return;
  root.innerHTML = readerShell(book, chapter, alreadyDone);
  bindReader(book, chapter, alreadyDone);
  renderReaderPage(book, chapter, alreadyDone);

  // speak first page if voice on
  if (state.voiceOn) speak(currentPageText(book, chapter));
}

function readerShell(book, chapter, alreadyDone) {
  const prog = getChapterProgress(chapter.id);
  const badgeHtml = prog.completed ? badgeMarkup(prog.badge || "none", prog.attempts) : "";
  return `
    <div class="reader page-wrap">
      <header class="reader-header">
        <div class="reader-nav">
          <button class="back-btn" id="backBtn">&larr; Back to shelf</button>
          <div>
            <div class="reader-title">${escapeHtml(chapter.title)}</div>
            <div class="reader-sub">${escapeHtml(book.title)} &middot; ${escapeHtml(chapter.subtitle)}</div>
          </div>
        </div>
        <div class="reader-controls">
          <div class="voice-chip ${state.voiceOn ? "on" : ""}" id="voiceChip" role="switch" aria-checked="${state.voiceOn}" tabindex="0">
            <span class="dot"></span> Voice mode: ${state.voiceOn ? "On" : "Off"}
          </div>
          <button class="btn play-btn" id="playBtn">&#9654; Play</button>
        </div>
      </header>

      <div class="reader-body">
        <div id="sceneWrap">
          <div class="book-scene" id="bookScene" role="img" aria-label="Story scene">
            ${sceneSvg(chapter.illustration, chapter.color)}
            <div class="scene-shadow"></div>
            <div class="tap-hint">Tap the scene to make it move &starf;</div>
          </div>
        </div>
        <div id="pageContent"></div>
        <div id="quizArea" style="display:none;"></div>
        ${badgeHtml}
      </div>

      <div class="reader-navbar">
        <div class="page-dots" id="pageDots"></div>
        <div>
          <button class="nav-btn" id="prevBtn" disabled>&#9664;</button>
          <button class="nav-btn next" id="nextBtn">Next &rarr;</button>
        </div>
      </div>
    </div>
  `;
}

function sceneSvg(illustration, color) {
  const accent = { lavender: "#c7bdf5", peach: "#f7c89f", mint: "#b8e0d6" }[color] || "#c7bdf5";
  const base = { lavender: "#e9e4f7", peach: "#fbe7d6", mint: "#d8f3e8" }[color] || "#e9e4f7";
  const dark = { lavender: "#8b7dcf", peach: "#f2b383", mint: "#7fc9a7" }[color] || "#8b7dcf";
  if (illustration === "moon") {
    return `
      <svg viewBox="0 0 220 160" style="width:150px;height:150px;">
        <circle cx="86" cy="82" r="52" fill="#fff7d6"/>
        <circle cx="72" cy="70" r="8" fill="#f3e29a" opacity=".75"/>
        <circle cx="98" cy="92" r="5" fill="#f3e29a" opacity=".65"/>
        <circle cx="66" cy="100" r="4" fill="#f3e29a" opacity=".6"/>
        <path d="M56 108 Q86 98 116 108" stroke="#e2c98a" stroke-width="4" fill="none"/>
        <path d="M42 54 Q86 36 130 54" stroke="#fff" stroke-width="2" fill="none" opacity=".55"/>
        <path d="M30 70 Q60 62 90 70" stroke="#fff" stroke-width="1.5" fill="none" opacity=".4"/>
      </svg>
    `;
  }
  if (illustration === "rocket") {
    return `
      <svg viewBox="0 0 220 160" style="width:150px;height:150px;">
        <rect x="96" y="50" width="28" height="72" rx="8" fill="#fff"/>
        <path d="M90 50 L110 30 L130 50" fill="#ffa62b"/>
        <rect x="102" y="114" width="16" height="18" rx="4" fill="#ff8a41"/>
        <circle cx="100" cy="72" r="3" fill="#d8f3e8"/>
        <circle cx="120" cy="90" r="3" fill="#d8f3e8"/>
        <path d="M50 120 Q86 60 122 122" stroke="#fff" stroke-width="2" fill="none" opacity=".5"/>
        <path d="M40 100 Q86 80 132 100" stroke="#fff" stroke-width="1.5" fill="none" opacity=".4"/>
      </svg>
    `;
  }
  if (illustration === "lander") {
    return `
      <svg viewBox="0 0 220 160" style="width:150px;height:150px;">
        <rect x="88" y="62" width="44" height="56" rx="6" fill="#fff" stroke="#e2e8f0" stroke-width="2"/>
        <rect x="96" y="68" width="28" height="14" rx="4" fill="${accent}"/>
        <path d="M74 120 L88 120 L88 140" stroke="#b9c4d0" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M132 120 L146 120 L146 140" stroke="#b9c4d0" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="92" cy="82" r="2.5" fill="#f3e29a"/>
        <circle cx="128" cy="92" r="2.5" fill="#f3e29a"/>
        <path d="M40 126 Q86 84 132 128" stroke="#fff" stroke-width="2" fill="none" opacity=".55"/>
      </svg>
    `;
  }
  if (illustration === "buggy") {
    return `
      <svg viewBox="0 0 220 160" style="width:150px;height:150px;">
        <rect x="80" y="74" width="60" height="24" rx="8" fill="#fff"/>
        <rect x="90" y="62" width="40" height="14" rx="4" fill="${accent}"/>
        <circle cx="86" cy="110" r="9" fill="#b9c4d0"/>
        <circle cx="134" cy="110" r="9" fill="#b9c4d0"/>
        <circle cx="86" cy="110" r="3" fill="#fff"/>
        <circle cx="134" cy="110" r="3" fill="#fff"/>
        <path d="M30 116 Q86 78 142 118" stroke="#fff" stroke-width="2" fill="none" opacity=".55"/>
      </svg>
    `;
  }
  if (illustration === "rover") {
    return `
      <svg viewBox="0 0 220 160" style="width:150px;height:150px;">
        <rect x="76" y="76" width="68" height="26" rx="10" fill="#fff" stroke="#e2e8f0" stroke-width="2"/>
        <rect x="88" y="64" width="44" height="16" rx="5" fill="${accent}"/>
        <circle cx="84" cy="114" r="10" fill="#b9c4d0"/>
        <circle cx="136" cy="114" r="10" fill="#b9c4d0"/>
        <rect x="92" y="46" width="12" height="22" rx="4" fill="#fff"/>
        <path d="M30 120 Q86 82 142 120" stroke="#fff" stroke-width="2" fill="none" opacity=".55"/>
      </svg>
    `;
  }
  if (illustration === "copter") {
    return `
      <svg viewBox="0 0 220 160" style="width:150px;height:150px;">
        <rect x="92" y="72" width="36" height="18" rx="6" fill="#fff"/>
        <path d="M70 72 L150 72" stroke="#b9c4d0" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M70 72 L90 50 L110 50" stroke="#b9c4d0" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M130 72 L110 50 L130 50" stroke="#b9c4d0" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="90" cy="96" r="8" fill="#b9c4d0"/>
        <circle cx="130" cy="96" r="8" fill="#b9c4d0"/>
        <circle cx="110" cy="76" r="2.5" fill="#f3e29a"/>
        <path d="M30 100 Q110 40 190 100" stroke="#fff" stroke-width="2" fill="none" opacity=".55"/>
      </svg>
    `;
  }
  // probe
  return `
    <svg viewBox="0 0 220 160" style="width:150px;height:150px;">
      <rect x="98" y="56" width="24" height="48" rx="6" fill="#b8e0d6"/>
      <rect x="106" y="64" width="8" height="12" rx="2" fill="#d8f3e8"/>
      <path d="M64 56 L98 56 L106 44 L114 56 L156 56" stroke="#7fc9a7" stroke-width="4" fill="none" stroke-linejoin="round"/>
      <circle cx="110" cy="106" r="5" fill="#d8f3e8"/>
      <path d="M30 122 Q110 60 190 122" stroke="#d8f3e8" stroke-width="2" fill="none" opacity=".7"/>
      <path d="M20 100 Q110 48 200 100" stroke="#fff" stroke-width="1.5" fill="none" opacity=".5"/>
    </svg>
  `;
}

function currentPageText(book, chapter) {
  return chapter.pages[state.pageIndex] || "";
}

function renderReaderPage(book, chapter, alreadyDone) {
  const content = $("#pageContent");
  const dots = $("#pageDots");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const quizArea = $("#quizArea");
  const pageText = currentPageText(book, chapter);
  const isLast = state.pageIndex >= chapter.pages.length - 1;

  content.innerHTML = `
    <div class="story-panel" style="border-top:6px solid ${bookGradientEnd(chapter.color)};">
      <span class="chapter-tag">${chapter.color === "lavender" ? "The Moon Makers" : chapter.color === "peach" ? "The Mars Message" : "Beyond the Blue"} &middot; Chapter ${state.chapterIndex + 1}</span>
      <h2>${escapeHtml(chapter.title)}</h2>
      <p>${escapeHtml(pageText)}</p>
      ${!isLast ? "" : `<div class="fun-fact"><span class="tag">Fun Fact</span>${escapeHtml(chapter.funFact)}</div>`}
    </div>
  `;

  dots.innerHTML = chapter.pages.map((_, i) => `<div class="dot ${i === state.pageIndex ? "active" : ""}" aria-label="Page ${i + 1}"></div>`).join("");

  prevBtn.disabled = state.pageIndex === 0;
  prevBtn.textContent = state.pageIndex === 0 ? "&#9664;" : "&#9664; Prev";

  if (isLast && !alreadyDone) {
    // show quiz instead of next
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    dots.style.display = "none";
    quizArea.style.display = "block";
    renderQuiz(book, chapter);
  } else if (isLast && alreadyDone) {
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = "Next Chapter &rarr;";
    nextBtn.className = "nav-btn next mint";
    prevBtn.style.display = "inline-block";
    dots.style.display = "flex";
    quizArea.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = "Next &rarr;";
    nextBtn.className = "nav-btn next";
    prevBtn.style.display = "inline-block";
    dots.style.display = "flex";
    quizArea.style.display = "none";
  }

  if (state.voiceOn && !alreadyDone && !(isLast)) speak(pageText);
}

function bindReader(book, chapter, alreadyDone) {
  $("#backBtn").addEventListener("click", () => navigate("library"));
  $("#voiceChip").addEventListener("click", toggleVoice);
  $("#voiceChip").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleVoice(); } });
  $("#playBtn").addEventListener("click", () => {
    const t = currentPageText(book, chapter);
    if (t) speak(t);
    else showToast("Nothing to read on this page.");
  });
  $("#prevBtn").addEventListener("click", () => {
    if (state.pageIndex > 0) { state.pageIndex--; renderReaderPage(book, chapter, alreadyDone); }
  });
  const scene = $("#bookScene");
  scene.addEventListener("click", () => {
    const svg = scene.querySelector("svg");
    if (!svg) return;
    svg.classList.remove("bounce-obj");
    void svg.offsetHeight; // reflow
    svg.classList.add("bounce-obj");
    if (state.voiceOn) speak(currentPageText(book, chapter));
  });

  $("#nextBtn").addEventListener("click", () => {
    if (state.pageIndex >= chapter.pages.length - 1) {
      // next chapter or finish
      const nextCh = state.chapterIndex + 1;
      if (nextCh < book.chapters.length) {
        navigate("reader", { bookId: book.id, chapterIndex: nextCh });
      } else {
        navigate("library");
        showToast("Book complete!");
      }
    } else {
      state.pageIndex++;
      renderReaderPage(book, chapter, alreadyDone);
    }
  });
}

function toggleVoice() {
  state.voiceOn = !state.voiceOn;
  const chip = $("#voiceChip");
  chip.classList.toggle("on", state.voiceOn);
  chip.setAttribute("aria-checked", state.voiceOn);
  chip.querySelector("span").textContent = `Voice mode: ${state.voiceOn ? "On" : "Off"}`;
  if (state.voiceOn) {
    const book = bookById(state.bookId);
    const chapter = getChapter(book.id, state.chapterIndex);
    speak(currentPageText(book, chapter));
  } else {
    stopSpeech();
  }
}

/* ------------------------------------------------------------------ */
/*  Quiz                                                              */
/* ------------------------------------------------------------------ */

function renderQuiz(book, chapter) {
  const area = $("#quizArea");
  const prog = getChapterProgress(chapter.id);
  const alreadyDone = prog.completed;

  area.innerHTML = `
    <div class="quiz-wrap" style="border-top:6px solid ${bookGradientEnd(chapter.color)};">
      <span class="chapter-tag">Chapter Quiz &mdash; must complete to finish</span>
      <h2>Quiz Time!</h2>
      <div id="quizQuestion"></div>
    </div>
    <div class="quiz-actions" id="quizActions" style="${alreadyDone ? "display:none" : ""}"></div>
    <div id="badgeResult" style="${alreadyDone ? "" : "display:none"}"></div>
  `;

  state.quiz.qIndex = 0;
  state.quiz.answers = chapter.quiz.map(() => null);
  state.quiz.attempts = (prog.completed ? prog.attempts : 0);
  state.quiz.completed = alreadyDone;

  if (alreadyDone) {
    $("#badgeResult").innerHTML = badgeMarkup(prog.badge, prog.attempts, true);
    return;
  }
  renderQuizQuestion(book, chapter);
}

function renderQuizQuestion(book, chapter) {
  const qWrap = $("#quizQuestion");
  const actions = $("#quizActions");
  const q = chapter.quiz[state.quiz.qIndex];

  qWrap.innerHTML = `
    <div class="quiz-q">Q${state.quiz.qIndex + 1}. ${escapeHtml(q.q)}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <label class="opt" data-opt="${i}">
          <span class="letter">${String.fromCharCode(65 + i)}</span>
          <span>${escapeHtml(opt)}</span>
          <input type="radio" name="q" value="${i}" style="display:none" />
        </label>
      `).join("")}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div class="explain" id="quizExplain"></div>
  `;

  const prevSel = state.quiz.answers[state.quiz.qIndex];
  if (prevSel != null) {
    qWrap.querySelector(`[data-opt="${prevSel}"]`).classList.add("selected");
    qWrap.querySelector(`input[value="${prevSel}"]`).checked = true;
  }

  actions.innerHTML = `
    <button class="btn small secondary" id="prevQBtn" ${state.quiz.qIndex === 0 ? "disabled" : ""}>&#9664; Prev</button>
    <button class="btn small mint" id="nextQBtn">${state.quiz.qIndex === chapter.quiz.length - 1 ? "Submit Quiz" : "Next &rarr;"}</button>
  `;

  $("#quizFeedback").style.display = "none";
  $("#quizExplain").textContent = "";

  qWrap.querySelectorAll(".opt").forEach(el => {
    el.addEventListener("click", () => {
      const val = parseInt(el.getAttribute("data-opt"), 10);
      state.quiz.answers[state.quiz.qIndex] = val;
      qWrap.querySelectorAll(".opt").forEach(o => o.classList.remove("selected"));
      el.classList.add("selected");
      el.querySelector("input").checked = true;
    });
  });

  $("#prevQBtn").addEventListener("click", () => {
    if (state.quiz.qIndex > 0) { state.quiz.qIndex--; renderQuizQuestion(book, chapter); }
  });
  $("#nextQBtn").addEventListener("click", () => {
    if (state.quiz.answers[state.quiz.qIndex] == null) {
      showToast("Pick an answer first!");
      return;
    }
    if (state.quiz.qIndex < chapter.quiz.length - 1) {
      state.quiz.qIndex++;
      renderQuizQuestion(book, chapter);
    } else {
      submitQuiz(book, chapter);
    }
  });
}

function submitQuiz(book, chapter) {
  const correctCount = chapter.quiz.filter((q, i) => state.quiz.answers[i] === q.correct).length;
  state.quiz.attempts += 1;

  const fb = $("#quizFeedback");
  const explain = $("#quizExplain");
  const firstWrong = chapter.quiz.findIndex((q, i) => state.quiz.answers[i] !== q.correct);

  if (correctCount === chapter.quiz.length) {
    state.quiz.completed = true;
    let badge;
    if (state.quiz.attempts === 1) badge = "gold";
    else if (state.quiz.attempts === 2) badge = "silver";
    else badge = "none";
    setChapterProgress(chapter.id, { completed: true, attempts: state.quiz.attempts, badge });

    fb.className = "quiz-feedback ok";
    fb.textContent = "All correct! Chapter complete.";
    fb.style.display = "block";
    explain.textContent = "Amazing job, explorer!";
    explain.style.display = "block";

    $("#quizActions").style.display = "none";
    $("#badgeResult").style.display = "block";
    $("#badgeResult").innerHTML = badgeMarkup(badge, state.quiz.attempts, true);

    // lock options
    $("#quizQuestion").querySelectorAll(".opt").forEach(o => { o.style.cursor = "default"; });
    if (state.voiceOn) speak(`Chapter complete! You earned a ${badge} badge.`);

    // update navbar next
    const nextBtn = $("#nextBtn");
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = "Next Chapter &rarr;";
    nextBtn.className = "nav-btn next mint";
  } else {
    fb.className = "quiz-feedback bad";
    fb.textContent = `Not quite. ${chapter.quiz[firstWrong].explain}`;
    fb.style.display = "block";
    explain.textContent = "Try again &mdash; you can do it!";
    explain.style.display = "block";
    // highlight correct option for current question if user got it wrong
    const curQ = chapter.quiz[state.quiz.qIndex];
    const curSel = state.quiz.answers[state.quiz.qIndex];
    const opts = $("#quizQuestion").querySelectorAll(".opt");
    opts.forEach((o, i) => {
      o.classList.remove("selected");
      if (i === curQ.correct) o.classList.add("correct");
      else if (i === curSel) o.classList.add("wrong");
    });
    if (state.voiceOn) speak("Not quite right. Try again!");
  }
}

function badgeMarkup(badge, attempts, showAttempt = false) {
  const conf = {
    gold: { label: "Gold Collector", icon: "🏅", cls: "badge-gold", msg: "Nailed it on the first try!" },
    silver: { label: "Silver Badge", icon: "🥈", cls: "badge-silver", msg: "You got it on the second attempt." },
    none: { label: "No Badge", icon: "🎯", cls: "badge-none", msg: "Keep trying &mdash; next time you'll shine!" },
  };
  const c = conf[badge] || conf.none;
  return `
    <div class="badge-card ${c.cls}">
      <div class="badge-icon">${c.icon}</div>
      <h3>${c.label}</h3>
      <p>${c.msg}</p>
      ${showAttempt ? `<div class="attempt-note">Attempts: ${attempts}</div>` : ""}
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/*  Escape helper                                                     */
/* ------------------------------------------------------------------ */

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

/* Boot */
init();
