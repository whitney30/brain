import React from 'react';
import '../CSS/App1.css';
import Cards from './Cards';
import AI from './AI';
import Footer from './Footer';

function Home() {
  return (
    <>
      <AI />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;