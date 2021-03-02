import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.css';

import { directive, booleanTypeAnnotation } from '@babel/types';
import Header from './components/header';
import Body from './components/body';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Body/>
    </React.Fragment>

  );
}

export default App;
