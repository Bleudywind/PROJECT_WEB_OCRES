import React from 'react';
import opggLogo from './opgg-logo.svg';
import './OPGGButton.css'
import axios from 'axios';

class Link extends React.Component {

    openLink ()  {
        var link;
        var teamName;
        console.log("ccc");
        for (var i = 0; i < 10; i++) {
            if (this.props.teams[i].teamName === this.props.matches.opponent) {
                teamName = i;
            }
        }
        link = "https://euw.op.gg/multi_old/query="+ this.props.teams[teamName].players[0].summonerName1 +"%2C"+ this.props.teams[teamName].players[0].summonerName2 +"%2C"+ this.props.teams[teamName].players[0].summonerName3 +"%2C"+ this.props.teams[teamName].players[0].summonerName4 +"%2C"+ this.props.teams[teamName].players[0].summonerName5;

        console.log(link);
        window.open(link);
    }


    render() {
        return (
            <button className="OPGGbutton" onClick={() => this.openLink()}>
                <img className="OPGGimg" src={opggLogo} alt="OP.GG Logo" />
            </button>
        );
    }
}


class OPGGButton extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            teams: [],
        };
    }

    componentDidMount() {

        
        axios.get('http://localhost:5000/matches/nextMatch')
            .then(response => {
                this.setState({ matches: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get('http://localhost:5000/teams/')
            .then(responses => {
                this.setState({ teams: responses.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }



    matchList() {
        return this.state.matches.map(currentmatches => {
            return <Link matches={currentmatches} teams={this.state.teams} />
        })
    }


    render() {
        return (
            <div className='widgetContainer1'>
                {this.matchList()}
            </div>
        );
    }
}

OPGGButton.defaultProps = { link: '//euw.op.gg' };

export default OPGGButton;