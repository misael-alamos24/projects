import sudoqubs from '../assets/sudoqubs.png';
import js from '../assets/javascript.png';
import logo from '../logo.svg';
import redux from '../assets/redux.svg';
import css from '../assets/css.png'
import Tech from './techs/Techs';
import html from '../assets/html.webp';
import registros from '../assets/registros.png';
import relevamientos from '../assets/relevamientos.png';
import node from '../assets/node.png';
// import sequelize from '../assets/sequelize.png';
// import backend from '../assets/backend.png';
import sequelize_blueblack from '../assets/sequelize_blueblack.png';
import SQL from '../assets/SQL.png';
import canislupus from '../assets/canislupus.png';
import bunker_store from '../assets/bunkerstore.png';

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
    {
        projectname: 'Relevamientos de instalaciones',
        image: relevamientos,
        explanation: ', es una aplicación web, que tiene como objetivo centralizar textos, imágenes y respuestas binarias relativas al funcionamiento de las instalaciones y los equipos informáticos de cada sector de una empresa. La razón de haber sido creada esta app, o su razón de ser, obedece a consignas formuladas para conformar una prueba de ingreso laboral.',
        repo: 'https://github.com/santi-misael21/createreactapp',
        techs: 
            <div className='flex center padding16'>
                <Tech title={'HTML'} src={html}/>
                <Tech title={'CSS'} src={css}/>
                <Tech title={'JavaScript'} src={js}/>
                <Tech title={'React'} src={logo} spin/>
                <Tech title={'Redux'} src={redux} spin/>
                <Tech title={'Node'} src={node} spin/>
                {/* <Tech title={'Sequelize'} src={sequelize}/> */}
                {/* <Tech title={'Node Sequelize SQL'} src={backend}/> */}
                <Tech title={'Sequelize'} src={sequelize_blueblack}/>
                <Tech title={'SQL'} src={SQL}/>
            </div>,
        deploy: 'https://createreactapp-brown.vercel.app/',
    },
    {
        projectname: 'Canis Lupus',
        image: canislupus,
        explanation: ', es una aplicación web, que tiene como objetivo dar la posibilidad de publicar y reservar perros-lobo domésticos. La aplicación fue creada de manera minimalista para ser presentada a un posible cliente. Mas al no ser confirmada su realización, permaneció confeccionada de ese modo.',
        repo: 'https://github.com/santi-misael21/canislupus',
        deploy: 'https://canis-lupus.vercel.app/ejemplares',
        techs: 
            <div className='flex center padding16'>
                <Tech title={'HTML'} src={html}/>
                <Tech title={'CSS'} src={css}/>
                <Tech title={'JavaScript'} src={js}/>
                <Tech title={'React'} src={logo} spin/>
                <Tech title={'Redux'} src={redux} spin/>
            </div>,            
    },
    {
        projectname: 'Búnker Store',
        image: bunker_store,
        explanation: ', es un almacén virtual, que concentra el stock disponible del mismo, para que el cliente pueda realizar pedidos a domicilio mediante el sitio, también responsivo para un móvil.',
        repo: 'https://github.com/misael-alamos24/projects',
        techs: 
            <div className='flex center padding16'>
                <Tech title={'HTML'} src={html}/>
                <Tech title={'CSS'} src={css}/>
                <Tech title={'JavaScript'} src={js}/>
                <Tech title={'React'} src={logo} spin/>
                <Tech title={'Redux'} src={redux} spin/>
                <Tech title={'Node'} src={node} spin/>
                {/* <Tech title={'Sequelize'} src={sequelize}/> */}
                {/* <Tech title={'Node Sequelize SQL'} src={backend}/> */}
                <Tech title={'Sequelize'} src={sequelize_blueblack}/>
                <Tech title={'SQL'} src={SQL}/>
            </div>,
        deploy: 'https://bunker-store.vercel.app/',
    },
]; 
