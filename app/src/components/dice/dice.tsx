import React, { useState } from 'react';
import './_dice.scss';

type DiceProps = {
    dice: number;
};

const getRandomNumber = (min: number, max: number) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * ((maxValue + 1) - minValue) + minValue);
};

const Dice = ({ dice }: DiceProps) => {
    const [isRolling, setIsRolling] = useState(false);
    const [result, setResult] = useState<number | null>(null);
    const [critType, setCritType] = useState<'crit' | 'fail' | 'normal' | null>(null);
    const [showBanner, setShowBanner] = useState(false);

    const rollDice = () => {
        setIsRolling(true);
        const random = getRandomNumber(1, dice);
        setResult(random);
        setShowBanner(true);

        if (dice === 100) {
            if (random >= 1 && random <= 5) setCritType('crit');
            else if (random >= 95) setCritType('fail');
            else setCritType('normal');
        } else {
            setCritType(null);
        }

        // Arrêt de l'animation de lancer
        setTimeout(() => {
            setIsRolling(false);
        }, 1500);

        // Cacher visuellement la bannière
        setTimeout(() => {
            setShowBanner(false);
        }, 5000);

        // Supprimer le résultat une fois la transition CSS finie
        setTimeout(() => {
            setResult(null);
        }, 6000); // 5s + transition CSS (1s)
    };

    return (
        <section className="dice__section" aria-labelledby={`ttl${dice}`}>
            <div
                className={`dice__banner ${critType ? `dice--${critType}` : ''} ${showBanner ? 'dice__banner--visible' : ''}`}
                data-banner={dice}
                id={`banner${dice}`}
            >
                {result}
            </div>

            <h2 className="ttl dice__word" id={`ttl${dice}`}>
                Dé <span className="number">{dice}</span>
            </h2>

            <button id={`dice${dice}`} data-dice={dice} onClick={rollDice}>
                <img
                    className={`dice dice--${dice} ${isRolling ? 'dice__rolling' : ''}`}
                    src={`src/assets/img/${dice}.png`}
                    alt={`Dé ${dice} de JDR`}
                />
            </button>
        </section>
    );
};

export default Dice;
