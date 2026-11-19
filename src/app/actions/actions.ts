"use server";
import * as z from "zod";
import { InfoForms } from "../formSchema/formSchema";

export async function Forms(formData: FormData) {
  const yourName = formData.get("yourName");
  const yourEmail = formData.get("yourEmail");
  const tableNumber = formData.get("tableNumber");
  const numberOfGuest = formData.get("numberOfGuest");
  const chooseNight = formData.get("chooseNight");
  const yourContactNumber = formData.get("yourContactNumber");
  const comment = formData.get("comment");

  const validatedFields = InfoForms.safeParse({
    yourName,
    yourEmail,
    tableNumber,
    numberOfGuest,
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

  //   try {
  //     const response = await fetch("https://dummyjson.com/recipes/add", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         yourName: validatedFields.data.yourname,
  //         youremail: validatedFields.data.yourEmail,
  //         tableNumber: validatedFields.data.tableNumber,
  //         numberOfGuest: validatedFields.data.numberOfGuest,
  //         chooseNight: validatedFields.data.chooseNight,
  //         yourContactNumber: validatedFields.data.yourContactNumber,
  //         comment: validatedFields.data.comment,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }

  console.log("Booking approved", validatedFields.data);

  return {
    success: true,
    message: "Your info is approved.",
    fieldErrors: {},
  };
}

//  export default Forms;

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
