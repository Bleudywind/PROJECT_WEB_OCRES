import React from 'react';
import './IncomingMatchesTable.css'

class IncomingMatchesTable extends React.Component {
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
                        <td>
                            <svg height="40" width="40">
                                <circle cx="20" cy="20" r="20" fill="green" />
                            </svg>
                        </td>
                        <td> 3/12 </td>
                    </tr>
                    <tr>
                        <td> LAITZETOILESFILANTES </td>
                        <td>
                            <svg height="40" width="40">
                                <circle cx="20" cy="20" r="20" fill="red" />
                            </svg>
                        </td>
                        <td> 3/12 </td>
                    </tr>
                    <tr>
                        <td> Eclypsia2 </td>
                        <td>
                            <svg height="50" width="50">
                                <circle cx="25" cy="25" r="20" fill="orange" />
                            </svg>
                        </td>
                        <td> 10/12 </td>
                    </tr>
                </table>
            </div>

        );
    }
}

IncomingMatchesTable.defaultProps = {};

export default IncomingMatchesTable;

