const RADIO_GARDEN_URL = "https://radio.garden/listen/byta-fm-radio-90-3/YsDAFNNN";

const shows = [
  {
    id: "morning-drive",
    title: "Morning Drive with DJ K",
    host: "DJ K",
    schedule: "Mon-Fri | 06:00-09:00",
    category: "Music",
    tone: "sunrise",
    summary: "Start your day with music, agriculture tips, and community shout-outs from across the Southern Province.",
    detail: "Upbeat mixes, short farming updates, local headlines, and call-ins from Choma, Mazabuka, and beyond to get the morning moving.",
    cta: "Voice-note requests before 08:00."
  },
  {
    id: "current-affairs-briefing",
    title: "Current Affairs Briefing",
    host: "Mwaka Bwalya",
    schedule: "Mon-Fri | 09:00-11:00",
    category: "News",
    tone: "spotlight",
    summary: "In-depth coverage of agriculture policy, health advisories, and the stories shaping the Southern Province.",
    detail: "Reporter dispatches from Choma, Monze, and Kalomo paired with listener reactions and expert analysis on farming and public health.",
    cta: "Submit questions for the next panel."
  },
  {
    id: "midday-vibes",
    title: "Midday Vibes",
    host: "Auntie Cleo",
    schedule: "Mon-Fri | 12:00-14:00",
    category: "Music",
    tone: "groove",
    summary: "Zambian hits, amapiano, and lunchtime dedications to keep the afternoon moving across the province.",
    detail: "Music-first programming with room for birthday mentions, market announcements, and small-business spotlights from local communities.",
    cta: "Dedications open all lunchtime."
  },
  {
    id: "talk-time",
    title: "Talk Time",
    host: "The Byta Desk",
    schedule: "Mon-Fri | 15:00-17:00",
    category: "Talk",
    tone: "community",
    summary: "Community conversations on health, youth, agriculture, and everyday topics that matter to Southern Province families.",
    detail: "Interactive discussion with studio guests, community leaders, and WhatsApp voice notes from listeners in Choma, Mazabuka, Namwala, and beyond.",
    cta: "Join via WhatsApp voice notes."
  },
  {
    id: "evening-chill",
    title: "Evening Chill",
    host: "Tash & Neo",
    schedule: "Mon-Fri | 18:00-21:00",
    category: "Music",
    tone: "night",
    summary: "Wind down with smooth music, local artist features, and reflections from across the Southern Province.",
    detail: "A relaxed evening blend with less talk, curated Zambian and international tracks, and an intimate night-radio mood.",
    cta: "Request your sunset track."
  },
  {
    id: "weekend-rush",
    title: "Weekend Rush",
    host: "Byta Crew",
    schedule: "Sat-Sun | 10:00-13:00",
    category: "Lifestyle",
    tone: "weekend",
    summary: "Weekend entertainment with event picks, market reports, outside broadcasts, and community catch-up.",
    detail: "Live, open, and social — with guest DJs, local market updates, farming features, and a strong community events focus across the province.",
    cta: "Promote your event with the team."
  }
];

const newsPosts = [
  {
    title: "Byta FM partners with local farmers for planting season coverage",
    category: "Community",
    date: "April 28, 2026",
    summary: "Live broadcasts from farming cooperatives in Choma, Kalomo, and Namwala bring practical planting advice directly to listeners across the Southern Province."
  },
  {
    title: "Five Zambian tracks the Byta FM team cannot stop replaying",
    category: "Music",
    date: "April 24, 2026",
    summary: "A staff-picked playlist blending hip-hop, Zambian gospel, and amapiano that captures the sound of the Southern Province this month."
  },
  {
    title: "Cholera prevention tips every household in Southern Province should know",
    category: "News",
    date: "April 19, 2026",
    summary: "Our health desk shares practical prevention steps from the Choma District Health Office ahead of the rainy season."
  },
  {
    title: "Maize and groundnut prices: what this week's market means for farmers",
    category: "News",
    date: "April 15, 2026",
    summary: "The newsroom breaks down commodity prices at Choma, Monze, and Mazabuka markets so farming families can plan ahead."
  },
  {
    title: "Youth voices: Byta FM opens a segment for young creatives in the province",
    category: "Culture",
    date: "April 11, 2026",
    summary: "A new recurring segment invites student filmmakers, musicians, and podcasters from across the Southern Province to share their work on air."
  },
  {
    title: "Outside broadcast: Choma Agricultural Show highlights",
    category: "Events",
    date: "April 7, 2026",
    summary: "Byta FM's live coverage from the annual agricultural show brought interviews with exhibitors, farmers, and government officials to listeners province-wide."
  }
];

const weeklySchedule = {
  monday: [
    { time: "06:00", title: "Morning Drive with DJ K", category: "Music", note: "Music, farming tips, and community shout-outs" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "Agriculture policy, health updates, and local news" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Lunchtime dedications and Zambian hits" },
    { time: "15:00", title: "Talk Time", category: "Talk", note: "Health, youth, agriculture, and community topics" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Smooth blends for the ride home" },
    { time: "21:00", title: "After Hours Select", category: "Mix", note: "Late-night curation and slow tempo sets" }
  ],
  tuesday: [
    { time: "06:00", title: "Morning Drive with DJ K", category: "Music", note: "Listener shout-outs and farming updates" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "Market prices and reporter dispatches" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Zambian playlist and birthday mentions" },
    { time: "15:00", title: "Talk Time", category: "Talk", note: "Health, wellness, and open phones" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Soul, R&B, and local artist features" },
    { time: "21:00", title: "Night Select", category: "Mix", note: "Night-drive transitions and deep cuts" }
  ],
  wednesday: [
    { time: "06:00", title: "Morning Drive with DJ K", category: "Music", note: "Midweek energy and agriculture promos" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "District council updates and national headlines" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Fresh releases and community notices" },
    { time: "15:00", title: "Talk Time", category: "Talk", note: "Farming tips and entrepreneurship stories" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Golden-era blends and slow-build mood" },
    { time: "21:00", title: "Producer's Room", category: "Mix", note: "Behind-the-scenes sound curation" }
  ],
  thursday: [
    { time: "06:00", title: "Morning Drive with DJ K", category: "Music", note: "Community requests and weather updates" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "Health features and economy watch" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Zambian mix with listener voice notes" },
    { time: "15:00", title: "Talk Time", category: "Talk", note: "Family health topics and expert sit-downs" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Artist stories and sunset soundtrack" },
    { time: "21:00", title: "After Dark Sessions", category: "Mix", note: "Curated night sets and dedications" }
  ],
  friday: [
    { time: "06:00", title: "Morning Drive with DJ K", category: "Music", note: "Friday warm-up and weekend farming tips" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "Week-in-review and agriculture focus" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Request-heavy lunch takeover" },
    { time: "15:00", title: "Talk Time", category: "Talk", note: "Listener stories and community topics" },
    { time: "18:00", title: "Friday Night Warm Up", category: "Music", note: "Mixes, event picks, and guest DJs" },
    { time: "21:00", title: "Club Preview", category: "Mix", note: "Pre-weekend tempo and outside guide" }
  ],
  saturday: [
    { time: "08:00", title: "Gospel Sunrise", category: "Faith", note: "Reflective opening and messages of hope" },
    { time: "10:00", title: "Weekend Rush", category: "Lifestyle", note: "Events, guests, and market movement" },
    { time: "13:00", title: "Sports Junction", category: "Sports", note: "Fixtures, analysis, and fan reactions" },
    { time: "15:00", title: "Youth Frequency", category: "Culture", note: "Campus voices and creative scenes" },
    { time: "18:00", title: "Saturday Sundown", category: "Music", note: "High-energy mixes and guest selectors" },
    { time: "21:00", title: "Late Night Replay", category: "Mix", note: "The best sets from the week" }
  ],
  sunday: [
    { time: "08:00", title: "Gospel Sunrise", category: "Faith", note: "Community reflections and worship music" },
    { time: "10:00", title: "Weekend Rush", category: "Lifestyle", note: "Family listening and outside reports" },
    { time: "13:00", title: "Homegrown Stories", category: "Culture", note: "Local voices, oral history, and art" },
    { time: "15:00", title: "Sports Junction", category: "Sports", note: "Weekend wrap and fan hotline" },
    { time: "18:00", title: "Sunday Calm", category: "Music", note: "Easy listening before the new week" },
    { time: "21:00", title: "Night Prayer & Close", category: "Faith", note: "Soft close and community notices" }
  ]
};

const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const shortDays = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun"
};

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  renderShowCollections();
  renderNewsCollections();
  renderSchedules();
  setupListenButtons();
  syncYear();
  updateNowPlaying();
});

function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderShowCollections() {
  const homeShows = document.querySelector("#home-shows");
  if (homeShows) {
    homeShows.innerHTML = shows
      .slice(0, 4)
      .map((show) => createShowCard(show, false))
      .join("");
  }

  const fullShows = document.querySelector("#shows-grid");
  if (fullShows) {
    fullShows.innerHTML = shows.map((show) => createShowCard(show, true)).join("");
  }

  const detailShows = document.querySelector("#show-detail-list");
  if (detailShows) {
    detailShows.innerHTML = shows
      .map(
        (show) => `
          <article class="panel" id="${show.id}">
            <div class="show-meta">
              <span class="meta-pill">${show.category}</span>
              <span class="meta-pill">${show.schedule}</span>
              <span class="meta-pill">Host: ${show.host}</span>
            </div>
            <h3 style="margin:0 0 0.7rem;font-size:2rem;font-family:var(--font-display);line-height:0.98;">${show.title}</h3>
            <p>${show.detail}</p>
            <div class="pill-row">
              <span>${show.cta}</span>
              <span>Studio interaction</span>
              <span>Brand-friendly slot</span>
            </div>
          </article>
        `
      )
      .join("");
  }
}

function createShowCard(show, detailed) {
  return `
    <article class="show-card">
      <div class="show-visual" data-tone="${show.tone}">
        <div class="visual-copy">
          <span class="visual-tag">${show.category}</span>
          <h3>${show.title}</h3>
        </div>
      </div>
      <div class="card-body">
        <div class="show-meta">
          <span class="meta-pill">${show.schedule}</span>
          <span class="meta-pill">${show.host}</span>
        </div>
        <p>${detailed ? show.detail : show.summary}</p>
        <div class="card-actions">
          <a href="shows.html#${show.id}">View show</a>
          <span class="meta-pill">${show.cta}</span>
        </div>
      </div>
    </article>
  `;
}

function renderNewsCollections() {
  const featured = document.querySelector("#featured-story");
  if (featured) {
    const lead = newsPosts[0];
    featured.innerHTML = `
      <div>
        <div class="news-meta">
          <span class="meta-pill">${lead.category}</span>
          <span class="meta-pill">${lead.date}</span>
        </div>
        <h3>${lead.title}</h3>
        <p>${lead.summary}</p>
        <a class="button button-secondary" href="news.html">Explore news</a>
      </div>
    `;
  }

  const homeNews = document.querySelector("#home-news");
  if (homeNews) {
    homeNews.innerHTML = newsPosts.slice(1, 4).map(createNewsCard).join("");
  }

  const fullNews = document.querySelector("#news-grid");
  if (fullNews) {
    fullNews.innerHTML = newsPosts.map(createNewsCard).join("");
  }
}

function createNewsCard(post) {
  const tone = mapNewsTone(post.category);
  return `
    <article class="news-card">
      <div class="news-visual" style="${tone}">
        <div class="visual-copy">
          <span class="visual-tag">${post.category}</span>
          <strong>${post.date}</strong>
        </div>
      </div>
      <div class="card-body">
        <p style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:0.7rem;">${post.title}</p>
        <p>${post.summary}</p>
      </div>
    </article>
  `;
}

function mapNewsTone(category) {
  const colors = {
    Community: "background: linear-gradient(135deg, rgba(25, 201, 26, 0.34), rgba(10, 20, 10, 0.96));",
    Music: "background: linear-gradient(135deg, rgba(74, 227, 80, 0.34), rgba(5, 18, 14, 0.95));",
    Events: "background: linear-gradient(135deg, rgba(225, 31, 38, 0.32), rgba(22, 10, 10, 0.96));",
    News: "background: linear-gradient(135deg, rgba(191, 196, 201, 0.24), rgba(13, 13, 13, 0.98));",
    Culture: "background: linear-gradient(135deg, rgba(120, 156, 122, 0.32), rgba(10, 15, 11, 0.96));",
    Insights: "background: linear-gradient(135deg, rgba(166, 176, 184, 0.28), rgba(8, 14, 10, 0.96));"
  };

  return colors[category] || colors.News;
}

function renderSchedules() {
  document.querySelectorAll("[data-schedule-root]").forEach((root) => {
    const tabsHost = root.querySelector("[data-schedule-tabs]");
    const listHost = root.querySelector("[data-schedule-list]");
    const metaHost = root.querySelector("[data-schedule-meta]");
    const compact = root.dataset.scheduleRoot === "compact";
    const defaultDay = root.dataset.defaultDay || getTodayName();

    if (!tabsHost || !listHost) {
      return;
    }

    let activeDay = dayOrder.includes(defaultDay) ? defaultDay : "monday";

    const draw = () => {
      tabsHost.innerHTML = dayOrder
        .map(
          (day) => `
            <button class="schedule-tab${day === activeDay ? " is-active" : ""}" type="button" data-day="${day}">
              ${shortDays[day]}
            </button>
          `
        )
        .join("");

      const items = compact ? weeklySchedule[activeDay].slice(0, 5) : weeklySchedule[activeDay];
      const liveIndex = getLiveIndex(items);

      listHost.innerHTML = items
        .map(
          (item, index) => `
            <article class="schedule-row${index === liveIndex ? " is-live" : ""}">
              <div class="schedule-time">${item.time}</div>
              <div class="schedule-show">
                <strong>${item.title}</strong>
                <span>${item.note}</span>
              </div>
              <div class="schedule-category">${index === liveIndex ? "On air" : item.category}</div>
            </article>
          `
        )
        .join("");

      if (metaHost) {
        metaHost.textContent = `${capitalize(activeDay)} programming | All times CAT`;
      }
    };

    tabsHost.addEventListener("click", (event) => {
      const button = event.target.closest("[data-day]");
      if (!button || !(button instanceof HTMLButtonElement)) {
        return;
      }

      const nextDay = button.dataset.day;
      if (!nextDay || nextDay === activeDay) {
        return;
      }

      activeDay = nextDay;
      draw();
    });

    draw();
  });
}

function getLiveIndex(items) {
  const hour = new Date().getHours();
  const starts = items.map((item) => Number.parseInt(item.time.split(":")[0], 10));
  let index = 0;

  for (let i = 0; i < starts.length; i += 1) {
    const start = starts[i];
    const next = starts[i + 1] ?? 24;
    if (hour >= start && hour < next) {
      index = i;
      break;
    }
  }

  return index;
}

function getTodayName() {
  const index = new Date().getDay();
  return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][index];
}

function updateNowPlaying() {
  const todaySchedule = weeklySchedule[getTodayName()] || weeklySchedule.monday;
  const currentShow = todaySchedule[getLiveIndex(todaySchedule)];
  const labels = document.querySelectorAll("[data-now-playing]");
  const sublabels = document.querySelectorAll("[data-now-playing-sub]");

  labels.forEach((node) => {
    node.textContent = currentShow.title;
  });

  sublabels.forEach((node) => {
    node.textContent = `${currentShow.time} CAT | ${currentShow.note}`;
  });
}

function setupListenButtons() {
  const playerSection = document.querySelector("#live-player");
  const iframe = document.querySelector("#radio-frame");
  const shell = iframe ? iframe.closest(".embed-frame") : null;
  const placeholder = document.querySelector("#radio-placeholder");

  document.querySelectorAll("[data-load-stream]").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (!iframe || !playerSection || !shell) {
        window.location.href = "index.html#live-player";
        return;
      }

      event.preventDefault();
      if (!iframe.src) {
        iframe.src = iframe.dataset.src || RADIO_GARDEN_URL;
        shell.classList.add("is-loaded");
        if (placeholder) {
          placeholder.hidden = true;
        }
      }

      playerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-stream-link]").forEach((link) => {
    link.setAttribute("href", RADIO_GARDEN_URL);
  });
}

function syncYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
