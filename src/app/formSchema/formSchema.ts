import * as z from "zod";

export const InfoForms = z.object({
  name: z
    .string()
    .trim()
    .regex(/^[\p{L} ]+$/u, "Use only letters and spaces. ")
    .min(2, "Use at least 2 letters."),
  email: z.email("Please enter a valid email address"),
  table: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], {
    message: "Choose a table",
  }),
  pax: z.coerce.number().int("Please enter a whole number.").min(1, "There must be at least 1 guest"),
   phone: z.string().trim().min(8, "Use a phone number, at least 8 digits"),
   date: z.iso.date(),

});
