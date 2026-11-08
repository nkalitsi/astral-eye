'use client'

import { Input } from "@/components/ui/input";
import { debounce } from "../utility";

const debouncedSearch = debounce(searchCity, 400);

async function searchCity(str: string){
    return setTimeout(()=>{console.log("search City with delay")}, 500)
}


export function CityField(){ 

    return(
        <>
        <Input 
            name="city"
            type="text"
            placeholder="New York, NY"
            onChange={(e)=>debouncedSearch(e.target.value)}
            />
        </>
    );
}