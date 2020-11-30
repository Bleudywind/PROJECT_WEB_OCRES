import React from 'react';
import './Scouting.css';

import MVB from './MVB';



class Scouting extends React.Component {

   

    render() {
        return(
            <div id="Scouting">
                <div id="border">
                    <div id="SummonerName">
                        {this.props.Data.summonerName}
                    </div>
                    <div id="positionRank">
                        <img src={this.props.Data.imgMainPosition} id="PosImg"/>
                        <img src={this.props.Data.rank.imgRank} id="RankImg"/>
                        <div id="textRank">
                            <div id="rankName">{this.props.Data.rank.rankName}</div>
                            <div id="LP">{this.props.Data.rank.LP} LP</div>
                            <div id="winLose">
                                {this.props.Data.rank.win}W {this.props.Data.rank.lose}L 
                                <div id="winrate">
                                    {this.props.Data.rank.winrate}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mostValuableBans">
                        <div id="mvbTitle">MOST VALUABLE BANS</div>
                        <div id="MVBContainer">
                            <div className="line">
                                <MVB bans={this.props.Data.Bans[0]}/>
                                <MVB bans={this.props.Data.Bans[2]}/>
                            </div>
                            <div className="line">
                                <MVB bans={this.props.Data.Bans[1]}/>
                                <MVB bans={this.props.Data.Bans[3]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Scouting;