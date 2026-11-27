"use server";
import * as z from "zod";
import { InfoForms } from "../formSchema/formSchema";

export async function Forms(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const table = formData.get("table");
  const pax = formData.get("pax");
  const date = formData.get("date");
  const phone = formData.get("phone");

  const validatedFields = InfoForms.safeParse({
    name,
    email,
    table,
    pax,
    date,
    phone,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Check information is entered correctly",
      fieldErrors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  console.log("Booking approved", validatedFields.data);

  return {
    success: true,
    message: "Your info is approved.",
    fieldErrors: {},
  };
}

export default Forms;

// export async function getAllEvents() {
//   const response = await fetch(API_URL + "events");
//   const data = await response.json();
//   return data;
// }

import { API_URL } from "@/config";

export async function getAllEvents() {
  const response = await fetch(API_URL + "events");
  const data = await response.json();
  return data;
}
export async function getPaginatedEvents(page: number) {
  const response = await fetch(API_URL + "events?_page=" + page + "&_limit=3");
  const data = await response.json();
  return data;
}

export async function getOneEvent(slug: string) {
  const response = await fetch(API_URL + "events/" + slug);
  const data = await response.json();
  return data;
}
export async function getComments(id: number = 1) {
  const response = await fetch(API_URL + "comments?eventId=" + id);
  const data = await response.json();
  return data;
}
export async function getTestimonials() {
  const response = await fetch(API_URL + "testimonials");
  const data = await response.json();
  return data;
}
export async function getNewsletters() {
  const response = await fetch(API_URL + "newsletters");
  const data = await response.json();
  return data;
}
export async function postNewsletters(email: string) {
  const response = await fetch(API_URL + "newsletters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });
  return response.ok;
}
export async function postComment(comment: {
  name: string;
  eventId: number;
  content: string;
  date: string;
}) {
  const response = await fetch(API_URL + "comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventId: comment.eventId,
      name: comment.name,
      content: comment.content,
      date: comment.date,
    }),
  });
  return response.ok;
}
