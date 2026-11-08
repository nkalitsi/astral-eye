'use server'

import { ASTRO_API_URL } from "./config";

export async function generateChart(){

    const res = await fetch(`${ASTRO_API_URL}`, )
    return;
}