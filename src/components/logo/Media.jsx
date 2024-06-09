import { useState } from 'react';
import linkedin from '../../assets/linkedin.png';
import linkedin_black from '../../assets/linkedin_black.png';
import facebook from '../../assets/facebook.png';
import facebook_black from '../../assets/facebook_black.png';
import gmail from '../../assets/gmail.png';

export function Linkedin () {
    let [li, setLi] = useState(0);
    return (
        <img className='pointer' height={'24px'} src={li? linkedin : linkedin_black} alt='linkedin' onMouseEnter={()=>setLi(1)} onMouseLeave={()=>setLi(0)} title='LinkedIn'/>
    )
}

export function Facebook () {
    let [fb, setFb] = useState(0);
    return (
        <img className='pointer' height={'24px'} src={fb? facebook : facebook_black} alt='facebook' onMouseEnter={()=>setFb(1)} onMouseLeave={()=>setFb(0)} title='Facebook'/>
    )
}

export function Gmail () {
    // let [gm, setGm] = useState(0);
    return (
        <img className='pointer gmail' height={'24px'} src={gmail} alt='gmail' title='Gmail'/>
    )
}

