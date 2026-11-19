"use client";
import type { SubmitEvent } from "react";

import { useState } from "react";
import { useActionState } from "react";
import Button from "@/app/components/Button";

export default function BookingForm() {
  function handleSumit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log("Booking data", Object.fromEntries(formData.entries()));
  }

  return (
    <section className=" bg-black bg-cover bg-center mx-auto w-full max-w-5xl px-6 py-10">
      <h2 className="font-bold py-5">Book a table</h2>

      <form onSubmit={handleSumit} noValidate>
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input type="text" name="yourName" placeholder="Your Name" aria-label="Your Name" className="border-gray-400 border text-sm p-3 " />

        <input type="email" name="yourEmail" placeholder="Your Email" aria-label="Your Email" className="border-gray-400 border text-sm p-3 " />

        <input type="number" name="tableNumber" placeholder="Table Number" aria-label="Table Nuber" className="border-gray-400 border text-sm p-3 " />
          <input type="number" name="numberOfGuests" placeholder="Number Of Guests" className="border-gray-400 border text-sm p-3 " />



        <input type="date" name="chooseNight" placeholder="Choose Night"  aria-label="Choose Night" className="border-gray-400 border text-sm p-3" />


        <input type="tel" name=" yourContactNumber" placeholder="Your Contact Number" aria-label="Your Contact Number" className="border-gray-400 border text-sm p-3" />



      
        <input type="text" name="comment" placeholder="Your Comments"  className="border-gray-400 h-30 border text-sm p-3  md:col-span-2"
            />
</div>

<div className="mt-4 flex justify-end">
        <button type="submit" className=" border uppercase px-8 py-3 text-sm text-gray-400">
          Reseve
        </button>
        </div>
      </form>
    </section>
  );
}
