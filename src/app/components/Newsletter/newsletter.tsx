"use client";
import type { SubmitEvent } from "react";
import { NewsletterForms } from "@/app/formSchema/formSchema";
import { email } from "zod";
import { useState } from "react";
import Button from "@/app/components/global/Button";

export default function NewsLetter() {
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  function handleSumit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = NewsletterForms.safeParse({
      email: formData.get("email"),
    });

    if (!result.success) {
      const emailErrors = result.error.issues.filter((issue) => issue.path[0] === "email").map((issue) => issue.message);

      setEmailErrors(emailErrors);
      // console.log("Error:", result.error.issues[0]?.message);
      return;
    }

    {
      emailErrors.map((error, index) => (
        <p key={index} className="text-red-400 text-sm">
          {error}
        </p>
      ));
    }

    setEmailErrors([]);
    // console.log("Zod resultat:", result.data.email);
    // console.log("Email", Object.fromEntries(newsletterForms.entries()));
  }

  return (
    <section className=" bg-black bg-cover bg-center mx-auto w-full max-w-5xl px-6 py-10  g-6 flex flex-col items-center">
      <div className="min-h-10 pt-1 flex flex-col text-center g-10">
        <h2 className="md:text-sm"> Want the latest night club news</h2>
        <h3 className="text-sm">
          Subscribe to our newsletter and never miss an <span className="text-(--pink)">Event </span>
        </h3>
      </div>

      <form onSubmit={handleSumit} noValidate className="mx-auto w-full max-w-md flex flex-col gap-4">
        <div className="grid grid-cols-1">
          <input type="email" name="email" placeholder="Enter Your Email" aria-label="Your Email" className=" border-y-0 border" />
          <div className="min-h-10 pt-1">{emailErrors && <p className="text-red-400 text-sm"> {emailErrors}</p>}</div>
          <div className=" flex flex-row place-self-end">
            <button type="submit" className=" border-y uppercase px-8 py-3 text-sm text-gray-400">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
