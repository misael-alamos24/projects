// import React, { useState, useEffect } from "react";

import './project.css';
import '../styles/general.css';
import Project from './Project';
import { objectData } from '.';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => { 
//     console.log("Count has changed:", count);
//   }, [count]); 

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// };

export default function Projects () {

    return (
        <div className='projects'>
            
            <div className='title'> <b>Proyectos</b> </div>
            {objectData.map((o,i)=>
                <Project 
                    key={i}
                    projectname={o.projectname} 
                    explanation={o.explanation} 
                    deploy={o.deploy}
                    repo={o.repo}
                    image={o.image}
                    techsArray={o.techs}
                />
            )}
            {/* <Counter/> */}
        </div>
    )
}

