import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage'
import NotFound from '../NotFound';
import faq from '../faq'
import Footer from '../../components/footer'
import Quiz from '../Quiz'
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
            <Route exact path='/quiz' component={Quiz} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
