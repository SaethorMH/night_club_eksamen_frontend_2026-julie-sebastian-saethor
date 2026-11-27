"use client";
import type { SubmitEvent } from "react";
import Button from "@/app/components/global/Button";
import { InfoForms } from "@/app/formSchema/formSchema";
import { useState } from "react";
import { email } from "zod";

export default function BookingForm() {
  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [tableErrors, setTableErrors] = useState<string[]>([]);
  const [paxErrors, setPaxErrors] = useState<string[]>([]);
  const [dateErrors, setDateErrors] = useState<string[]>([]);
  const [phoneErrors, setPhoneErrors] = useState<string[]>([]);

  function handleSumit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = InfoForms.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      table: formData.get("table"),
      pax: formData.get("pax"),
      date: formData.get("date"),
      phone: formData.get("phone"),
    });

    if (!result.success) {
      const nameErrors = result.error.issues.filter((issue) => issue.path[0] === "name").map((issue) => issue.message);
      const emailErrors = result.error.issues.filter((issue) => issue.path[0] === "email").map((issue) => issue.message);
      const tableErrors = result.error.issues.filter((issue) => issue.path[0] === "table").map((issue) => issue.message);
      const paxErrors = result.error.issues.filter((issue) => issue.path[0] === "pax").map((issue) => issue.message);
      const dateErrors = result.error.issues.filter((issue) => issue.path[0] === "date").map((issue) => issue.message);
      const phoneErrors = result.error.issues.filter((issue) => issue.path[0] === "phone").map((issue) => issue.message);

      setNameErrors(nameErrors);
      setEmailErrors(emailErrors);
      setTableErrors(tableErrors);
      setPaxErrors(paxErrors);
      setDateErrors(dateErrors);
      setPhoneErrors(phoneErrors);

      console.log("Error:", result.error.issues[0]?.message);

      return;
    }

    {
      nameErrors.map((error, index) => (
        <p key={index} className="text-red-400 text-sm">
          {error}
        </p>
      ));
    }
    {
      emailErrors.map((error, index) => (
        <p key={index} className="text-red-400 text-sm">
          {error}
        </p>
      ));
    }

    {
      tableErrors.map((error, index) => (
        <p key={index} className="text-red-400 text-sm">
          {error}
        </p>
      ));
    }

    {
      paxErrors.map((error, index) => (
        <p key={index} className="text-red-400 text-sm">
          {error}
        </p>
      ));
    }
    {
      dateErrors.map((error, index) => (
        <p key={index} className="text-red-400 text-sm">
          {error}
        </p>
      ));
    }
    {
      phoneErrors.map((error, index) => (
        <p key={index} className="text-red-400 text-sm">
          {error}
        </p>
      ));
    }

    setNameErrors([]);
    setEmailErrors([]);
    setTableErrors([]);
    setPaxErrors([]);
    setDateErrors([]);
    setPhoneErrors([]);

    console.log("Zod resultat:", result.data.name);

    console.log("Booking data", Object.fromEntries(formData.entries()));
  }

  return (
    <section className=" bg-black bg-cover bg-center mx-auto w-full max-w-5xl px-6 py-10">
      <h2 className="font-bold py-5">Book a table</h2>

      <form onSubmit={handleSumit} noValidate className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-4 text-gray-600">
        <div className="grid grid-cols-1">
          <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" />
          {nameErrors && <p className="text-red-400 text-sm"> {nameErrors}</p>}
        </div>

        <div className="grid grid-cols-1">
          <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" />
          {emailErrors && <p className="text-red-400 text-sm"> {emailErrors}</p>}
        </div>
        <div className="grid grid-cols-1">
          <select name="table" defaultValue="">
            <option value="" disabled>
              Choose a table
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>

          {tableErrors && <p className="text-red-400 text-sm"> {tableErrors}</p>}
        </div>
        <div className="grid grid-cols-1">
          <input type="number" name="pax" placeholder="Number Of Guests" />
          {paxErrors && <p className="text-red-400 text-sm"> {paxErrors}</p>}
        </div>
        <div className="grid grid-cols-1">
          <input type="date" name="date" aria-label="Choose Night"  />

          {dateErrors && <p className="text-red-400 text-sm"> {dateErrors}</p>}
        </div>
        <div className="grid grid-cols-1">
          <input type="tel" name="phone" placeholder="Your Contact Number" aria-label="Your Contact Number" />

          {phoneErrors && <p className="text-red-400 text-sm"> {phoneErrors}</p>}
        </div>

        <textarea name="comment" placeholder="Your Comments" className="md:col-span-2" />
        <span></span>

        <div className=" flex flex-row place-self-end">
          <button type="submit">Reseve table</button>
        </div>
      </form>
    </section>
  );
}
