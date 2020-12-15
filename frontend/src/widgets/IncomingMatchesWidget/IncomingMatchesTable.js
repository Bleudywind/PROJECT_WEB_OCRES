import React from 'react';
import './IncomingMatchesTable.css';
import axios from 'axios';

class Matches extends React.Component {

    difficultMatches() {
        var rank = 1;
        
        try {
            for (var i = 0; i < 10; i++) {
                if (this.props.teams[i].teamName === this.props.matches.opponent) {
                    rank = this.props.teams[i].ranking;
                }
            }
            if (rank < 4) {
                return "#ff4c69";
            }
            if (rank > 3 && rank < 8) {
                return "#ff7f53";
            }
            else {
                return "#00d084";
            }
        } catch {

        }
    }


    render() {
        return (
            <tr className='tr1'>
                <td className='td1 bold tableName'> {this.props.matches.opponent} </td>
                <td className='td1'>
                    <svg height="50" width="50">
                        <circle cx="25" cy="25" r="20" fill={this.difficultMatches()} fill-opacity="0.8" />
                    </svg>
                </td>
                <td className='td1 bold tableRank'> {this.props.matches.date.substring(8, 10) + "/" + this.props.matches.date.substring(5, 7)} </td>
            </tr>
        );
    }
}


class IncomingMatchesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            teams: [],
        };
    }

    componentDidMount() {
        
            axios.get('http://localhost:5000/matches/incomingMatches')
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
            return <Matches matches={currentmatches} teams={this.state.teams} />
            })
        

        

    }

    render() {
        return (
            <div className='widgetContainer transparentWidget1'>
                <table className='table1'>
                    <caption className='caption1'> Incoming Matches </caption>
                    <tr className='tr1'>
                        <th className='th1 bold tablePlayed'> Nom </th>
                        <th className='th1 bold tablePlayed'> Difficulté </th>
                        <th className='th1 bold tablePlayed'> Date </th>
                    </tr>
                    {this.matchList()}
                </table>
            </div>

        );
    }
}

IncomingMatchesTable.defaultProps = {};

export default IncomingMatchesTable;

