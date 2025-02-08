"use client"

import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Recipes } from '@/types'
import Image from 'next/image'
  
export interface RecipeProps {
    recipes: Recipes[] | null
}


const DummyRecipe = ({recipes}: RecipeProps ) => {


  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-4'>
        {recipes ? (
            recipes.map((recipe, index) => {
                return (
                    <Card key={index} className='w-64'>
                        <CardHeader>
                            <CardTitle>{recipe.name}</CardTitle>
                            <CardDescription className='line-clamp-3'>
                            {recipe.instructions}
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <Image 
                                    src={recipe.image} 
                                    alt={recipe.name} 
                                    width={250} 
                                    height={300}
                                    className='w-50 h-60' 
                                />
                                <h3 className='pt-2 text-lg font-bold'>Ingredients:</h3>
                                <p className='line-clamp-4 overflow-scroll'>{recipe.ingredients}</p>
                            </div>
                        </CardContent>
                    </Card>
                )
            })
        ) : (
            <p>No recipes found</p>
        )}
        
    </div>
  )
}

export default DummyRecipe