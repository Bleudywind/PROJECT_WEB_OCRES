import React from 'react';
import './MVB.css'

class MVB extends React.Component {

    changeWinrateColor(Winrate) {
        if(Winrate >= 60) {
            return "#419bde";
        }
        else if (Winrate <= 40){
            return "#e45357";
        }
        else{
            return "#b6c4e0";
        }
    }

    render() {
        return(
            <div id="bansContainer">
                <img id="championImg" src={this.props.bans.championImg}/>
                <div id="MVBtext">
                    <div id="MVBWinLoseWinrate">
                        <div id="MVBWinLose">{this.props.bans.win}W {this.props.bans.lose}L</div>
                        <div id="MVBWinrate" style={{color : this.changeWinrateColor(this.props.bans.winrate)}}>{this.props.bans.winrate}%</div>
                    </div>
                    <div id="MVBKDA">{this.props.bans.kda}  KDA</div>
                </div>
            </div>
        );
    }

}

export default MVB;