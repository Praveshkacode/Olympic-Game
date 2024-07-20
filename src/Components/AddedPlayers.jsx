import React from 'react';
import styles from './AddedPlayers.module.css';

const AddedPlayers = ({ players, onDropPlayer }) => {
    return (
        <div className={styles.addedPlayers}>
            <h2>Added Players</h2>
            <ul>
                {players.map(player => (
                    <li key={player.id} className={styles.playerItem}>
                        {player.name} ({player.role})
                        <button className={styles.dropButton} onClick={() => onDropPlayer(player.id)}>Drop</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddedPlayers;
