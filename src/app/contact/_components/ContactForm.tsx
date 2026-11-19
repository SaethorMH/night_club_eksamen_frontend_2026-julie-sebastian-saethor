"use client";
import { Forms } from "@/app/actions/actions";
// import { useActionState } from "react";
import { useState } from "react";

 export const Forms = () => {
//   const [state, postInfoAction, isPending] = useActionState(InfoForms, {
//     success: null,
//     message: "",
//     fieldErrors: {},
//   });

  const [formFields, setFormFields] = useState({
yourName: "",
    yourEmail: "",
    tableNumber: "",
    numberOfGuest: "",
    chooseNight: "",
    yourContactNumber: "",
    comment: "",
  });

  function handleChange(event) {
   const { name, value } = event.target;
 

      setFormFields((currentFields) => ({
        ...currentFields,
        // [name]: value,
      }));
    // }
  // }






  
  return (
    <>
    <section>

<form action={InfoForms} noValidate>
<h2>Book a table</h2>

<article  className="grid grid-cols-2
g-2">
<p>Your Name </p>
<p>Your Email valider med skal have '@' og '.'</p>
<p>Table Number</p>
<p> Number og Guests</p>
<p> Choose Night // *kalender menu? **//</p>
<p> Your Comment</p>

</article>


</form>
    </section>


    </>
     );
};

export default Forms;