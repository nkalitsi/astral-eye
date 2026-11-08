'use client'

import { useState } from "react";
import { generateChart } from "../actions";
import { CityField } from "./city-field";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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
        <Card>
            <CardHeader>Your Info
                <CardDescription>Enter your info to reveal your chart</CardDescription>
            </CardHeader>
    
            <CardContent>
                <form action={generateChart}>
                    <Field>
                        <FieldLabel>Name</FieldLabel>
                        <Input name="firstName" type="text" required={true}/>
                    </Field>
                    <Field>
                        <FieldLabel>Birthday</FieldLabel>
                        <Input name="birthDay" type="date" required={true} />
                    </Field>
                    <Field>
                        <FieldLabel>Birth time</FieldLabel>
                        <Input name="birthTime" type="time" required={false} />
                    </Field>
                    <Field>
                        <FieldLabel>Birth City</FieldLabel>
                        <CityField></CityField>
                    </Field>

                    <Button type="submit">Submit</Button>
                </form>
            </CardContent>
        </Card>
        
        

    </>)
}