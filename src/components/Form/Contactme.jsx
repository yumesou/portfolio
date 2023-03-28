import React, { useState } from "react";
import './Contactme.css';
import TrackVisibility from 'react-on-screen';

import svgPeaple from '../../assets/img/contact/peaple.svg';

// eslint-disable-next-line
export default props => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setButtonText("Enviando...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Enviar");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ succes: true, message: 'Enviado com sucesso'});
        } else {
            setStatus({ succes: false, message: 'Algo deu errado, tente novamente mais tarde...'});
        }
    };

    return (
        <>
            <div className="contact" id='contact'>
                <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn container2" : "container2"}>
                        <div className="img-container">
                            <img src={svgPeaple} alt="peaple"/>
                        </div>
                        <div className="form-container">
                            <h2>Entre em contato!</h2>
                            <form className='form' onSubmit={handleSubmit}>
                                <div className="gridform">
                                    <input type="text" value={formDetails.firstName} placeholder="Primeiro nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    <input type="text" value={formDetails.lasttName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                    <input type="email" value={formDetails.email} placeholder="Endereço de email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    <input type="tel" value={formDetails.phone} placeholder="Numero de telefone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </div>
                                <textarea value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                                {
                                status.message &&
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                }
                            </form>
                        </div>
                    </div>}
                </TrackVisibility>
            </div>
        </>
    )
}
