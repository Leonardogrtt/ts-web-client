import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import TeacherList from './components/TeacherList';
import TeacherForm from './components/TeacherForm';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/estudar" component={TeacherList} />
        <Route exact path="/dar-aulas" component={TeacherForm} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
