import React, { Component } from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'

import  CustomersList from './CustomersList'
import  CustomerCreateUpdate  from './CustomerCreateUpdate'
import './App.css';

const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="#">Django React Demo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">CUSTOMERS</Link>
          <Link className="nav-item nav-link" to="/customer">CREATE CUSTOMER</Link>
        </div>
      </div>
    </nav>  

    
  </div>
)

function App(){
    return (
      <BrowserRouter>
          <BaseLayout/>
          <Routes className="content">
            <Route path="/" element={<CustomersList/>} />
            <Route path="/customer/:pk"  element={<CustomerCreateUpdate/>} />
            <Route path="/customer" element={<CustomerCreateUpdate/>} />
          </Routes>
      </BrowserRouter>
    );
}

export default App;