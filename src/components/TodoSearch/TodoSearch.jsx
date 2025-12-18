import './TodoSearch.css'
import React from 'react'

function TodoSearch(
    {
        searchValue,
        setSearchValue
    }) {
    return (
        <>
            <input
                placeholder='Search...'
                className='TodoSearch'
                // The input value is controlled by the state (searchValue)
                value={searchValue}
                // When the user types, we update the state with the new value
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
            />
        </>
    )
}

export {TodoSearch}