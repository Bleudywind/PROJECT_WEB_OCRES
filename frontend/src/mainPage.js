import React from 'react'
import homeIcon from './img/navbarIcons/home-icon-silhouette.svg'
import nextGame from './img/navbarIcons/calendar.svg'
import './mainPage.css'
import Timer from './widgets/Timer/Timer'
import Scouting from './widgets/Scouting/carousselScouting'
import AnnoncesGL from './widgets/AnnonceGL/AnnoncesGL'
import OPGGButton from './widgets/OPGGWidget/OPGGButton'
import PastGameWidget from './widgets/PastGamesWidget/PastGames'
import IncommingMatches from './widgets/IncomingMatchesWidget/IncomingMatchesTable'
import GroupStats from './widgets/GroupStatsWidget/GroupStatsTable'

class mainPage extends React.Component {

    render() {
        return (
            <div className="mainContainer">
                <div className="navBar">
                    <button className="noneButton">
                        <img className="home" alt="home icon" src={homeIcon} />
                    </button>
                    <button className="noneButton">
                        <img className="incomingGamesIcon" alt="incoming games icon" src={nextGame} />
                    </button>
                </div>
                <div className="widgetsContainer">
                    <AnnoncesGL />
                    <Scouting />
                    <Timer />
                    <OPGGButton />
                    <PastGameWidget className="PastGameWidget"/>
                    <IncommingMatches/>
                    <GroupStats/>
                </div>
            </div>
        );
    }
}

export default mainPage;