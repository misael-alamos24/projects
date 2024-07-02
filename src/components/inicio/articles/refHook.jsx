import { useEffect, useRef, useState } from "react";
import useref from '../../../assets/useRef.png';

export default function RefHook () {
    
    // let [one, setOne] = useState(1);
    let initialValue = <span style={{color:'rgb(200,100,100)'}}>'valorInicial'</span>
    let letRef = <code><span style={{color: 'rgb(24,96,188)'}}>let</span> <span style={{color: 'rgb(64,192,224)'}}>ref</span></code>
    let theRef = <code><span style={{color: 'rgb(64,192,224)'}}>ref</span></code>
    let refCurrent = <code ><span style={{color: 'rgb(64,192,224)'}}>ref<span style={{color: 'white'}}>.</span>current</span></code> 
    let aValue = (v) => <code><span style={{color:'rgb(200,100,100)'}}>{v}</span></code>
    let borderCode = (inner) => <code style={{backgroundColor: 'rgb(20,20,20)', borderRadius: '8px', padding: '2px'}}>{inner}</code>
    let blueKeys = (inner) => <><span style={{color: 'rgb(24,96,188)'}}>{'{'}</span>{inner}<span style={{color: 'rgb(24,96,188)'}}>{'}'}</span></>

    let ref = useRef(0); 

    // const change = (boolean) => {
    //     if (boolean) {setOne(one+1); ref.current = 10}
    //     if (!boolean) {setOne(one-1); ref.current = 5}
    // }

    // useEffect(()=>{
    //     console.log(ref.current)
    // }, [ref])

    return (
        <div>
            <b className="serif">Hooks / useRef</b>
            <div className="flex between">
                <div className="width100 padding8">
                    <img src={useref} alt="useref" width={'100%'}/>
                </div>
                {/* Esto significa que el valor que devuelva useRef(valorInicial), será guardado en una variable que referencia o <i>apunta</i>  */}
                <div className="center-start width100 padding8">
                    {/* Me propuse escribir sobre la funcionalidad, usos y ejemplos de uso de algunos hooks.<br/>
                    Opté empezar con useRef porque era uno que aún no conocía. <br/>
                    De manera tal, de aprender algo nuevo y reforzar ese aprendizaje explicando sus conceptos.
                    <br />
                    <br /> */}
                    {/* Vamos a ir analizando la explicación de la documentación de React y re-explicarla de manera más detenida y aterrizada.
                    <br />
                    <br /> */}
                    Sintaxis declarativa: <br />
                    <code><span style={{color: 'rgb(24,96,188)'}}>let</span> <span style={{color: 'rgb(64,192,224)'}}>ref</span> = <span style={{color: 'rgb(192,192,128)'}}>useRef</span><span style={{color: 'magenta'}}>(</span><span style={{color:'rgb(200,100,100)'}}>'valorInicial'</span><span style={{color: 'magenta'}}>)</span>;</code>
                    <br />
                    <br />
                    La explicación introductoria de la documentación oficial de React define este hook de la siguiente forma: <br /><i>"<b style={{color: 'orange', fontSize: '10px'}}>(1)</b> <u style={{textDecorationColor: 'orange'}}>useRef es un Hook de React que te permite referenciar un valor </u><b style={{color: 'greenyellow', fontSize: '10px'}}>(2)</b> <u style={{textDecorationColor: 'greenyellow'}}>que no es necesario para el renderizado."</u></i> <br />
                    <br />
                    Esto significa que el valor que introduzcamos como parámetro {borderCode(initialValue)}, será almacenado por {borderCode(letRef)}, con las siguientes particularidades:
                    <br/>                    <br/>
                    

                    {/* Teniendo en cuenta que <code style={{color: 'rgb(192,192,128)'}}>useRef<span style={{color: 'magenta'}}>()</span></code>, solo recibe un parámetro <code style={{color:'rgb(200,100,100)'}}>valorInicial</code>, aquella explicación significa, que el valor inicial que nosotros le demos a <code style={{color: 'rgb(192,192,128)'}}>useRef<span style={{color: 'magenta'}}>(<code style={{color:'rgb(200,100,100)'}}>'aquí'</code>)</span></code>, sea de tipo string, number, boolean, u object, será guardado en una variable que prevalecerá sin importar cuántas veces el componente se vuelva a renderizar.
                    <br />
                    <br />
                    <code><span style={{color: 'rgb(24,96,188)'}}>let</span> <span style={{color: 'rgb(64,192,224)'}}>ref</span> = <span style={{color: 'rgb(192,192,128)'}}>useRef</span><span style={{color: 'magenta'}}>(</span><span style={{color:'rgb(200,100,100)'}}>'valorInicial'</span><span style={{color: 'magenta'}}>)</span>;</code>
                    <br />
                    <br />
                    Además, a esta variable <code style={{color: 'rgb(64,192,224)'}}>ref</code>, se le puede cambiar el valor pasado como <code style={{color:'rgb(200,100,100)'}}>valorInicial</code>, mutando su propiedad <code style={{color: 'rgb(64,192,224)'}}>current</code>, así: <code style={{color: 'rgb(64,192,224)'}}>ref.current</code> = <code style={{color:'rgb(200,100,100)'}}>'otroValor'</code> */}
                </div>
            </div>
            <div style={{textAlign: 'start', padding: '0 16px'}}>
                    <b style={{color: 'orange'}}>1.</b> La única forma de mutar el valor de {borderCode(letRef)}, es mutando su propiedad {borderCode(refCurrent)}, de la siguiente forma: <br /> 
                    {borderCode(<>{refCurrent} = {aValue("'otroValor'")}</>)}
                    {/* <br/> 
                    No así:
                    <br/>                      
                    {borderCode(<span style={{textDecoration: 'line-through'}}>{theRef} = {aValue("'otroValor'")}</span>)} */}
                    <br/>                    <br/>
                    <b style={{color: 'greenyellow'}}>2.</b> La acción de realizar dicha mutación, no volverá a renderizar el componente, por más que {borderCode(<>{blueKeys(refCurrent)}</>)} se esté desplegando en el browser (pantalla del navegador).

                    <br />
                    <br />
                    Usar este Hook tiene la particularidad y la ventaja de que podemos guardar un valor tomado en la primera carga del componente y tenerlo almacenado a pesar de que el valor original tal vez haya cambiado posteriormente a la primera carga de nuestro componente. 
                    <br />
                    <br />
                    Además, logramos tener persitencia de datos que cumplen funciones únicamente lógicas (no visuales) y por ende no necesitan estar representados en pantalla. En consecuencia, no hace falta renderizar el componente por cada cambio que experimenten.
                    <br />
                    <br />
                    Veamos un ejemplo de caso de uso.
            </div>
        </div>
    )
}