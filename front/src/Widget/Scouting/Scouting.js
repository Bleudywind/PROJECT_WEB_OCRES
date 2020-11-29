import React from 'react';
import './Scouting.css';
import Position from '../../img/Position/Top.png';
import imageRank from '../../img/Rank/Season_2019_-_Gold_3.png';
import MVB from './MVB';
import Garen from '../../img/Champion/GarenSquare.png';
import Gnar from '../../img/Champion/GnarSquare.png';
import Lulu from '../../img/Champion/LuluSquare.png';
import Tryndamere from '../../img/Champion/TryndamereSquare.png';


class Scouting extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            summonerName: 'Martinounux',
            imgMainPosition: Position,
            rank: {
                imgRank: imageRank,
                rankName: 'Gold III',
                LP: '0',
                win: '53',
                lose: '45',
                winrate: '54.0'
            },
            Bans: [
                {
                    championImg: Garen,
                    win: '21',
                    lose: '7',
                    winrate: '75',
                    kda: '5.00'
                },
                {
                    championImg: Lulu,
                    win: '12',
                    lose: '8',
                    winrate: '60',
                    kda: '2.53'
                },
                {
                    championImg: Gnar,
                    win: '10',
                    lose: '9',
                    winrate: '53',
                    kda: '3.24'
                },
                {
                    championImg: Tryndamere,
                    win: '6',
                    lose: '9',
                    winrate: '40',
                    kda: '1.50'
                }
            ]
        };
    }

   

    render() {
        return(
            <div id="Scouting">
                <h1>SCOUTING</h1>
                <div id="border">
                    <div id="SummonerName">
                        {this.state.summonerName}
                    </div>
                    <div id="positionRank">
                        <img src={this.state.imgMainPosition} id="PosImg"/>
                        <img src={this.state.rank.imgRank} id="RankImg"/>
                        <div id="textRank">
                            <div id="rankName">{this.state.rank.rankName}</div>
                            <div id="LP">{this.state.rank.LP} LP</div>
                            <div id="winLose">
                                {this.state.rank.win}W {this.state.rank.lose}L 
                                <div id="winrate">
                                    {this.state.rank.winrate}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mostValuableBans">
                        <div id="mvbTitle">MOST VALUABLE BANS</div>
                        <div id="MVBContainer">
                            <div className="line">
                                <MVB bans={this.state.Bans[0]}/>
                                <MVB bans={this.state.Bans[2]}/>
                            </div>
                            <div className="line">
                                <MVB bans={this.state.Bans[1]}/>
                                <MVB bans={this.state.Bans[3]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Scouting;