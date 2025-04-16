import React from 'react';
import { useState } from 'react';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/footer.tsx';
import WorldMap from './components/worldmap/Worldmap.tsx';
import './styles/main.scss';

const AppWorldMap = () => {
    return (
      <>
        <Header />
        <main className="container container--grid">
          <WorldMap />
        </main>
        <Footer />
      </>
    );
  };
  
  export default AppWorldMap;