import React from "react";
import './Contato.css';
import TextAndTitle from '../TextAndTitle/TextAndTitle';
import FormContato from "../FormContato/FormContato";
import ContactBall from "../ContactBall/ContactBall";
import Footer from "../Footer/Footer";

function Contato(){
    return(
        <div className="Contato">
            <div className="panel">
                <TextAndTitle title = "Contato" text="Olá, bem vindo! Sinta-se a vontade de entrar em contato por qualquer das opções a baixo."/>
            </div>
            <div className="panel">
                <FormContato/>
            </div>
            <div className="panel">
                <h2>Opções de Contato</h2>
                <div className="balls">
                        <ContactBall link="mailto:marcosvmagalhaes123@gmail.com" linkImage="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"/>
                        <ContactBall link="https://www.linkedin.com/in/marcos-magalh%C3%A3es-57a1651b4/" linkImage="https://www.spiner.com.br/wp-content/uploads/2019/02/midias-sociais-linkedin-icon.png"/>
                        <ContactBall link="https://github.com/MarcosMaga/MarcosMaga" linkImage="https://icon-library.com/images/github-icon-white/github-icon-white-16.jpg"/>
                        <ContactBall link="https://api.whatsapp.com/send?phone=5519983051888&text=Ola!+Vi+seu+Dashboard!" linkImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Contato;