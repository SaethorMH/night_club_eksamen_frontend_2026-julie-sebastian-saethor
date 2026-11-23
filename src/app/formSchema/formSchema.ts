import * as z from "zod";

export const InfoForms = z.object({
  name: z.string().trim().min(2, "Fill this empty space")
  .regex(/^[\p{L} ]+$/u, "Use only letters and spaces."),
  // email: z.email(),
  // pax: z.coerce.number().int("Use numbers only.").min(1, ""),
  // phone: z.string().trim(),
  // table: z.coerce.number().int("Use numbers only.").min(1, "").max(15, ""),
  // date: z.iso.date(),
  // comment: z.string(),
});
