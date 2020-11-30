import React from 'react';
import './GroupStatsTable.css'

class GroupStatsTable extends React.Component {
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
                    <tr className='tr'>
                        <td className='bold td  tableRank'> 1 </td>
                        <td className='bold td tableName'> Le Chenil </td>
                        <td className='td tablePlayed'> 6 </td>
                        <td className='td tableWon'> 4 </td>
                        <td className='td tableLost'> 2 </td>
                        <td className='bold td tablePoints'> 12 </td>
                    </tr>
                    <tr className='tr'>
                        <td className='bold td  tableRank'> 2 </td>
                        <td className='bold td tableName'> Esteemo </td>
                        <td className='td tablePlayed'> 6 </td>
                        <td className='td tableWon'> 3 </td>
                        <td className='td tableLost'> 3 </td>
                        <td className='bold td tablePoints'> 9 </td>
                    </tr>
                    <tr className='tr'>
                        <td className='bold td  tableRank'> 3 </td>
                        <td className='bold td tableName'> Esteemo </td>
                        <td className='td tablePlayed'> 6 </td>
                        <td className='td tableWon'> 3 </td>
                        <td className='td tableLost'> 3 </td>
                        <td className='bold td tablePoints'> 9 </td>
                    </tr>
                    <tr className='tr'>
                        <td className='bold td  tableRank'> 4 </td>
                        <td className='bold td tableName'> Esteemo </td>
                        <td className='td tablePlayed'> 6 </td>
                        <td className='td tableWon'> 3 </td>
                        <td className='td tableLost'> 3 </td>
                        <td className='bold td tablePoints'> 9 </td>
                    </tr>
                    <tr className='tr'>
                        <td className='bold td  tableRank'> 5 </td>
                        <td className='bold td tableName'> Esteemo </td>
                        <td className='td tablePlayed'> 6 </td>
                        <td className='td tableWon'> 3 </td>
                        <td className='td tableLost'> 3 </td>
                        <td className='bold td tablePoints'> 9 </td>
                    </tr>
                    <tr className='tr'>
                        <td className='bold td  tableRank'> 6 </td>
                        <td className='bold td tableName'> Esteemo </td>
                        <td className='td tablePlayed'> 6 </td>
                        <td className='td tableWon'> 3 </td>
                        <td className='td tableLost'> 3 </td>
                        <td className='bold td tablePoints'> 9 </td>
                    </tr>
                </table>
            </div>
        );
    }
}

GroupStatsTable.defaultProps = {};

export default GroupStatsTable;

