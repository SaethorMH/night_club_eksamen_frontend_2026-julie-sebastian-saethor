"use client";
import type { SubmitEvent } from "react";
import Button from "@/app/components/global/Button";
import { postComment } from "@/app/actions/actions";

export default function CommentsForm() {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log("Comment data", Object.fromEntries(formData.entries()));
  }

  return (
    <section className=" bg-black bg-cover bg-center mx-auto w-full max-w-5xl px-6 py-10">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-4 ">
          <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" className="input text-gray-400" />

          <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" className="input" />

          <textarea name="content" placeholder="Your Comments" className="h-30  md:col-span-2 input" aria-label="Your Comments" />
        </div>

        <div className="mt-4 flex justify-end">
          <button type="submit" className=" border-y uppercase px-8 py-3 text-sm text-gray-400">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
