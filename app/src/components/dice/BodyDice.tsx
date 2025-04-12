import React, { useState } from 'react';
import './_dice.scss';
import '../../styles/main.scss';

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
    const [showBanner, setShowBanner] = useState(false);

    const rollBodyDice = () => {
        setIsRolling(true);
        const randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
        setResult(randomPart);
        setShowBanner(true);

        // Arrêt du rolling visuel
        setTimeout(() => {
            setIsRolling(false);
        }, 1500);

        // Masquer la bannière après 5s
        setTimeout(() => {
            setShowBanner(false);
        }, 5000);

        // Supprimer le contenu après la fin de la transition
        setTimeout(() => {
            setResult(null);
        }, 6000); // 5s affichage + 1s transition
    };

    return (
        <section className="dice__section" aria-labelledby="ttlBody">
            <div
                className={`dice__banner ${showBanner ? 'dice__banner--visible' : ''}`}
                data-banner="body"
                id="bannerBody"
            >
                {result}
            </div>

            <h2 className="ttl dice__word" id="ttlBody">
                Dé <span className="number">Corps</span>
            </h2>

            <button id="bodyDice" data-dice="body" onClick={rollBodyDice}>
                <img
                    className={`dice dice--body ${isRolling ? 'dice__rolling' : ''}`}
                    src="src/assets/img/body.png"
                    alt="Dé localisation du corps"
                />
            </button>
        </section>
    );
};

export default BodyDice;
