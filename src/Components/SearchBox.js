import React from 'react'

export const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                type="search"
                placeholder="Search for a robot..."
                className="pa3 ba b--green bg-lightest-blue"
                onChange={searchChange}/>
        </div>
    )
}
