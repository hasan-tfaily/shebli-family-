export const counters = [
  {
    value: 15,
    label: "Years experiences",
  },
  {
    value: 3600,
    label: "city",
  },
  {
    value: 900,
    label: "Project completed",
  },
];

// types (optional)
type Counter = { value: number; label: string; suffix?: string; noPlus?: boolean };

export const counters2: Counter[] = [
  { value: 10, label: "cities" },
  { value: 5, label: "visits", suffix: " M" }, // → 5 M
  { value: 200, label: "school partners" },
];



export const counters4 = [
  {
    value: 20,
    label: "Years experiences",
  },
  {
    value: 125,
    label: "Total Expert",
  },
  {
    value: 886,
    label: "Project completed",
  },
  {
    value: 1842,
    label: "Happy customers",
  },
];

export const counters3 = [
   
  {
    value: 10,
    label: "cities",
  },
  {
    value: 5,
    label: "visits",
    suffix: "M",
  },
  {
    value: 500,
    label: "school partners",
  },
  // {
  //   value: 40,
  //   label: "Awards &amp;<br />Recognitions",
  // },
];
