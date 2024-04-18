import React, {useState} from 'react';
import NavButton from "./NavButton"

const pages = ["Home", "About", "Projects", "Skills", "Contact"]

export default function Nav(){
    const [currentPage, setCurrentPage]= useState("Home")

    const handlePageChange = (pageName) => {
        setCurrentPage(pageName);
    }

    return (
        <div className="navContainer h-1/4 text-center bg-amber-400">
        <nav className='flex flex-col'>
            {pages.map((page, index)=>(
                currentPage !== page &&
                <NavButton
                    key={index}
                    pageName={page}
                    isActive={currentPage === page}
                    onClick={()=> handlePageChange(page)}
                />
            ))}
        </nav>
        <h1 className='uppercase tracking-widest w-full'>{currentPage}</h1>

        </div>
    )

}