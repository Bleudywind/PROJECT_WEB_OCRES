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
import Admin from './Admin'

class mainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { description: [] }
    }

    displayToggleTimer() {
        console.log(document.getElementById("timerWidget").style.display);
        if (document.getElementById("timerWidget").style.display === "inline") {
            document.getElementById("timerWidget").style.display = "none";
        }
        else {
            document.getElementById("timerWidget").style.display = "inline";
        }
    }
    displayToggleGroupStats() {
        console.log(document.getElementById("GroupStatsWidget").style.display);
        if (document.getElementById("GroupStatsWidget").style.display === "inline") {
            document.getElementById("GroupStatsWidget").style.display = "none";
        }
        else {
            document.getElementById("GroupStatsWidget").style.display = "inline";
        }
    }
    displayToggleAnnoncesGL() {
        console.log(document.getElementById("AnnoncesGLWidget").style.display);
        if (document.getElementById("AnnoncesGLWidget").style.display === "inline") {
            document.getElementById("AnnoncesGLWidget").style.display = "none";
        }
        else {
            document.getElementById("AnnoncesGLWidget").style.display = "inline";
        }
    }
    displayToggleIncommingMatches() {
        console.log(document.getElementById("IncommingMatchesWidget").style.display);
        if (document.getElementById("IncommingMatchesWidget").style.display === "inline") {
            document.getElementById("IncommingMatchesWidget").style.display = "none";
        }
        else {
            document.getElementById("IncommingMatchesWidget").style.display = "inline";
        }
    }
    displayToggleScouting() {
        console.log(document.getElementById("ScoutingWidget").style.display);
        if (document.getElementById("ScoutingWidget").style.display === "inline") {
            document.getElementById("ScoutingWidget").style.display = "none";
        }
        else {
            document.getElementById("ScoutingWidget").style.display = "inline";
        }
    }
    displayToggleOPGGButton() {
        console.log(document.getElementById("OPGGButtonWidget").style.display);
        if (document.getElementById("OPGGButtonWidget").style.display === "inline") {
            document.getElementById("OPGGButtonWidget").style.display = "none";
        }
        else {
            document.getElementById("OPGGButtonWidget").style.display = "inline";
        }
    }
    displayTogglePastGames() {
        console.log(document.getElementById("PastGamesWidgets").style.display);
        if (document.getElementById("PastGamesWidgets").style.display === "inline") {
            document.getElementById("PastGamesWidgets").style.display = "none";
        }
        else {
            document.getElementById("PastGamesWidgets").style.display = "inline";
        }
    }

    toggleAdmin() {
        if (document.getElementById("timerWidget").style.display === "none" && document.getElementById("GroupStatsWidget").style.display === "none" && document.getElementById("AnnoncesGLWidget").style.display === "none" && document.getElementById("IncommingMatchesWidget").style.display === "none" && document.getElementById("ScoutingWidget").style.display === "none" && document.getElementById("OPGGButtonWidget").style.display === "none" && document.getElementById("PastGamesWidgets").style.display === "none") {
            document.getElementById("timerWidget").style.display = "inline";
            document.getElementById("GroupStatsWidget").style.display = "inline";
            document.getElementById("AnnoncesGLWidget").style.display = "inline";
            document.getElementById("IncommingMatchesWidget").style.display = "inline";
            document.getElementById("ScoutingWidget").style.display = "inline";
            document.getElementById("OPGGButtonWidget").style.display = "inline";
            document.getElementById("PastGamesWidgets").style.display = "inline";
            document.getElementById("AdminPage").style.display = "none";

        }
        else {
            document.getElementById("timerWidget").style.display = "none";
            document.getElementById("GroupStatsWidget").style.display = "none";
            document.getElementById("AnnoncesGLWidget").style.display = "none";
            document.getElementById("IncommingMatchesWidget").style.display = "none";
            document.getElementById("ScoutingWidget").style.display = "none";
            document.getElementById("OPGGButtonWidget").style.display = "none";
            document.getElementById("PastGamesWidgets").style.display = "none";
            document.getElementById("AdminPage").style.display = "inline";
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <Navbar ToggleTimer={this.displayToggleTimer} ToggleGroupStats={this.displayToggleGroupStats} ToggleAnnoncesGL={this.displayToggleAnnoncesGL} ToggleIncommingMatches={this.displayToggleIncommingMatches} ToggleScouting={this.displayToggleScouting} ToggleOPGGButton={this.displayToggleOPGGButton} TogglePastGames={this.displayTogglePastGames} OpenAdmin={this.toggleAdmin} CloseAdmin={this.closeAdmin} />
                <div className="widgetsContainer">
                    <div id="GroupStatsWidget" style={{ display: "inline" }}>
                        <GroupStats />
                    </div>
                    <div id="AnnoncesGLWidget" style={{ display: "inline" }}>
                        <AnnoncesGL />
                    </div>
                    <div id="IncommingMatchesWidget" style={{ display: "inline" }}>
                        <IncommingMatches />
                    </div>
                    <div id="timerWidget" style={{ display: "inline" }}>
                        <Timer />
                    </div>
                    <div id="ScoutingWidget" style={{ display: "inline" }}>
                        <Scouting />
                    </div>
                    <div id="OPGGButtonWidget" style={{ display: "inline" }}>
                        <OPGGButton />
                    </div>
                    <div id="PastGamesWidgets" style={{ display: "inline" }}>
                        <PastGamesWidget />
                    </div>
                    <div id="AdminPage" style={{ display: "none" }}>
                        <Admin />
                    </div>
                </div>
            </div>
        );
    }
}

export default mainPage;