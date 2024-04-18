import React from 'react';

export default function NavButton({pageName, isActive, onClick}){
    return (
        <button onClick={onClick} className={"py-0 uppercase w-1/3 mx-auto bg-amber-400"+(isActive ? "active" : "")}>
            {pageName}
        </button>
    )
}