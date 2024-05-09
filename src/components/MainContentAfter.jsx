import vannes from "../assets/vannes.jpg"

export default function MainContentAfter() {
  return (
    <div className="mainContentAfter flex">
        <img className="hiddenHeroImg shadow-xl" src={vannes} alt="" />
        <div className="clueContainer text-center">
            <p>Trying to find out everything about me <br /><strong className="text-[2.1em]">?</strong></p>
            <br />
            <p>Check the different pages for clues!</p>
        </div>
    </div>
  );
}