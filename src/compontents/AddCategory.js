import React, { useState } from 'react'
import ProTypes from 'prop-types'


export const AddCategory = ( { setCategories } ) => {
 
    const [InputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSummit = (e) => {
        e.preventDefault();

        if ( InputValue.trim().length > 2 ){
            setCategories( categories =>[ InputValue, ...categories ] );
            setInputValue('');
        }

        
    }

    return (
        <>
            <form onSubmit={ handleSummit }>
                <input
                    type="text"
                    value= { InputValue }
                    onChange={ handleInputChange}
                />
            </form> 
             
        </>
    )
}


AddCategory.proTypes = {
    setCategories: ProTypes.func.isRequired
}