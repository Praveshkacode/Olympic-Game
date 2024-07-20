import React, { useState, useCallback } from 'react';
import styles from "./Lobby.module.css";
import logo from '../assets/logo.png';
import CricketPlayer from './Players/CricketPlayer';
import FootBallPlayer from './Players/FootBallPlayer';
import HockeyPlayer from './Players/HockeyPlayer';
import BasketBallPlayer from './Players/BasketBallPlayer';
import AddedPlayers from './AddedPlayers';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
    const [addedPlayers, setAddedPlayers] = useState([]);
    const [currentType, setCurrentType] = useState(() => CricketPlayer); // Default component
    const navigate = useNavigate();

    // Define handler functions
    const handleAddPlayer = useCallback((player) => {
        setAddedPlayers(prevPlayers => [...prevPlayers, player]);
    }, []);

    const handleDropPlayer = useCallback((playerId) => {
        setAddedPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
    }, []);

    // Change component type
    const handleTypeChange = (PlayerComponent) => {
        setCurrentType(() => PlayerComponent);
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.mainPage}>
            <div className={styles.mainNav}>
                <div className={styles.logo}>
                    <img onClick={handleLogoClick} src={logo} alt="Logo" />
                </div>
                <button>Add Cash</button>
            </div>

            <div className={styles.chooseGame}>
                <button className={`${styles.btn} ${currentType === CricketPlayer ? styles.active : ''}`} 
                    onClick={() => handleTypeChange(CricketPlayer)}>Cricket</button>
                <button className={`${styles.btn} ${currentType === HockeyPlayer ? styles.active : ''}`} 
                    onClick={() => handleTypeChange(HockeyPlayer)}>Hockey</button>
                <button className={`${styles.btn} ${currentType === FootBallPlayer ? styles.active : ''}`} 
                    onClick={() => handleTypeChange(FootBallPlayer)}>Football</button>
                <button className={`${styles.btn} ${currentType === BasketBallPlayer ? styles.active : ''}`} 
                    onClick={() => handleTypeChange(BasketBallPlayer)}>Basketball</button>
            </div>

            <div className={styles.show}>
                <div className={styles.playerList}>
                    <h2>Players List</h2>
                    {/* Render the component and pass handlers */}
                    {React.createElement(currentType, { onAddPlayer: handleAddPlayer, onDropPlayer: handleDropPlayer })}
                </div>
                {addedPlayers.length > 0 && <AddedPlayers players={addedPlayers} onDropPlayer={handleDropPlayer} />}
            </div>
        </div>
    );
};

export default Lobby;
