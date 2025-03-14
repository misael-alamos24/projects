import stack_logo from '../../assets/stack_logo.png';
import { Facebook, Gmail, Linkedin } from './Media';
import './logo.css';

export default function Logo () {
    return (
        <div className='resp-nav start logo-div'>
        <div className='h-img'>
            <img src={stack_logo} alt='' height={'100%'}/>
        </div>

            <Nav/>
            <div className='flex width30 margin-auto center hrefs media' style={{border: ''}}>
                <div className='flex paddingx16'>
                    <a href="https://www.linkedin.com/in/santiago-alamos-servian" target='_blank' rel='noreferrer'>
                        <Linkedin/>
                    </a>
                </div>
                <div className='flex paddingx16'>
                    <a href="https://www.facebook.com/santiagomisael.alamosservian/" target='_blank' rel='noreferrer'>
                        <Facebook/>
                    </a>
                </div>
                <div className='flex paddingx16'>
                    <a href="mailto:santiagoalamos2000@gmail.com">
                        <Gmail/>
                    </a>
                </div>
            </div>
        </div>
    )
}

function Nav () {
    return (
        <div className='bold width30 margin-auto hrefs'>
             <div style={{margin: '0px 8px 8px'}}><a href="/" className='underlined-pointer'>Inicio</a></div>
             <div style={{margin: '0px 8px 8px'}}><a href="/Proyectos" className='underlined-pointer'>Proyectos</a></div>
            {/* <a href="/Contacto" className='underlined-pointer'>Contacto</a> */}
            {/* <span></span> */}
        </div>
    )
}
