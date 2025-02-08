import { fetchRecipes } from '@/actions/fetch-recipes';
import DummyRecipe from '@/components/DummyRecipe';
import LoadMore from '@/components/LoadMore';
import React from 'react'

const page = async() => {
    
  const recipes = await fetchRecipes(6) || []
    
  return (

    <div>
        <div className='grid justify-center mt-6'>
            <h2 className="scroll-m-20 text-center border-b pb-2 mb-4 text-3xl 
            font-semibold tracking-tight first:mt-0">
                Infinite Scroll
            </h2>
            <DummyRecipe recipes={recipes} />
            <div className=''>
              <LoadMore />
            </div>
        </div>
    </div>

  )
}

export default page