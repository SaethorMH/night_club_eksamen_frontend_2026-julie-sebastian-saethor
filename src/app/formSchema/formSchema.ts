import * as z from "zod";

export const InfoForms = z.object({
  yourName: z
    .string()
    .trim()
    .min(1, "Feltet må ikke være tomt")
    .regex(/^[\p{L} ]+$/u, "Use only letters and spaces in the recipe name."),
  yourEmail: z.email(),
  numberOfGuest: z.coerce.number().int("Use numbers only.").min(1, ""),
  yourContactNumber: z.string(),
  tableNumber: z.coerce.number().int("Use numbers only.").min(1, "").max(15, ""),
  chooseNight: z.iso.date(),
  comment: z.string(),
});
