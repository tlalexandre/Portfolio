import React from 'react';
import NavButton from "./NavButton"


export default function Nav({pages , handlePageChange, onMouseEnter, onMouseLeave}){

    return (
        <nav className='flex w-full justify-around items-center nav'>
            {pages.map((page, index)=>(
                <NavButton
                    key={index}
                    pageName={page}
                    onClick={()=> handlePageChange(page)}
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                />
            ))}
        </nav>
    )

}