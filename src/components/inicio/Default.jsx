import { useEffect, useState } from "react"

export default function Default () {
    let [z, setn] = useState(0);
    let n = 0;
    useEffect(()=>{
        console.log({z})
        return () => {
        //     z = 0;
            return setn(0)
        }
    }, [z])
    return (
        <div style={{border: '1px solid gray'}}>
            Default
            {/* <button onClick={()=>setn(z-1)}>-</button>
            <button onClick={()=>setn(z+1)}>+</button> */}
        </div>
    )
}