"use client";
import type { SubmitEvent } from "react";
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
          <input type="text" name="yourName" placeholder="Your Name" aria-label="Your Name" />

          <input type="email" name="yourEmail" placeholder="Your Email" aria-label="Your Email" />

          <input type="number" name="tableNumber" placeholder="Table Number" aria-label="Table Nuber" />

          <input type="number" name="numberOfGuests" placeholder="Number Of Guests" />

          <input type="date" name="chooseNight" placeholder="Choose Night" aria-label="Choose Night" />

          <input type="tel" name=" yourContactNumber" placeholder="Your Contact Number" aria-label="Your Contact Number" />

          <input type="text" name="comment" placeholder="Your Comments" className="md:col-span-2" />
        </div>

        <div className="mt-4 flex justify-end">
          <button type="submit">Reseve table</button>
        </div>
      </form>
    </section>
  );
}
