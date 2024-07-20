import React, { useState, useCallback, useEffect } from 'react';
import styles from "./Lobby.module.css";
import logo from '../assets/logo.png';
import Developer from '../assets/Developer.jpeg';
import Money1 from '../assets/money1.png';
import Money from '../assets/money.png';
import Excellent from '../assets/Excellent.jpg';
import Good from '../assets/Good.jpg';
import CricketPlayer from './Players/CricketPlayer';
import FootBallPlayer from './Players/FootBallPlayer';
import HockeyPlayer from './Players/HockeyPlayer';
import BasketBallPlayer from './Players/BasketBallPlayer';
import AddedPlayers from './AddedPlayers';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
    const [addedPlayers, setAddedPlayers] = useState([]);
    const [currentType, setCurrentType] = useState(() => CricketPlayer); // Default component
    const [totalScore, setTotalScore] = useState(0);
    const [cash, setCash] = useState(5000000);
    const [showDeveloper, setShowDeveloper] = useState(false); // State to control image visibility
    const [showWinner, setShowWinner] = useState(false); // State to control winner visibility
    const [winnerImage, setWinnerImage] = useState(null); // State to control winner image
    const navigate = useNavigate();

    // Define handler functions
    const handleAddPlayer = useCallback((player) => {
        setAddedPlayers((prevPlayers) => {
            if (prevPlayers.some(p => p.id === player.id) || prevPlayers.length >= 5) {
                return prevPlayers;
            }
            if (cash >= player.price) {
                setCash(prevCash => prevCash - player.price);
                const newPlayer = { ...player, score: Math.floor(Math.random() * 100) + 1 };
                const updatedPlayers = [...prevPlayers, newPlayer];
                if (updatedPlayers.length === 5) {
                    handleWinner(updatedPlayers.reduce((sum, p) => sum + p.score, 0));
                }
                return updatedPlayers;
            }
            return prevPlayers;
        });
    }, [cash]);

    const handleDropPlayer = useCallback((playerId) => {
        setAddedPlayers((prevPlayers) => {
            const playerToDrop = prevPlayers.find(player => player.id === playerId);
            if (playerToDrop) {
                setCash((prevCash) => prevCash + Math.floor(playerToDrop.price * 0.9));
                return prevPlayers.filter(player => player.id !== playerId);
            }
            return prevPlayers;
        });
    }, []);

    const handleTypeChange = (PlayerComponent) => {
        setCurrentType(() => PlayerComponent);
    };

    const handleAddCash = () => {
        setShowDeveloper(true); // Show image
        setCash(prevCash => prevCash + 500000);
        setTimeout(() => setShowDeveloper(false), 5000); // Hide image after 5 seconds
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleWinner = (score) => {
        setShowWinner(true);
        if (score > 350) {
            // alert("Best Selection");
            setWinnerImage(Excellent);
            setTotalScore(0);
            setAddedPlayers([]);
        } else if (score > 200) {
            // alert("Good Selection");
            setWinnerImage(Good);
        } else {
            alert("Bad Selection,Try Again");
            setWinnerImage(null);
        }
        setTimeout(() => setShowWinner(false), 2000); // Hide image after 2 seconds
    };

    useEffect(() => {
        const total = addedPlayers.reduce((sum, player) => sum + player.score, 0);
        setTotalScore(total);
    }, [addedPlayers]);

    return (
        <div className={styles.mainPage}>
            <div className={styles.mainNav}>
                <div className={styles.logo}>
                    <img onClick={handleLogoClick} src={logo} alt="Logo" />
                </div>
                <button className={styles.cashValue}><img className={styles.cash} src={Money} alt="ADD Cash" />{cash}</button>
                <img className={styles.addCash} onClick={handleAddCash} src={Money1} alt="ADD Cash" />
                <p className={styles.score}>Score: {totalScore}</p>
            </div>
            {showDeveloper && (
                <div className={styles.developerImage}>
                    <img src={Developer} alt="Developer" />
                </div>
            )}
            {showWinner && winnerImage && (
                <div className={styles.ResultImage}>
                    <img src={winnerImage} alt="Result" />
                </div>
            )}
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
                    {React.createElement(currentType, { onAddPlayer: handleAddPlayer, onDropPlayer: handleDropPlayer })}
                </div>
                <div className={styles.divider}></div>
                {addedPlayers.length > 0 && <AddedPlayers players={addedPlayers} onDropPlayer={handleDropPlayer} />}
            </div>
        </div>
    );
};

export default Lobby;
