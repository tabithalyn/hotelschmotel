export const CurrentSection = {
  Home: "home",
  Information: "information",
  Booking: "booking",
  Contact: "contact"
} as const;

type ObjectValues<T> = T[keyof T];
export type CurrentSection = ObjectValues<typeof CurrentSection>;
