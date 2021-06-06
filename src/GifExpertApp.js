import React, { useState } from 'react'
import { AddCategory } from './compontents/AddCategory'
import { GifGrid } from './compontents/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Dragon Ball Z']);

 
    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories= {setCategories } />
            <hr />

            <ol>
                { 
                    categories.map( category => (
                    // return <li key={ category }> { category }</li>
                        <GifGrid 
                        key= { category }
                        category={ category } 
                        /> 
                    ))
                }
            </ol>

        </>
    )
}