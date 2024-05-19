import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "../css/formulario.css";

function Greeting({ name }) {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4sc5wqf', 'template_q2wqz38', form.current, {
        publicKey: 'b2gTcCoOMHzR5qyFJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return <form ref={form} onSubmit={sendEmail} className='field'>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Correo</label>
      <input type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    
  }
  
  export default function App() {
    return <Greeting name="mundo" />
  }

