import sudoqubs from '../assets/sudoqubs.png';
import js from '../assets/javascript.png';
import logo from '../logo.svg';
import redux from '../assets/redux.svg';
import css from '../assets/css.png'
import Tech from './techs/Techs';
import html from '../assets/html.webp';
import registros from '../assets/registros.png';

export let objectData = [
    {
        projectname: 'Sudoqubs',
        image: sudoqubs,
        techs: 
            <div className='flex center padding16'>
                <Tech title={'JavaScript'} src={js}/>
                <Tech title={'CSS'} src={css}/>
                <Tech title={'React'} src={logo} spin/>
                <Tech title={'Redux'} src={redux} spin/>
            </div>,
        explanation: ' es una aplicación para generar sudokus, con la particularidad de que pueden ser creados sudokus de diferentes tamaños, desde 4 x 4 (16 casilleros), hasta 25 x 25 (625 casilleros).',
        repo:"https://github.com/misael-alamos24/sudoqubs",
        deploy:"https://sudo-qubs-misael-alamos-projects.vercel.app/",
    },
    {
        projectname: 'Generador de Registros',
        image: registros,
        explanation: ', es una app web para registrar datos en forma de tabla. Para crearla se usó solamente JavaScript y HTML.',
        repo: 'https://github.com/misael-alamos24/registroprecios',
        techs: 
            <div className='flex center padding16'>
                <Tech title={'HTML'} src={html}/>
                <Tech title={'Vanilla JavaScript'} src={js}/>
                <Tech title={'CSS'} src={css}/>

            </div>,
        deploy: 'https://registro-precios-misael-alamos-projects.vercel.app/',
    },
];