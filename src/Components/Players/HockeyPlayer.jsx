import React from 'react';
import hockeyPlayers from '../data/hockeyPlayers';
import styles from './HockeyPlayer.module.css';

const HockeyPlayer = ({ onAddPlayer, onDropPlayer }) => {
    return (
        <div className={styles.playerList}>
            {hockeyPlayers.map(player => (
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

export default HockeyPlayer;
