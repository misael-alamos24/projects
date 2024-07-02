import { 
    // useEffect, 
    useRef, useState } from "react"

// function counter () {
//     let a = 0
//     return function () {
//         return a+=1
//     }
// }

// let inc = counter();
// //
// let items = [];

// function addItem(item) {
//   items.push(item);
//   return items;
// }

export default function Default () {

    let [z, setn] = useState(0);
    let r = useRef(0); // console.log({r: r.current, l: r.current.length, z})
    // r.current = z === 5 ? z : 0; 9.log({r})
    // let n = 0;
    // useEffect(()=>{
    //     console.log({z})
    //     return () => {
    //     //     z = 0;
    //         return setn(0)
    //     }
    // }, [z])
    return (
        <div style={{border: '1px solid gray'}}>
            Default
            <button onClick={()=>setn(z-1)}>-</button>
            <button onClick={()=>setn(z+1)}>+</button>
            {/* <button onClick={()=>r.current = 10}>r: 10</button> */}
            {r && r.current === 5? 'es 5' : r.current}
        </div>
    )
}