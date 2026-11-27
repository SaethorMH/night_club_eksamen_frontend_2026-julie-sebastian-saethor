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
    <section className="col-[content] py-20">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-4 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
          />

          <textarea
            name="content"
            placeholder="Your Comments"
            className="h-30  md:col-span-2"
            aria-label="Your Comments"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className=" border-y uppercase px-8 py-3 text-sm text-gray-400"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
