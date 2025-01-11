import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const readableDate = (dateString: string): string => {
  const toDate = new Date(dateString);
  return format(toDate, "dd-MMMM-yyyy");
};
