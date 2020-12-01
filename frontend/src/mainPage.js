import React from 'react'
import './mainPage.css'
import Timer from './widgets/Timer/Timer'
import Scouting from './widgets/Scouting/carousselScouting'
import AnnoncesGL from './widgets/AnnonceGL/AnnoncesGL'
import OPGGButton from './widgets/OPGGWidget/OPGGButton'
import PastGamesWidget from './widgets/PastGamesWidget/PastGames'
import IncommingMatches from './widgets/IncomingMatchesWidget/IncomingMatchesTable'
import GroupStats from './widgets/GroupStatsWidget/GroupStatsTable'
import Navbar from './navbar/Navbar'

class mainPage extends React.Component {

    render() {
        return (
            <div className="mainContainer">
                <Navbar />
                <div className="widgetsContainer">
                    <GroupStats />
                    <AnnoncesGL />
                    <IncommingMatches />
                    <Timer />
                    <Scouting />
                    <OPGGButton />
                    <PastGamesWidget />
                </div>
            </div>
        );
    }
}

export default mainPage;