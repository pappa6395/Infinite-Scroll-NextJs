"use server"

import { Recipes } from "@/types";

export async function fetchRecipes(limit: number) {
    const skip = 6;
    const apiUrl =`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        if (!data || !Array.isArray(data.recipes)) {
            console.error("Unexpected API response:", data);
            return []; // Return an empty array instead of undefined
          }
        return data.recipes as Recipes[];

    } catch (err) {
        console.error("Failed to fetch beers",err);
        return null;
    }
}