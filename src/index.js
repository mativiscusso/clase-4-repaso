import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ListCards } from './components/ListCards';
import { Navbar } from './components/Navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <div className='main'>
   <Navbar/>
   <Header/>
  <ListCards/>
   <Footer/>
   </div>
  </React.StrictMode>,
  document.getElementById('root')
);


