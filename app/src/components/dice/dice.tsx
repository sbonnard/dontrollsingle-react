import React from 'react';
import './_dice.scss';

type DiceProps = {
    dice: number;
  };


const Dice = ({dice}: DiceProps) => {
    return (
        <section className="dice__section" aria-labelledby="ttl{dice}">
            <div className="dice__banner" data-banner="{dice}" id="banner{dice}">{dice}</div>
            <h2 className="ttl dice__word" id="ttl{dice}">Dé <span className="number">{dice}</span></h2>
            <button id="dice{dice}" data-dice="{dice}">
                <img className="dice dice--{dice}" src="img/{dice}.png" alt="Dé {dice} de JDR" />
            </button>
        </section>
    );
};