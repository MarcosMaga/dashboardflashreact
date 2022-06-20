import React from "react";
import { collection, addDoc, doc } from "firebase/firestore";
import './FormContato.css';
import db from '../../firebase'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function FormContato(){

    const {register, handleSubmit, formState:{erros}} = useForm();
    
    const onSubmit = async (data) =>{
        const collectionRef = collection(db, "contatos");
        const payload = {
            email: data.femail,
            nome: data.fname,
            texto: data.ftext
        };
        toast.success('Enviado com sucesso!');
        await addDoc(collectionRef, payload);
    }


    return(
        <div className="FormContato">
            <h2>Formulário de Contato</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="fname">Nome:</label>
                <input minLength="4" name="fname" id="tbNome" type="text" {...register("fname")}/>
                <label for="femail">Email:</label>
                <input minLength="4" name="femail" id="tbEmail" type="email" {...register("femail")}/>
                <label for="ftext">Texto:</label>
                <input minLength="4" name="ftext" id="tbText" type="text" {...register("ftext")}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormContato;