import React from 'react';
import './IncomingMatchesTable.css'

class IncomingMatchesTable extends React.Component {
    constructor(props) {
        super(props);
        this.openLink = () => { window.open(this.props.link); }
    }

    render() {
        return (
            <div>
                <table>
                    <caption> Incoming Matches </caption>
                    <tr>
                        <th> Nom </th>
                        <th> Difficulté </th>
                        <th> Date </th>
                    </tr>
                    <tr>
                        <td> LES ANTIHEALS </td>
                        <td> vert </td>
                        <td> 3/12 </td>
                    </tr>
                    <tr>
                        <td> LAITZETOILESFILANTES </td>
                        <td> rouge </td>
                        <td> 3/12 </td>
                    </tr>
                    <tr>
                        <td> Eclypsia2 </td>
                        <td> vert </td>
                        <td> 10/12 </td>
                    </tr>
                </table>
            </div>

        );
    }
}

IncomingMatchesTable.defaultProps = {};

export default IncomingMatchesTable;

