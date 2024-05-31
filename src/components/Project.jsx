import github from '../assets/github_PNG.png';
import vercel from '../assets/vercel_PNG.png';

export default function Project ({projectname, image, explanation, deploy, repo, techsArray}) {
    return (
        <div className='square flex between margin8'>
            <div className='block width90 paddingx16'>
                <div className='project-name font-l'>{projectname}</div>
                    <a className="a" target='blank' href={deploy} title='Despliegue'>
                        <img src={image} height={'320px'} alt='' className='project-image'/>
                    </a>
            </div>
            <div className='right-box width90'>
                <div className='text-start padding16'>
                    <span className='project-name'>{projectname}</span>
                    <span>{explanation}</span>
                </div>
                <div className='project-name padding16'>
                    <code style={{border: '1px solid green', backgroundColor: 'rgb(8,8,8)', borderRadius: '99px', padding: '0px 8px', color: 'green'}}>Techs</code>
                    <div>
                        {techsArray}
                    </div>
                </div>
                <div className='padding16 paddingb0'>
                    <a className="a" target='blank' href={repo} title='Repositorio'>
                        <div className='div-button'>
                            <img src={github} height={'24px'} alt=''/>
                        </div>
                    </a>
                    <a className="a" target='blank' href={deploy} title='Despliegue'>
                        <div className='div-button'>
                            <img src={vercel} height={'24px'} alt=''/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}