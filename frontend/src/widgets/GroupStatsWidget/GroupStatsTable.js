import React from 'react';
import './GroupStatsTable.css';
import axios from 'axios';

const Teams = props => (
    <tr className='tr'>
        <td className='bold td tableRank'> {props.teams.ranking} </td>
        <td className='bold td tableName'> {props.teams.teamName} </td>
        <td className='td tablePlayed'> {props.teams.gamesPlayed} </td>
        <td className='td tableWon'> {props.teams.gamesWon} </td>
        <td className='td tableLost'> {props.teams.gamesLost} </td>
        <td className='bold td tablePoints'> {props.teams.points} </td>
    </tr>
)


class GroupStatsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Teams: [] };

    }

    componentDidMount() {

        axios.get('http://localhost:5000/teams/')
            .then(response => {
                this.setState({ Teams: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
           
    }

    teamsList() {
        return this.state.Teams.map(currentteams => {
            return <Teams teams={currentteams} />
        })
    }

    render() {
        return (
            <div className='widgetContainer transparentWidget'>
                <table className='table'>
                    <caption className='caption'> Île-de-France-B <br /> Carapateur D </caption>
                    <tr className='tr'>
                        <th className='bold th tableRank'> Ranking </th>
                        <th className='bold th tableName'> Nom </th>
                        <th className='th tablePlayed'> Jouées </th>
                        <th className='th tableWon'> Gagnées </th>
                        <th className='th tableLost'> Perdues </th>
                        <th className='bold th tablePoints'> Points </th>
                    </tr>
                    {this.teamsList()}
                </table>
            </div>
        );
    }
}

GroupStatsTable.defaultProps = {};

export default GroupStatsTable;

