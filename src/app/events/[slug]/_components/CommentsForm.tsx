"use client";
import type { SubmitEvent } from "react";
import Button from "@/app/components/global/Button";
import { postComment } from "@/app/actions/actions";

export interface comment {
  name: string;
  eventId: number;
  content: string;
  date: string;
}
type Props = {
  id: number;
};

export default function CommentsForm({ id }: Props) {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log("Comment data", Object.fromEntries(formData.entries()));

    const newComment: comment = {
      name: formData.get("name") as string,
      eventId: id,
      content: formData.get("content") as string,
      date: Date(),
    };
    postComment(newComment);
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
            className="input text-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="input"
          />

          <textarea
            name="content"
            placeholder="Your Comments"
            className="h-30  md:col-span-2 input"
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
