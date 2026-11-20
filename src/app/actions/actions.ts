"use server";
import * as z from "zod";
import { InfoForms } from "../formSchema/formSchema";

export async function Forms(formData: FormData) {
  const yourName = formData.get("yourName");
  const yourEmail = formData.get("yourEmail");
  const tableNumber = formData.get("tableNumber");
  const numberOfGuests = formData.get("numberOfGuests");
  const chooseNight = formData.get("chooseNight");
  const yourContactNumber = formData.get("yourContactNumber");
  const comment = formData.get("comment");

  const validatedFields = InfoForms.safeParse({
    yourName,
    yourEmail,
    tableNumber,
    numberOfGuests,
    chooseNight,
    yourContactNumber,
    comment,
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
