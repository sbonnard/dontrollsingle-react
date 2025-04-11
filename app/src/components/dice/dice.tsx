import React, { useState } from 'react';
import './_dice.scss';

type DiceProps = {
    dice: number;
};

/**
 * Returns a random number between min and max (inclusive) using the following formula:
 * Math.floor(Math.random() * ((max + 1) - min) + min)
 * @param {number} min The minimum value of the range
 * @param {number} max The maximum value of the range
 * @returns {number} A random number between min and max
 */
const getRandomNumber = (min: number, max: number) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * ((maxValue + 1) - minValue) + 1);
}



/**
 * Component displaying a dice with a given number of faces
 * @param {DiceProps} props
 * @prop {number} dice The number of faces of the dice
 * @returns {JSX.Element} A section containing a banner, a headline and a button with a dice image
 */
const Dice = ({ dice }: DiceProps) => {

    const [isRolling, setIsRolling] = useState(false);
    const [result, setResult] = useState<number | null>(null);
    const [critType, setCritType] = useState<'crit' | 'fail' | 'normal' | null>(null);

    const rollDice = () => {
        setIsRolling(true);
        const random = getRandomNumber(1, dice);
        setResult(random);

        if (dice === 100) {
            if (random >= 1 && random <= 5) setCritType('crit');
            else if (random >= 95) setCritType('fail');
            else setCritType('normal');
        } else {
            setCritType(null);
        }

        // Affichage de la bannière pendant 1.5s
        setTimeout(() => setIsRolling(false), 1500);

        // Cacher le résultat et la bannière après 5s
        setTimeout(() => {
            setResult(null);
        }, 5000);
    };

    return (
        <section className="dice__section" aria-labelledby={`ttl${dice}`}>
            <div
                className={`dice__banner ${critType ? `dice--${critType}` : ''} ${result !== null ? 'dice__banner--visible' : ''}`}
                data-banner={dice}
                id={`banner${dice}`}
            >
                {result !== null ? result : ''}
            </div>

            <h2 className="ttl dice__word" id={`ttl${dice}`}>
                Dé <span className="number">{dice}</span>
            </h2>

            <button id={`dice${dice}`} data-dice={dice} onClick={rollDice}>
                <img className={`dice dice--${dice} ${isRolling ? 'dice__rolling' : ''}`} src={`src/assets/img/${dice}.png`} alt={`Dé ${dice} de JDR`} />
            </button>
        </section>
    );
};

export default Dice;