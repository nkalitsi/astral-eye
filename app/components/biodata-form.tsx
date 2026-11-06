'use client'

import { useState } from "react";

export default function BioDataForm(){

    const [name, setName] = useState("");
    const handleSubmit = (e: any) => {
    e.preventDefault();
    setName(e.target);
   }

    return(<>
        <p>Biodata form</p>
        <form onSubmit={handleSubmit}>
            <input name="firstName" type="text" />
            <button type="submit">Submit</button>
        </form>
        

    </>)
}