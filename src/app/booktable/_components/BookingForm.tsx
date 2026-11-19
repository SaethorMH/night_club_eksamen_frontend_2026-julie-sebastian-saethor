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
    <section className="flex flex-col flex-2">
      <h2 className="font-bold">Book a table</h2>

      <form onSubmit={handleSumit} className="item-center">
        <input type="text" name="yourName" placeholder="Your Name" />

        <button type="submit" className="uppercase">
          Reseve
        </button>
      </form>
    </section>
  );
}
