import React from 'react';
import './GroupStatsTable.css'

class GroupStatsTable extends React.Component {
    constructor(props) {
        super(props);
        this.openLink = () => { window.open(this.props.link); }
    }

    render() {
        return (
            <div>
                <table>
                    <caption> Île-de-France-B Carapateur D</caption>
                    <tr>
                        <th class='bold'> Ranking </th>
                        <th class='bold'> Nom </th>
                        <th> Jouées </th>
                        <th> Gagnées </th>
                        <th> Perdues </th>
                        <th class='bold'> Points </th>
                    </tr>
                    <tr>
                        <td class='bold'> 1 </td>
                        <td class='bold'> Le Chenil </td>
                        <td> 6 </td>
                        <td> 4 </td>
                        <td> 2 </td>
                        <td class='bold'> 12 </td>
                    </tr>
                    <tr>
                        <td class='bold'> 2 </td>
                        <td class='bold'> Esteemo </td>
                        <td> 6 </td>
                        <td> 3 </td>
                        <td> 3 </td>
                        <td class='bold'> 9 </td>
                    </tr>
                    <tr>
                        <td class='bold'> 3 </td>
                        <td class='bold'> Esteemo </td>
                        <td> 6 </td>
                        <td> 3 </td>
                        <td> 3 </td>
                        <td class='bold'> 9 </td>
                    </tr>
                    <tr>
                        <td class='bold'> 4 </td>
                        <td class='bold'> Esteemo </td>
                        <td> 6 </td>
                        <td> 3 </td>
                        <td> 3 </td>
                        <td class='bold'> 9 </td>
                    </tr>
                    <tr>
                        <td class='bold'> 5 </td>
                        <td class='bold'> Esteemo </td>
                        <td> 6 </td>
                        <td> 3 </td>
                        <td> 3 </td>
                        <td class='bold'> 9 </td>
                    </tr>
                </table>
            </div>
        );
    }
}

GroupStatsTable.defaultProps = {};

export default GroupStatsTable;

