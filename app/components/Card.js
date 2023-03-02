import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const GOLD = 'bg-yellow-500';
const GREEN = 'bg-emerald-400';

const colors = {
    green: GREEN,
    gold: GOLD
}

const Card = ({ children, headPosition = 'right', color = 'green' }) => (
    <div className="w-full overflow-hidden relative pt-6">
        <span className={`absolute top-0 ${headPosition === 'right' ? styles.headRight : styles.headLeft} ${colors[color]} w-1/6 h-8 block rounded-t-2xl`} />
        <div className={`w-full ${headPosition === 'right' ? 'rounded-tl-3xl' : 'rounded-tr-3xl' } rounded-b-3xl relative p-6 ${colors[color]}`}>
            {children}
        </div>
    </div>
);

Card.propTypes = {
    headPosition: PropTypes.oneOf(['right', 'left']),
    color: PropTypes.oneOf(['green', 'gold']),
}

export default Card;
