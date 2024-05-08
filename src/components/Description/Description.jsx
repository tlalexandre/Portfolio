import { pageData } from "../pageData"

export default function Description({currentPage, hoveredSkill}){

    let description;
    if (currentPage === "Skills" && hoveredSkill) {
        description = pageData[currentPage].content[hoveredSkill].description;
    } else {
        description = pageData[currentPage].description;
    }

    let shortDescription = pageData[currentPage].shortDescription

    return (
        <div className="grid-area-desc flex items-center bg-slate-900">
            <div className="shortDescription flex flex-col items-center h-full justify-around w-1/3">
                {shortDescription}
            </div>
            <div className="w-2/3">
                <p className={"text-amber-400 text-[2.5em]" + (currentPage === "Home" ? " text-[6.4em] text-left" : "")}>
                    {description}
                </p>
            </div>
        </div>
    )
}