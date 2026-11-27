"use client";
import type { SubmitEvent } from "react";
import { ContactForms } from "@/app/formSchema/formSchema";
import { email } from "zod";
import { useState } from "react";
import Button from "@/app/components/global/Button";
import { postContact } from "@/app/actions/actions";
import { fieldset } from "motion/react-client";

export interface contact {
  name: string;
  content: string;
  email: string;
  date: string;
}

export default function ContactForm() {
  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  function handleSumit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = ContactForms.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
    });

    if (!result.success) {
      const nameErrors = result.error.issues
        .filter((issue) => issue.path[0] === "name")
        .map((issue) => issue.message);
      const emailErrors = result.error.issues
        .filter((issue) => issue.path[0] === "email")
        .map((issue) => issue.message);

      setNameErrors(nameErrors);
      setEmailErrors(emailErrors);

      console.log("Error:", result.error.issues[0]?.message);

      return;
    }
    // {
    //   nameErrors.map((error, index) => (
    //     <p key={index} className="text-red-400 text-sm">
    //       {error}
    //     </p>
    //   ));
    // }
    // {
    //   emailErrors.map((error, index) => (
    //     <p key={index} className="text-red-400 text-sm">
    //       {error}
    //     </p>
    //   ));
    // }
    setNameErrors([]);
    setEmailErrors([]);

    console.log("Zod resultat:", result.data.name);

    console.log("comment data", Object.fromEntries(formData.entries()));

    const newContact: contact = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      content: formData.get("content") as string,
      date: Date(),
    };

    postContact(newContact);
  }

  return (
    <section className=" bg-black bg-cover bg-center mx-auto w-full max-w-5xl px-6 py-10">
      <form
        onSubmit={handleSumit}
        noValidate
        className="mx-auto w-full max-w-md flex flex-col "
      >
        <div className="grid grid-cols-1">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            className="input"
          />

          <div className="min-h-10 pt-1">
            {nameErrors && (
              <p className="text-red-400 text-sm"> {nameErrors}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="input"
          />
          <div className="min-h-10 pt-1">
            {emailErrors && (
              <p className="text-red-400 text-sm"> {emailErrors}</p>
            )}
          </div>
        </div>

        <textarea
          name="content "
          placeholder="Your Comments"
          className=" h-30 md:col-span-2 input"
        />

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className=" border-y  hover:cursor-pointer uppercase px-8 py-3 text-sm text-gray-400"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
