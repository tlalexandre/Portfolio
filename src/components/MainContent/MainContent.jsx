import { pageData } from "../pageData"
import Skills from "./Skills";

export default function MainContent ({currentPage, setHoveredSkill}) {
    const content = pageData[currentPage].content;
    const isImage = typeof content === 'string' && (content.includes('.jpeg') || content.includes('.jpg') || content.includes('.png') || content.includes('.gif'))
    console.log(pageData[currentPage].position)
    const displayContent = isImage ? 
        <img 
            src={content} 
            className="min-w-full min-h-full object-cover" 
            style={{ objectPosition: pageData[currentPage].position }} 
            alt="" 
        />:
        <div className='w-full'>
            <Skills skills={pageData[currentPage].content} currentPage={currentPage} setHoveredSkill={setHoveredSkill}/>
        </div>

    return(
        <div className="grid-area-image w-full flex justify-center  overflow-hidden">
            {displayContent}
        </div>
    )
}