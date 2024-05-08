import { pageData } from "../pageData";



export default function Skills({ skills, setHoveredSkill, currentPage }) {
  if(currentPage === "Skills"){

    return (
      <div className="grid grid-rows-3 grid-cols-5 h-full">
          {Object.entries(skills).map(([skillName, skillData]) => (
            <div 
            key={skillName}
            onMouseEnter={() => setHoveredSkill(skillName)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="p-5"
              >
                  <img src={skillData.svg} className="mb-2" alt={skillName} />
                  <p className="uppercase">{skillData.name}</p>
              </div>
          ))}
        </div>
    );
  }else if (currentPage === "Projects" || currentPage === "Contact") {
    return (
        <div>
            {pageData[currentPage].content}
        </div>
    );
}
}