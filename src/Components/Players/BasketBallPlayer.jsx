import React from 'react';
import basketballPlayers from '../data/basketballPlayers';
import styles from './BasketBallPlayer.module.css';

const BasketBallPlayer = ({ onAddPlayer, onDropPlayer }) => {
    return (
        <div className={styles.playerList}>
            {basketballPlayers.map(player => (
                <div key={player.id} className={styles.playerBox}>
                    <div className={styles.playerName}>{player.name}</div>
                    <div className={styles.playerDetails}>Role: {player.role}</div>
                    <div className={styles.playerDetails}>Price: ${player.price}</div>
                    <div className={styles.playerDetails}>Country: {player.country}</div>
                    <div className={styles.buttonGroup}>
                        <button className={`${styles.button} ${styles.addButton}`} onClick={() => onAddPlayer(player)}>Add</button>
                        <button className={`${styles.button} ${styles.dropButton}`} onClick={() => onDropPlayer(player.id)}>Drop</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BasketBallPlayer;
