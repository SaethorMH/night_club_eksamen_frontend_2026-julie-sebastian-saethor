import * as z from "zod";

export const InfoForms = z.object({
  yourName: z
    .string()
    .trim()
    .min(1, "Fill this empty space")
    .regex(/^[\p{L} ]+$/u, "Use only letters and spaces."),
  yourEmail: z.email(),
  numberOfGuests: z.coerce.number().int("Use numbers only.").min(1, ""),
  yourContactNumber: z.string(),
  tableNumber: z.coerce.number().int("Use numbers only.").min(1, "").max(15, ""),
  chooseNight: z.iso.date(),
  comment: z.string(),
});
