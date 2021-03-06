import React from 'react';

import './style.css';

import PageHeader from '../PageHeader';
import TeacherItem from '../TeacherItem';

const TeacherList = (): JSX.Element => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
