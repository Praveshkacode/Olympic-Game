import React from 'react';
import cricketPlayers from '../data/cricketPlayers';
import styles from './CricketPlayer.module.css';

const CricketPlayer = ({ onAddPlayer, onDropPlayer }) => {
    return (
        <div className={styles.playerList}>
            {cricketPlayers.map(player => (
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

export default CricketPlayer;
