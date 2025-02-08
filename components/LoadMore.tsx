"use client"

import { Recipes } from '@/types'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Spinner from './ui/spinner'
import { fetchRecipes } from '@/actions/fetch-recipes'
import DummyRecipe from './DummyRecipe'
import delay from 'delay'

const LoadMore = () => {

    const [foodLoaded, setFoodLoaded] = useState<Recipes[]>([])
    const [pageLoaded, setPageLoaded] = useState(1)
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            console.log("scrolled to the end");
            loadMoreRecipes();
        }
    },[inView])

    const loadMoreRecipes = async () => {
        await delay(2000);
        const nextPage = pageLoaded + 1;
        const newRecipes = await fetchRecipes(nextPage) ?? [];
        if (!newRecipes || !Array.isArray(newRecipes)) {
            console.error("Unexpected API response:", newRecipes);
            return []; // Return an empty array instead of undefined
          }
      
        setFoodLoaded((prevRecipes: Recipes[]) => [...prevRecipes, ...newRecipes]);
        setPageLoaded(nextPage);
    }

  return (

    <>
        <DummyRecipe recipes={foodLoaded} />
        <div 
        className='flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3'
        ref={ref}
        >
            <Spinner />
        </div>
    </>

  )
}

export default LoadMore