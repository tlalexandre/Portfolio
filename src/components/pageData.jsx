import DevImg from '../assets/developer.jpeg'
import HomeImg from '../assets/bg1.jpg'

import AboutImg from '../assets/KitchenChef.jpeg'

export const pageData = {
    Home: {
        content: HomeImg,
        position: 'center',
        description: `TANGUY L'ALEXANDRE`,
        shortDescription: 
            <>
                <span className="text-amber-400 text-[2.5em] ">Github</span>
                <span className="text-amber-400 text-[2.5em] ">Linkedin</span>
            </>
    },
    About: {
        content: AboutImg,
        position: 'top',
        description: 'Passionate junior Front-End Developer with a unique background in culinary arts and a fresh degree in Computer Science.',
        shortDescription:
            <>
                <span className="text-amber-400 text-[4.5em] uppercase">Who am I?</span>
            </>
    },
    // Skills: {
    //     content:{
    //             HTML:{
    //                 svg:HtmlLogo,
    //                 description:'HTML is the skeleton of every web page',
    //                 name: 'HTML'
    //             },
    //             CSS:{
    //                 svg:CSSLogo,
    //                 description:'CSS is the skeleton of every web page',
    //                 name: 'CSS'
    //             },
    //             JS:{
    //                 svg:JSLogo,
    //                 description:'JS is the skeleton of every web page',
    //                 name: 'JS'
    //             },
    //             Python:{
    //                 svg:PythonLogo,
    //                 description:'Python is the skeleton of every web page',
    //                 name: 'Python'
    //             },
    //             Git:{
    //                 svg:GitLogo,
    //                 description:'Git is the skeleton of every web page',
    //                 name: 'Git'
    //             },
    //             Tailwind:{
    //                 svg:TailwindLogo,
    //                 description:'Tailwind is the skeleton of every web page',
    //                 name: 'Tailwind'
    //             },
    //             JQuery:{
    //                 svg:JQueryLogo,
    //                 description:'JQuery is the skeleton of every web page',
    //                 name: 'JQuery'
    //             },
    //             Django:{
    //                 svg:DjangoLogo,
    //                 description:'Django is the skeleton of every web page',
    //                 name: 'Django'
    //             },
    //             Github:{
    //                 svg:GithubLogo,
    //                 description:'Github is the skeleton of every web page',
    //                 name: 'Github'
    //             },
    //             Bootstrap:{
    //                 svg:BootstrapLogo,
    //                 description:'Bootstrap is the skeleton of every web page',
    //                 name: 'Bootstrap'
    //             },
    //             React:{
    //                 svg:ReactLogo,
    //                 description:'React is the skeleton of every web page',
    //                 name: 'React'
    //             },
    //             PostGreSQL:{
    //                 svg:PostGreSQLLogo,
    //                 description:'PostGreSQL is the skeleton of every web page',
    //                 name: 'PostGreSQL'
    //             },
    //     },
    //     description: 'Hover on the differents technologies to discover more about them.',
    //     shortDescription:
    //                     <>
    //                         <p className="text-amber-400 text-[1.8em]">Skills Short Description</p>
    //                     </>
    // },
    Work:{
        content: DevImg,
        position: 'center',
        description: `Work`,
        shortDescription: 
            <>
                <span className="text-amber-400 text-[2.5em] ">Projects</span>
                <span className="text-amber-400 text-[2.5em] ">Here</span>
            </>
    },
    Contact:{
        content: HomeImg,
        position: 'center',
        description: `Work`,
        shortDescription: 
            <>
                <span className="text-amber-400 text-[2.5em] ">Projects</span>
                <span className="text-amber-400 text-[2.5em] ">Here</span>
            </>
    }
    // add more pages as needed
};