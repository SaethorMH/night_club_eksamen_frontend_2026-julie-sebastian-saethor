"use client";
import type { SubmitEvent } from "react";
import Button from "@/app/components/global/Button";
import { InfoForms } from "@/app/formSchema/formSchema";
import { useState } from "react";
import { email } from "zod";
import Image from "next/image";
// import { Table1, Table2, Table3 } from "@/assets/table"

export default function BookingForm() {
  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [tableErrors, setTableErrors] = useState<string[]>([]);
  const [paxErrors, setPaxErrors] = useState<string[]>([]);
  const [dateErrors, setDateErrors] = useState<string[]>([]);
  const [phoneErrors, setPhoneErrors] = useState<string[]>([]);
  const [commentErrors, setCommentErrors] = useState<string[]>([]);
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
      const commentErrors = result.error.issues.filter((issue) => issue.path[0] === "comment").map((issue) => issue.message);
      // console.log("Approved guests:", result.data.pax);
      // console.log("Type:", typeof result.data.pax);

      setNameErrors(nameErrors);
      setEmailErrors(emailErrors);
      setTableErrors(tableErrors);
      setPaxErrors(paxErrors);
      setDateErrors(dateErrors);
      setPhoneErrors(phoneErrors);
      setCommentErrors(commentErrors);

      // nameIssue = result.error.issues.find(
      //   (issue) => issue.path[0] === "name"
      // );
      // setNameError(result.error.issues[0]?.message ?? "");
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
    {
      commentErrors.map((error, index) => (
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
    setCommentErrors([]);

    console.log("Zod resultat:", result.data.name);

    console.log("Booking data", Object.fromEntries(formData.entries()));
  }

  return (
    <section className=" bg-black bg-cover bg-center mx-auto w-full max-w-5xl px-6 py-10">
      <h2 className="font-bold py-5">Book a table</h2>

      <form onSubmit={handleSumit} noValidate>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" />
          {nameErrors && <p className="text-red-400 text-sm"> {nameErrors}</p>}

          <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" />
          {emailErrors && <p className="text-red-400 text-sm"> {emailErrors}</p>}

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
            {/* {tableErrors && <p className="text-red-400 text-sm"> {tableErrors}</p>} */}
          </select>
          {tableErrors && <p className="text-red-400 text-sm"> {tableErrors}</p>}

          <input type="number" name="pax" placeholder="Number Of Guests" />
          {paxErrors && <p className="text-red-400 text-sm"> {paxErrors}</p>}

          <input type="date" name="date" placeholder="Choose Night" aria-label="Choose Night" />
          {dateError && <p className="text-red-400 text-sm"> {dateError}</p>}

          <input type="tel" name="phone" placeholder="Your Contact Number" aria-label="Your Contact Number" />
          {phoneError && <p className="text-red-400 text-sm"> {phoneError}</p>}

          <textarea name="comment" placeholder="Your Comments" className="md:col-span-2" />
          {commentError && <p className="text-red-400 text-sm"> {commentError}</p>}
        </div>

        <div className="mt-4 flex justify-end">
          <button type="submit">Reseve table</button>
        </div>
      </form>
    </section>
  );
}
