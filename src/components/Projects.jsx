import './.css';
import '../styles/general.css';
import Project from './Project';
import { objectData } from '.';

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
        </div>
    )
}