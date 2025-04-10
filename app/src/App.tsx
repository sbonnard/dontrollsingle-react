import React from 'react';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dice from './components/dice/Dice';
import BodyDice from './components/dice/BodyDice';
import './styles/main.scss';

const diceValues = [100, 20, 12, 10, 8, 6, 4];

const App = () => {
  return (
    <Header />
    <main className="container">
      {diceValues.map((dice) => (
        <Dice key={dice} dice={dice} />
      ))}
      <BodyDice />
    </main>
    <Footer />
  );
};