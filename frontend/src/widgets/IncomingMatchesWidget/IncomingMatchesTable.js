import React from 'react';
import './IncomingMatchesTable.css'

class IncomingMatchesTable extends React.Component {
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
                    <tr className='tr1'>
                        <td className='td1 bold tableName'> LES ANTIHEALS </td>
                        <td className='td1'>
                            <svg height="40" width="40">
                                <circle cx="20" cy="20" r="20" fill="#00d084" fill-opacity="0.8"/>
                            </svg>
                        </td>
                        <td className='td1 bold tableRank'> 3/12 </td>
                    </tr>
                    <tr className='tr1'>
                        <td className='td1 bold tableName'> LAITZETOILESFILANTES </td>
                        <td className='td1'>
                            <svg height="40" width="40">
                                <circle cx="20" cy="20" r="20" fill="#ff4c69" fill-opacity="0.8"/>
                            </svg>
                        </td>
                        <td className='td1 bold tableRank'> 3/12 </td>
                    </tr>
                    <tr className='tr1'>
                        <td className='td1 bold tableName'> Eclypsia2 </td>
                        <td className='td1'>
                            <svg height="50" width="50">
                                <circle cx="25" cy="25" r="20" fill="#ff7f53" fill-opacity="0.8" />
                            </svg>
                        </td>
                        <td className='td1 bold tableRank'> 10/12 </td>
                    </tr>
                </table>
            </div>

        );
    }
}

IncomingMatchesTable.defaultProps = {};

export default IncomingMatchesTable;

