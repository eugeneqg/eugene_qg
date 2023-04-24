import './App.css';
import React from "react";
import Header from '../components/navbar/navbar';
import MainBanner from '../components/main-banner/main-banner';
import About from '../components/about/about';
import Portfolio from '../components/portfolio/portfolio';
import Contacts from '../components/contacts/contacts';
import Footer from '../components/footer/footer';

function App() {

  return (
    <div>
      <Header/>
      <MainBanner/>
      <About/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
