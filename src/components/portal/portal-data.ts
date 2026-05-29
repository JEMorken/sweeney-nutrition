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
  journal?: string;
  carolineResponse?: string;
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
      "Slept badly. Good walk anyway. Anxious about tomorrow's meeting all afternoon, ate a few too many crackers. I noticed. Not nothing.",
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
      "Decent energy. Made the lentil thing Caroline suggested. Felt full without feeling stuffed — first time in a while.",
    flag: null,
  },
  {
    date: "2026-05-27",
    dayOfWeek: "Wednesday",
    habits: { move: false, "screen-free": true, water: false, hunger: true, outside: false },
    mood: 2,
    energy: 2,
    hunger: 4,
    sleepHours: 5.5,
    journal:
      "Cycle day 1. Tired in a deep way. Slept 5 hours and wanted more. The carb cravings were loud and I let them be loud, ate what I ate. That was hard, even if it sounds simple. Wednesdays keep ending up like this.",
    carolineResponse:
      "Three Wednesdays in a row like this one. Not a coincidence anymore — let's plan around it. (We'll talk Tuesday.)",
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
      "Walked to the coffee place. Made dinner instead of ordering. Hungry around 8pm and ate a real second dinner. No shame about it.",
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
      "Reflective day. Looked back at the week and noticed how much less I'm thinking about food, even when I'm eating it. Something is loosening. It hasn't been easy. But something is.",
    carolineResponse:
      'Megan — "Something is loosening" is exactly the language I hoped you\'d find. None of it has been easy. We\'ll sit with this on Tuesday.',
    flag: "highlight",
  },
];

const fullHabits = { move: true, "screen-free": true, water: true, hunger: true, outside: true };
const noHabits = { move: false, "screen-free": false, water: false, hunger: false, outside: false };
const partialHabits = (active: string[]) =>
  Object.fromEntries(habits.map((h) => [h.id, active.includes(h.id)]));

const fourWeeksAgo: DayEntry[] = [
  { date: "2026-05-04", dayOfWeek: "Monday", habits: partialHabits(["move", "water"]), mood: 3, energy: 3, hunger: 3, sleepHours: 7, flag: null },
  { date: "2026-05-05", dayOfWeek: "Tuesday", habits: partialHabits(["water", "hunger", "outside"]), mood: 3, energy: 3, hunger: 3, sleepHours: 7, flag: null },
  {
    date: "2026-05-06",
    dayOfWeek: "Wednesday",
    habits: noHabits,
    mood: 2,
    energy: 2,
    hunger: 4,
    sleepHours: 5,
    journal:
      "Crashed at noon. Worked through lunch and felt awful by 3. Tried to recover with more coffee, which made it worse. Long day.",
    flag: "concern",
  },
  { date: "2026-05-07", dayOfWeek: "Thursday", habits: partialHabits(["move", "water", "outside"]), mood: 3, energy: 3, hunger: 3, sleepHours: 7, flag: null },
  { date: "2026-05-08", dayOfWeek: "Friday", habits: partialHabits(["water", "outside"]), mood: 3, energy: 4, hunger: 3, sleepHours: 6.5, flag: null },
  { date: "2026-05-09", dayOfWeek: "Saturday", habits: partialHabits(["move", "screen-free", "water", "hunger"]), mood: 4, energy: 4, hunger: 3, sleepHours: 8, flag: null },
  {
    date: "2026-05-10",
    dayOfWeek: "Sunday",
    habits: fullHabits,
    mood: 4,
    energy: 3,
    hunger: 3,
    sleepHours: 8,
    journal: "Restful. Took a long walk. Made soup with my hands instead of from a recipe.",
    flag: null,
  },
];

const threeWeeksAgo: DayEntry[] = [
  { date: "2026-05-11", dayOfWeek: "Monday", habits: partialHabits(["move", "water", "outside"]), mood: 3, energy: 3, hunger: 3, sleepHours: 7, flag: null },
  { date: "2026-05-12", dayOfWeek: "Tuesday", habits: partialHabits(["move", "screen-free", "water", "hunger"]), mood: 4, energy: 4, hunger: 3, sleepHours: 7.5, flag: null },
  {
    date: "2026-05-13",
    dayOfWeek: "Wednesday",
    habits: partialHabits(["screen-free", "hunger"]),
    mood: 2,
    energy: 2,
    hunger: 4,
    sleepHours: 5,
    journal:
      "Hard meeting in the morning. Anxiety lingered the whole day. Wanted to skip dinner but made myself eat something small. Did not feel easy.",
    flag: "concern",
  },
  { date: "2026-05-14", dayOfWeek: "Thursday", habits: partialHabits(["move", "water", "outside"]), mood: 3, energy: 4, hunger: 3, sleepHours: 7, flag: null },
  { date: "2026-05-15", dayOfWeek: "Friday", habits: partialHabits(["water", "hunger", "outside"]), mood: 4, energy: 4, hunger: 3, sleepHours: 7, flag: null },
  { date: "2026-05-16", dayOfWeek: "Saturday", habits: fullHabits, mood: 5, energy: 4, hunger: 3, sleepHours: 8, flag: null },
  {
    date: "2026-05-17",
    dayOfWeek: "Sunday",
    habits: fullHabits,
    mood: 4,
    energy: 4,
    hunger: 3,
    sleepHours: 8.5,
    journal: "Made breakfast slowly. Felt like myself for a moment. The kind of moment I want more of.",
    carolineResponse: "Those moments matter more than the meal does. Keep noticing them.",
    flag: null,
  },
];

const lastWeek: DayEntry[] = [
  { date: "2026-05-18", dayOfWeek: "Monday", habits: partialHabits(["move", "water", "outside"]), mood: 4, energy: 3, hunger: 3, sleepHours: 7, flag: null },
  { date: "2026-05-19", dayOfWeek: "Tuesday", habits: partialHabits(["move", "screen-free", "water", "hunger"]), mood: 4, energy: 4, hunger: 3, sleepHours: 7.5, flag: null },
  {
    date: "2026-05-20",
    dayOfWeek: "Wednesday",
    habits: partialHabits(["water", "hunger"]),
    mood: 2,
    energy: 2,
    hunger: 4,
    sleepHours: 5.5,
    journal:
      "On edge all day for no particular reason. Slept poorly the night before. Wanted to numb out with TV and food and mostly let myself. Hard day.",
    carolineResponse: "This is the third Wednesday like this. Worth holding up to the light together.",
    flag: "concern",
  },
  { date: "2026-05-21", dayOfWeek: "Thursday", habits: partialHabits(["move", "water", "outside"]), mood: 4, energy: 4, hunger: 3, sleepHours: 7, flag: null },
  { date: "2026-05-22", dayOfWeek: "Friday", habits: partialHabits(["water", "hunger", "outside"]), mood: 4, energy: 4, hunger: 3, sleepHours: 7.5, flag: null },
  { date: "2026-05-23", dayOfWeek: "Saturday", habits: fullHabits, mood: 5, energy: 5, hunger: 3, sleepHours: 8, flag: null },
  {
    date: "2026-05-24",
    dayOfWeek: "Sunday",
    habits: fullHabits,
    mood: 4,
    energy: 4,
    hunger: 3,
    sleepHours: 8,
    journal: "Long phone call with mom. Cooked while talking. Both felt good — different from food being a chore.",
    flag: null,
  },
];

export const fourWeekHistory: DayEntry[][] = [
  fourWeeksAgo,
  threeWeeksAgo,
  lastWeek,
  week,
];

export const messages: CarolineMessage[] = [
  {
    id: "m1",
    from: "caroline",
    date: "2026-05-31",
    text: 'Megan — read your Sunday reflection just now. "Something is loosening" is exactly the language I hoped you\'d find. None of it has been easy. We\'ll sit with this on Tuesday.',
    referencesDate: "2026-05-31",
  },
  {
    id: "m2",
    from: "caroline",
    date: "2026-05-28",
    text: "Saw your Wednesday entry. The cycle-day-1 cravings notice is huge — your body asked, you listened. That's the harder thing, not the easier one.",
    referencesDate: "2026-05-27",
  },
  {
    id: "m3",
    from: "client",
    date: "2026-05-27",
    text: "I felt like I 'failed' the carb thing today and then realized I was about to say that out loud. Catching it earlier, even on the hard days.",
  },
];

export const carolineCelebration = {
  text: "Twelve days of pausing for hunger before eating. None of those days were easy. That's the practice — quietly, slowly, real.",
  date: "2026-05-31",
};

export const carolinePatternCallout = {
  title: "Caroline noticed a pattern",
  text: "Wednesdays are consistently your harder days — energy low, sleep short, habits drift. That's three weeks now. Let's talk Tuesday about what we can put in place to meet Wednesdays differently, instead of bracing for them.",
};

export const rhythms = [
  { label: "days of noticing hunger before eating", value: 12 },
  { label: "weeks of consistent sleep (7+ hrs)", value: 3 },
  { label: "weeks since the last “I blew it” thought", value: 5 },
];

export const patternObservations = [
  "Energy follows habit days — about a day later.",
  "Mood lifts on days you spend 10+ minutes outside.",
  "Sleep dips before Wednesdays, every week.",
];

export function wellbeingScore(d: DayEntry) {
  return (d.mood + d.energy + Math.min(d.sleepHours, 9) / 1.8) / 3;
}

export function habitCompletionRate(d: DayEntry) {
  const total = habits.length;
  const done = habits.filter((h) => d.habits[h.id]).length;
  return done / total;
}
