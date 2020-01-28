import React from 'react';

import UserPanel from './UserPanel/UserPanel';
import Calendar from './Calendar/Calendar';
import Details from './Details/Details';
import Tasks from './Tasks/Tasks';

import './App.scss';

const App = () => (
  <main>
    <section id="left-pane">
      <UserPanel />
      <Calendar />
    </section>
    <section id="center-pane">
      <Tasks />
    </section>
    <section id="right-pane">
      <Details />
    </section>
  </main>
);

export default App;
