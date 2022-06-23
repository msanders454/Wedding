import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import PageNotFound from '../../images/PageNotFound.jpg';
const NotFound = () =>{
        return (
        <div>
          <Link to='/' aria-label="Next" >
              <p className="home">Go Home</p>
          </Link>
          <img src={PageNotFound}  alt=""/>
        </div>
        )
    }

export default NotFound;