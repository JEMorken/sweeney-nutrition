export type Flag = "highlight" | "concern" | null;

export type Habit = {
  id: string;
  label: string;
};

export type DayEntry = {
  date: string;
  dayOfWeek: string;
  habits: Record<string, boolean>;
  mood: number;
  energy: number;
  hunger: number;
  sleepHours: number;
  journal: string;
  flag: Flag;
};

export type CarolineMessage = {
  id: string;
  from: "caroline" | "client";
  date: string;
  text: string;
  referencesDate?: string;
};

export const habits: Habit[] = [
  { id: "move", label: "Move my body, however felt right" },
  { id: "screen-free", label: "Eat one meal without screens" },
  { id: "water", label: "Drink water before coffee" },
  { id: "hunger", label: "Notice hunger before eating" },
  { id: "outside", label: "Get outside (10+ minutes)" },
];

export const week: DayEntry[] = [
  {
    date: "2026-05-25",
    dayOfWeek: "Monday",
    habits: { move: true, "screen-free": false, water: true, hunger: true, outside: true },
    mood: 3,
    energy: 3,
    hunger: 3,
    sleepHours: 6.5,
    journal:
      "Slept terribly but had a good walk. Felt anxious about tomorrow's meeting all afternoon, ate a few too many crackers and... that's fine, I think? I noticed and that's the work.",
    flag: null,
  },
  {
    date: "2026-05-26",
    dayOfWeek: "Tuesday",
    habits: { move: true, "screen-free": true, water: true, hunger: true, outside: false },
    mood: 4,
    energy: 4,
    hunger: 3,
    sleepHours: 7.5,
    journal:
      "Decent energy. Made the lentil thing Caroline suggested. Felt full without feeling stuffed for the first time in a while.",
    flag: null,
  },
  {
    date: "2026-05-27",
    dayOfWeek: "Wednesday",
    habits: { move: false, "screen-free": true, water: false, hunger: true, outside: false },
    mood: 2,
    energy: 2,
    hunger: 4,
    sleepHours: 9,
    journal:
      "Cycle day 1. Tired. Slept 9 hours and still wanted more. Ate more carbs than usual and didn't fight it. The cravings actually feel different when I just let them be there.",
    flag: "concern",
  },
  {
    date: "2026-05-28",
    dayOfWeek: "Thursday",
    habits: { move: true, "screen-free": true, water: true, hunger: true, outside: true },
    mood: 4,
    energy: 3,
    hunger: 3,
    sleepHours: 7,
    journal:
      "Good day. Walked to the coffee place. Made dinner instead of ordering. Hungry around 8pm and ate a real second dinner. No shame.",
    flag: null,
  },
  {
    date: "2026-05-29",
    dayOfWeek: "Friday",
    habits: { move: false, "screen-free": false, water: true, hunger: true, outside: true },
    mood: 4,
    energy: 3,
    hunger: 3,
    sleepHours: 6,
    journal:
      "Drinks with K. Ate slowly. Came home feeling fine, not stuffed, not 'ruined.'",
    flag: null,
  },
  {
    date: "2026-05-30",
    dayOfWeek: "Saturday",
    habits: { move: true, "screen-free": true, water: true, hunger: true, outside: true },
    mood: 5,
    energy: 4,
    hunger: 2,
    sleepHours: 8.5,
    journal: "Sleep finally. Read in bed until 10. Took the long way on the morning walk.",
    flag: null,
  },
  {
    date: "2026-05-31",
    dayOfWeek: "Sunday",
    habits: { move: true, "screen-free": true, water: true, hunger: true, outside: true },
    mood: 5,
    energy: 4,
    hunger: 3,
    sleepHours: 8,
    journal:
      "Reflective day. Looked back at the week and noticed how much less I'm thinking about food, even when I'm eating it. Something is loosening.",
    flag: "highlight",
  },
];

export const messages: CarolineMessage[] = [
  {
    id: "m1",
    from: "caroline",
    date: "2026-05-31",
    text:
      "Megan — read your Sunday reflection just now. \"Something is loosening\" is exactly the language I hoped you'd find. We'll sit with this on Tuesday.",
    referencesDate: "2026-05-31",
  },
  {
    id: "m2",
    from: "caroline",
    date: "2026-05-28",
    text:
      "Saw your Wednesday entry. The cycle-day-1 cravings notice is huge — your body asked, you listened, no fight. Let's talk about the pattern Tuesday.",
    referencesDate: "2026-05-27",
  },
  {
    id: "m3",
    from: "client",
    date: "2026-05-27",
    text:
      "I felt like I 'failed' the carb thing today and then realized I was about to say that out loud. Catching it earlier.",
  },
];

export const rhythms = [
  { label: "days of finishing meals without distraction", value: 12 },
  { label: "weeks of consistent sleep (7+ hrs)", value: 3 },
  { label: "weeks since the last “I blew it” thought", value: 5 },
];

export const patternObservations = [
  "You sleep less on Wednesdays.",
  "Energy follows habit days — about 24 hours later.",
  "Mood lifts on days you spend 10+ minutes outside.",
];

export function wellbeingScore(d: DayEntry) {
  return (d.mood + d.energy + Math.min(d.sleepHours, 9) / 1.8) / 3;
}

export function habitCompletionRate(d: DayEntry) {
  const total = habits.length;
  const done = habits.filter((h) => d.habits[h.id]).length;
  return done / total;
}

const fourWeekScale = [0.75, 0.85, 0.95, 1];
export const fourWeekHistory: DayEntry[][] = fourWeekScale.map((scale, weekIdx) =>
  week.map((d, dayIdx) => {
    const completed = Object.entries(d.habits).map(([k, v], i) => {
      const shouldDrop = (weekIdx + dayIdx + i) % 7 < (1 - scale) * 7;
      return [k, v && !shouldDrop] as const;
    });
    return {
      ...d,
      habits: Object.fromEntries(completed),
      mood: Math.max(1, Math.round(d.mood * scale - (weekIdx === 0 ? 0.5 : 0))),
      energy: Math.max(1, Math.round(d.energy * scale - (weekIdx === 0 ? 0.5 : 0))),
    };
  })
);
