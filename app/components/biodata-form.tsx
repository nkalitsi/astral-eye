'use client'

import { useState } from "react";

export default function BioDataForm(){

    const [name, setName] = useState("");
    const [response, setResponse] = useState("");
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstName = formData.get('firstName');

        if (typeof firstName === 'string'){
            setName(firstName);
        }
        const res = await fetch("/api/ping", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: firstName }),

        })
        const data = await res.json();
        setResponse(data.message);

   }
   

    return(<>
        <p>Biodata form</p>
        <form onSubmit={handleSubmit}>
            <input name="firstName" type="text" />
            <button type="submit">Submit</button>
        </form>
        { response && <p>{response}</p>}
        

    </>)
}