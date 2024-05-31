export default function Tech ({title, src, spin}){
    return (
        <div title={title}>
            <img src={src} height={'48px'} alt='' className={spin? "App-logo" : ""}/>
        </div>
    )
}

// export default function Techs ({techs}) {
//     return (
//         <div className='flex center padding16'>
//             {techs.map((t,i)=> <Tech title={t.title}/>)}
//{/* <div title='CSS'>
//<img src={css} height={'48px'} alt=''/>
//</div>
//<div title='JavaScript'>
//<img src={js} height={'48px'} alt=''/>
//</div>
//<div title='React'>
//<img src={logo} height={'48px'} width={''} className="App-logo" alt=""/>
//</div>
//<div title='Redux'>
//<img src={redux} height={'48px'} alt=''/>
//</div> */}
//         </div>
//     )
// }