export const LIVE_STREAM_URL = "https://s13.myradiostream.com:38946/listen.mp3?nocache=1777538456";

export const stationInfo = {
  name: "Byta FM",
  slogan: "Your voice for agriculture, health, and community.",
  primaryFrequency: "90.3 FM",
  secondaryFrequency: "100.3 FM",
  primaryLocation: "Choma",
  secondaryLocation: "Mazabuka",
  phoneDisplay: "0966 81 14 29",
  phoneIntl: "+260966811429",
  whatsappUrl: "https://wa.me/260966811429",
  email: "bytafmchoma@gmail.com",
  address: "Plot 1199/53, Mwanachingwala Rd, Choma, Zambia",
  serviceArea: "Choma, Mazabuka, Monze, Kalomo, and surrounding communities in Southern Province",
  established: "2015"
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/shows", label: "Shows" },
  { href: "/schedule", label: "Schedule" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export interface Show {
  id: string;
  title: string;
  host: string;
  schedule: string;
  category: string;
  tone: "sunrise" | "spotlight" | "groove" | "community" | "night" | "weekend";
  summary: string;
  detail: string;
  cta: string;
}

export const shows: Show[] = [
  {
    id: "byta-breakfast",
    title: "Byta Breakfast",
    host: "Breakfast Team",
    schedule: "Mon-Fri | 06:00-09:00",
    category: "Talk",
    tone: "sunrise",
    summary: "The station's early-morning programme mixes headlines, road updates, market prices, farming notices, prayer, and listener shout-outs for households starting the day.",
    detail: "Byta Breakfast is built for Southern Province mornings: local news, practical information, agriculture headlines, weather, and the kind of familiar radio companionship that keeps Choma and Mazabuka listeners informed before work, school, or the market.",
    cta: "Send your early-morning shout-out."
  },
  {
    id: "current-affairs-briefing",
    title: "Current Affairs Briefing",
    host: "News and Current Affairs Desk",
    schedule: "Mon-Fri | 09:00-11:00",
    category: "News",
    tone: "spotlight",
    summary: "A weekday block for district news, civic issues, business updates, policy discussion, and listener reactions in plain, accessible language.",
    detail: "This programme gives Byta FM its information backbone. Interviews, issue explainers, council stories, business updates, and audience feedback help listeners follow the conversations that affect farming, transport, health services, schools, and everyday life.",
    cta: "Send a question for the discussion."
  },
  {
    id: "farm-and-health-line",
    title: "Farm and Health Line",
    host: "Agriculture and Health Desk",
    schedule: "Mon-Fri | 11:00-12:00",
    category: "News",
    tone: "community",
    summary: "A practical hour focused on farming decisions, livestock, crop timing, family health, nutrition, and expert advice listeners can use immediately.",
    detail: "Byta FM's agriculture and health identity is strongest here. The segment turns specialist information into everyday guidance, helping farmers, parents, traders, and households make informed choices with advice that is relevant to Southern Province realities.",
    cta: "Share a farming or health question."
  },
  {
    id: "midday-vibes",
    title: "Midday Vibes",
    host: "Midday Team",
    schedule: "Mon-Fri | 12:00-15:00",
    category: "Music",
    tone: "groove",
    summary: "A lighter daytime mix of Zambian music, gospel favourites, dedications, and small business mentions for listeners at work, at home, or on the move.",
    detail: "Midday Vibes keeps the station warm and interactive. It makes space for birthdays, family messages, workplace requests, short notices, and a music flow that stays familiar without losing the community feel people expect from local radio.",
    cta: "Send your lunchtime dedication."
  },
  {
    id: "community-forum",
    title: "Community Forum",
    host: "Studio Conversation Team",
    schedule: "Mon-Fri | 15:00-17:00",
    category: "Talk",
    tone: "community",
    summary: "An afternoon discussion space for youth matters, family life, local leadership, education, business, and the issues listeners want explained properly.",
    detail: "Community Forum is where the station's listener relationship becomes most visible. WhatsApp messages, call-ins, guest voices, and live studio moderation turn the programme into a genuine community platform rather than a one-way broadcast.",
    cta: "Send a voice note before the show."
  },
  {
    id: "evening-chill",
    title: "Evening Chill",
    host: "Evening Team",
    schedule: "Mon-Fri | 18:00-21:00",
    category: "Music",
    tone: "night",
    summary: "A slower evening programme with requests, reflective talk, relationship topics, and a music selection that suits the journey home and family listening.",
    detail: "Evening Chill lets the station settle into a calmer rhythm while still staying interactive. It is ideal for dedications, end-of-day catchups, local music rotation, and the softer voice of radio that keeps listeners connected after work.",
    cta: "Request your sunset track."
  },
  {
    id: "sports-junction",
    title: "Sports Junction",
    host: "Sports Desk",
    schedule: "Sat-Sun | 13:00-15:00",
    category: "Lifestyle",
    tone: "weekend",
    summary: "Weekend football talk, local fixtures, league analysis, fan reactions, and sports updates that keep supporters close to the action.",
    detail: "Sports Junction gives the station a stronger weekend identity by covering both the bigger national conversation and the matches, tournaments, and local talent listeners care about at community level.",
    cta: "Send your score prediction."
  },
  {
    id: "gospel-sunrise",
    title: "Gospel Sunrise",
    host: "Weekend Inspiration Team",
    schedule: "Sat-Sun | 08:00-10:00",
    category: "Lifestyle",
    tone: "weekend",
    summary: "A weekend faith and inspiration programme with gospel music, short reflections, family encouragement, and community notices.",
    detail: "Gospel Sunrise is designed for quieter, family-centered listening on Saturday and Sunday mornings, combining worship music with messages of hope and relevant announcements for the community.",
    cta: "Share a church or community notice."
  },
  {
    id: "weekend-rush",
    title: "Weekend Rush",
    host: "Weekend Crew",
    schedule: "Sat-Sun | 10:00-13:00",
    category: "Lifestyle",
    tone: "weekend",
    summary: "A lively weekend mix of local events, market activity, entertainment updates, outside broadcasts, and community conversation.",
    detail: "Weekend Rush is the programme that carries Byta FM beyond routine weekday listening. It is built for markets, road trips, sporting energy, church announcements, and the social pulse of the province.",
    cta: "Promote your event with the team."
  }
];

export interface NewsPost {
  title: string;
  category: string;
  date: string;
  summary: string;
}

export const newsPosts: NewsPost[] = [
  {
    title: "How to listen to Byta FM live on 90.3 FM, 100.3 FM, and online",
    category: "News",
    date: "April 28, 2026",
    summary: "A simple guide for listeners in Choma, Mazabuka, and beyond who want to tune in on FM radio or use the Byta FM live stream from any device."
  },
  {
    title: "Why agriculture and health remain central to Byta FM programming",
    category: "Insights",
    date: "April 24, 2026",
    summary: "The station's strongest public-service role comes from useful information on farming, family health, nutrition, markets, and everyday decision-making."
  },
  {
    title: "How to send a dedication, shout-out, or community announcement to Byta FM",
    category: "Community",
    date: "April 19, 2026",
    summary: "From birthday messages to funeral notices and local event mentions, this guide explains the most useful ways listeners can reach the studio."
  },
  {
    title: "Advertising on Byta FM: reaching listeners in Choma, Mazabuka, and Southern Province",
    category: "Community",
    date: "April 15, 2026",
    summary: "Businesses, institutions, and campaign teams can use Byta FM for spot advertising, sponsored programmes, outside broadcasts, and public awareness messages."
  },
  {
    title: "What to expect from the Byta FM weekend schedule",
    category: "Culture",
    date: "April 11, 2026",
    summary: "Weekend listening brings gospel, sports, local music, youth conversation, and event-focused programming for families and communities across the province."
  },
  {
    title: "Why local language radio still matters in Southern Province",
    category: "Insights",
    date: "April 7, 2026",
    summary: "Familiar language, lived context, and community participation help radio stay useful, trusted, and close to everyday life."
  }
];

export type DayName =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface ScheduleEntry {
  time: string;
  title: string;
  category: string;
  note: string;
}

export const weeklySchedule: Record<DayName, ScheduleEntry[]> = {
  monday: [
    { time: "06:00", title: "Byta Breakfast", category: "Talk", note: "Headlines, market updates, weather, and shout-outs" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "District stories, business updates, and live discussion" },
    { time: "11:00", title: "Farm and Health Line", category: "News", note: "Agriculture advice, family health, and expert guidance" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Music, dedications, and small business mentions" },
    { time: "15:00", title: "Community Forum", category: "Talk", note: "Youth issues, local leadership, and open phone lines" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Requests, reflections, and the ride-home soundtrack" }
  ],
  tuesday: [
    { time: "06:00", title: "Byta Breakfast", category: "Talk", note: "Community notices, road updates, and prayer" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "National stories, interviews, and listener questions" },
    { time: "11:00", title: "Farm and Health Line", category: "News", note: "Crop planning, nutrition, and clinic information" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Lunchtime requests and familiar daytime favourites" },
    { time: "15:00", title: "Community Forum", category: "Talk", note: "Family issues, relationships, and public concerns" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Local music, dedications, and evening conversation" }
  ],
  wednesday: [
    { time: "06:00", title: "Byta Breakfast", category: "Talk", note: "Midweek energy, announcements, and market movement" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "Public-interest interviews and local reporting" },
    { time: "11:00", title: "Farm and Health Line", category: "News", note: "Livestock, nutrition, and rural livelihoods" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Requests, greetings, and daytime radio comfort" },
    { time: "15:00", title: "Community Forum", category: "Talk", note: "Education, youth matters, and entrepreneurship" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Smooth music and community reflections" }
  ],
  thursday: [
    { time: "06:00", title: "Byta Breakfast", category: "Talk", note: "Traffic pulse, voice notes, and local stories" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "Economy watch, governance, and civic dialogue" },
    { time: "11:00", title: "Farm and Health Line", category: "News", note: "Household health, farming inputs, and practical tips" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Listener favourites and workday rhythm" },
    { time: "15:00", title: "Community Forum", category: "Talk", note: "Parenting, family life, and community solutions" },
    { time: "18:00", title: "Evening Chill", category: "Music", note: "Artist stories, dedications, and easy listening" }
  ],
  friday: [
    { time: "06:00", title: "Byta Breakfast", category: "Talk", note: "Friday warm-up, market updates, and dedications" },
    { time: "09:00", title: "Current Affairs Briefing", category: "News", note: "Week in review and the issues still driving debate" },
    { time: "11:00", title: "Farm and Health Line", category: "News", note: "Weekend farming prep and family wellness tips" },
    { time: "12:00", title: "Midday Vibes", category: "Music", note: "Request-heavy lunchtime with shout-outs" },
    { time: "15:00", title: "Community Forum", category: "Talk", note: "Open discussion, local concerns, and audience voices" },
    { time: "18:00", title: "Friday Night Warm Up", category: "Music", note: "Event picks, guest mixes, and weekend energy" }
  ],
  saturday: [
    { time: "08:00", title: "Gospel Sunrise", category: "Faith", note: "Reflective opening and messages of hope" },
    { time: "10:00", title: "Weekend Rush", category: "Lifestyle", note: "Events, guests, markets, and family listening" },
    { time: "13:00", title: "Sports Junction", category: "Sports", note: "Fixtures, local football, and fan reactions" },
    { time: "15:00", title: "Youth Frequency", category: "Culture", note: "Youth voices, creativity, and campus conversation" },
    { time: "18:00", title: "Saturday Sundown", category: "Music", note: "High-energy mixes and guest selectors" },
    { time: "21:00", title: "Late Night Replay", category: "Mix", note: "Popular sets, dedications, and replay highlights" }
  ],
  sunday: [
    { time: "08:00", title: "Gospel Sunrise", category: "Faith", note: "Community reflections and worship music" },
    { time: "10:00", title: "Weekend Rush", category: "Lifestyle", note: "Family listening, events, and community updates" },
    { time: "13:00", title: "Homegrown Stories", category: "Culture", note: "Local voices, oral history, and community culture" },
    { time: "15:00", title: "Sports Junction", category: "Sports", note: "Weekend wrap and fan hotline" },
    { time: "18:00", title: "Sunday Calm", category: "Music", note: "Easy listening before the new week" },
    { time: "21:00", title: "Night Prayer & Close", category: "Faith", note: "Soft close and community notices" }
  ]
};

export const dayOrder: DayName[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export const shortDays: Record<DayName, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun"
};
