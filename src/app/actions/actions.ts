// "use server";
// import * as z from "zod";

// const postInfoForms = async (previousState, formData) => {
//   const yourName = formData.get("yourName");
//   const yourEmail = formData.get("yourEmail");
//   const tableNumber = formData.get("tableNumber");
//   const numberOfGuest = formData.get("numberOfGuest");
//   const chooseNight = formData.get("chooseNight");
//   const yourContactNumber = formData.get("yourContactNumber");
//   const comment = formData.get("comment");

//   console.log("yourname", yourName);
//   console.log("yourEmail", yourEmail);
//   console.log("tableNumber", tableNumber);
//   console.log("numberOfGuest", numberOfGuest);
//   console.log("chooseNight", chooseNight);
//   console.log("yourContactNumber", yourContactNumber);
//   console.log("comment", comment);

//   const validatedFields = InfoForms.safeParse({
//     yourname: yourName,
//     yourEmail: yourEmail,
//     tableNumber: tableNumber,
//     numberOfGuest: numberOfGuest,
//     chooseNight: chooseNight,
//     yourContactNumber: yourContactNumber,
//     comment: comment,
//   });

//   if (!validatedFields.success) {
//     return {
//       success: false,
//       message: "Kontrollér opskriftens navn",
//       fieldErrors: z.flattenError(validatedFields.error).fieldErrors,
//     };
//   }

//   try {
//     const response = await fetch("https://dummyjson.com/recipes/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: validatedFields.data.recipename,
//         ingredients: validatedFields.data.ingredients
//           .split(",")
//           .map((info) => info.trim())
//           .filter(Boolean),

//         difficulty: validatedFields.data.difficulty,

//         prepTimeMinutes: validatedFields.data.prepTimeMinutes,

//         // cookTimeMinutes: validatedFields.data.cookTimeMinutes
//         //   .split(",")
//         //   .map((cookTimeMinutes) => cookTimeMinutes.trim())
//         //   .filter(Number),

//         servings: validatedFields.data.servings,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     console.log(`Response status: ${response.status}`);
//     return { success: true, message: "Opskriften blev oprettet. Hurra!!!!" };
//   } catch (error) {
//     return {
//       success: false,
//       message: "Der er desværre sket en fejl. Prøv igen senere",
//       fieldErrors: {},
//     };
//   }
// };

// export default InfoForms;

import { API_URL } from "@/config";

export async function getAllEvents() {
  const response = await fetch(API_URL + "events");
  const data = await response.json();
  return data;
}
