import React from 'react';

export default function NavButton({pageName, onClick, onMouseEnter, onMouseLeave}){

    
    return (
        <button 
            onClick={onClick} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            className='uppercase md:text-xl h-1/5'
        >
            {pageName}
        </button>
    )
}