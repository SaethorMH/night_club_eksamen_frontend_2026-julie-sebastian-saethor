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

  console.log("yourName", yourName);
  console.log("yourEmail", yourEmail);
  console.log("tableNumber", tableNumber);
  console.log("numberOfGuest", numberOfGuest);
  console.log("chooseNight", chooseNight);
  console.log("yourContactNumber", yourContactNumber);
  console.log("comment", comment);

  const validatedFields = InfoForms.safeParse({
    yourName: yourName,
    yourEmail: yourEmail,
    tableNumber: tableNumber,
    numberOfGuest: numberOfGuest,
    chooseNight: chooseNight,
    yourContactNumber: yourContactNumber,
    comment: comment,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Kontrollér opskriftens navn",
      fieldErrors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  try {
    const response = await fetch("https://dummyjson.com/recipes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        yourName: validatedFields.data.yourname,
        youremail: validatedFields.data.yourEmail,
        tableNumber: validatedFields.data.tableNumber,
        numberOfGuest: validatedFields.data.numberOfGuest,
        chooseNight: validatedFields.data.chooseNight,
        yourContactNumber: validatedFields.data.yourContactNumber,
        comment: validatedFields.data.comment,
      }),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(`Response status: ${response.status}`);
    return { success: true, message: "Your table is book. We can't wait to party with you." };
  } catch (error) {
    return {
      success: false,
      message: "An error has occurred. Try again.",
      fieldErrors: {},
    };
  }
};

export default Forms;



export async function getAllEvents() {
  const response = await fetch(API_URL + "events");
  const data = await response.json();
  return data;
}
