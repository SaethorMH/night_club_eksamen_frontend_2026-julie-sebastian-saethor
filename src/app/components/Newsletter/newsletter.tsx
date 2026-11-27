"use client";
import type { SubmitEvent } from "react";
import { NewsletterForms } from "@/app/formSchema/formSchema";
import { email } from "zod";
import { useState } from "react";
import Button from "@/app/components/global/Button";
import { postNewsletters } from "@/app/actions/actions";

export default function NewsLetter() {
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  async function handleSumit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;
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

    const ok = await postNewsletters(result.data.email);
    setMessage(ok ? "You're subscribed!" : "Could not subscribe (maybe already signed up).");
    if (ok) form.reset();
  }

  return (
    <section
      className=" bg-black bg-cover bg-center px-6 py-6
     g-6 flex flex-col items-center"
    >
      <div className="min-h-10 pt-1 flex flex-col text-center g-10">
        <h2 className="text-2xl"> Want the latest night club news</h2>
        <h3 className="text-base p-2">
          Subscribe to our newsletter and never miss an <span className="text-(--pink)">Event </span>
        </h3>
      </div>

      <form onSubmit={handleSumit} noValidate className="mx-auto w-full  flex flex-col p-10">
        <article className="flex flex-row gap-7 justify-center">
          <input type="email" name="email" placeholder="Enter Your Email" aria-label="Your Email" className=" border-b-2 border-0 indent-3 placeholder:text-(--white) w-120 " />

          <button type="submit" className=" border-y uppercase px-8 py-3 text-sm hover:cursor-pointer place-self-end text-(--white)">
            SUBSCRIBE
          </button>
      
        </article>
            <div className="min-h-10 pt-1">
            {emailErrors && <p className="text-red-400 text-sm place-self-start"> {emailErrors}</p>}
            {message && <p className="text-sm place-self-start">{message}</p>}
          </div>
      </form>
    </section>
  );
}
