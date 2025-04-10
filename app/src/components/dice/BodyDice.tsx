import React, { useState } from 'react';
import './_dice.scss';

const bodyParts = [
    'Jambe droite',
    'Jambe droite',
    'Jambe gauche',
    'Jambe gauche',
    'Bras droit',
    'Bras droit',
    'Bras gauche',
    'Bras gauche',
    'Tête',
    'Poitrine',
    'Poitrine',
    'Ventre',
    'Ventre',
    'Cou'
];

const BodyDice = () => {
    const [isRolling, setIsRolling] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const rollBodyDice = () => {
        setIsRolling(true);
        const randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
        setResult(randomPart);

        setTimeout(() => setIsRolling(false), 1500);
        setTimeout(() => setResult(null), 5000);
    };

    return (
        <section className="dice__section" aria-labelledby="ttlBody">
            <div className={`dice__banner ${result ? 'dice__banner--visible' : ''}`} data-banner="body" id="bannerBody">
                {result ?? 'Body'}
            </div>

            <h2 className="ttl dice__word" id="ttlBody">
                Dé <span className="number">Corps</span>
            </h2>

            <button id="bodyDice" data-dice="body" onClick={rollBodyDice}>
                <img className={`dice dice--body ${isRolling ? 'dice__rolling' : ''}`} src="../assets/img/body.png" alt="Dé localisation du corps" />
            </button>
        </section>
    );
};

export default BodyDice;