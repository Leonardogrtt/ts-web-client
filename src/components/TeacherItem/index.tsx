import React from 'react';

import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = (): JSX.Element => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/52132993?s=400&u=acf97dfe54e8eb55568f3bce9d9db4bad6df0678&v=4"
          alt="Leonardo - Matemática"
        />
        <div>
          <strong>Leonardo Girotto</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Timor Domini
        <br />
        Principium Sapientiae
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
