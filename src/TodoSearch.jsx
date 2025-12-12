import './TodoSearch.css'
import React from 'react'

function TodoSearch() {
    // This is REACT STATE. It returns an array with two values:
    // 1) searchValue -> the current value of the state (read-only / immutable)
    // 2) setSearchValue -> The function used to update that state
    // We can also provide an initial state value; in this case, an empty string
    const [searchValue, setSearchValue] = React.useState('')

    console.log(`The user search is ${searchValue}`)
    return (
        <>
            <input
                placeholder='Search...'
                className='TodoSearch'
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
            />
        </>
    )
}

export {TodoSearch}