import Footer from "../footer/Footer";
import './contact.css';

export default function Contact () {
    return (
        <div className="w80 margin-auto h70 flexcol-center">
            <div>
                <div className="flex center">
                    <input placeholder="Nombre completo" style={{width:'100%'}} className="input-contact"/>
                    <input placeholder="Correo electrónico" style={{width:'100%'}} className="input-contact"/>
                </div>
                <div className="flex center margin-auto">
                    <input placeholder="Asunto" style={{width:'100%'}} className="input-contact"/>
                </div>
                <div className="flex evenly margin-auto">
                    <textarea placeholder="Deja tu mensaje" style={{width:'100%'}} rows={5} className="input-contact"/>
                </div>
                <button className="button-contact pointer">Enviar</button>
            </div>
        </div>
    )
}