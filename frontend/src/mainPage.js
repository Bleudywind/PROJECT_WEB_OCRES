import React from 'react';
import homeIcon from './home-icon-silhouette.svg';
import nextGame from './calendar.svg';
import './mainPage.css';
import Timer from './Widget/Timer/Timer'
import Scouting from './Widget/Scouting/carousselScouting'
import AnnoncesGL from './Widget/AnnonceGL/AnnoncesGL'
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
                        <img className="home" src={homeIcon} />
                    </button>
                    <button className="noneButton">
                        <img className="NextGame" src={nextGame} />
                    </button>
                </div>
                <div className="widgetContainer">
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