"use client";
import type { SubmitEvent } from "react";
import Button from "@/app/components/Button";

export default function ContactForm() {
  function handleSumit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log("Contact data", Object.fromEntries(formData.entries()));
  }

  return (
    <section className=" bg-black bg-cover bg-center mx-auto w-full max-w-5xl px-6 py-10">
      <form onSubmit={handleSumit} noValidate>
        <div className="grid grid-cols-1 gap-4 ">
          <input type="text" name="yourName" placeholder="Your Name" aria-label="Your Name" className="border-gray-400 border text-sm p-3 " />

          <input type="email" name="yourEmail" placeholder="Your Email" aria-label="Your Email" className="border-gray-400 border text-sm p-3 " />

          <input type="text" name="comment" placeholder="Your Comments" className="border-gray-400 h-30 border text-sm p-3  md:col-span-2" />
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
