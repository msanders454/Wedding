import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage'
import faq from '../faq'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ScrollRestoration from 'react-scroll-restoration'
import './App.css';


const App = () => { 

  return (
    <div className="App">
       <Router>
       <ScrollRestoration />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/faq' component={faq} />
          </Switch>
          <Footer/>
          <Scrollbar/>
      </Router>
      
    </div>
  );
}

export default App;
