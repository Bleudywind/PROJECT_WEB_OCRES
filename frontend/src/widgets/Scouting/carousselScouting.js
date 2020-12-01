import React from "react";
import Scouting from './Scouting';
import './carousselScouting.css'
import Garen from '../../img/Champion/GarenSquare.png';
import Gnar from '../../img/Champion/GnarSquare.png';
import Lulu from '../../img/Champion/LuluSquare.png';
import Tryndamere from '../../img/Champion/TryndamereSquare.png';
import Riven from '../../img/Champion/RivenSquare.png';
import Lux from '../../img/Champion/LuxSquare.png';
import Lucian from '../../img/Champion/LucianSquare.png';
import Tristana from '../../img/Champion/TristanaSquare.png';
import Elise from '../../img/Champion/EliseSquare.png';
import Top from '../../img/Position/Top.png';
import Jungle from '../../img/Position/Jungle.png';
import Mid from '../../img/Position/Mid.png';
import Bottom from '../../img/Position/Bottom.png';
import Support from '../../img/Position/Support.png';
import Gold3 from '../../img/Rank/Season_2019_-_Gold_3.png';
import Silver1 from '../../img/Rank/Season_2019_-_Silver_1.png';
import Bronze2 from '../../img/Rank/Season_2019_-_Bronze_2.png';
import Plat3 from '../../img/Rank/Season_2019_-_Platinum_3.png';
import Gold1 from '../../img/Rank/Season_2019_-_Gold_1.png';

class CarousselScouting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: [
                {
                    summonerName: 'Martinounux',
                    imgMainPosition: Top,
                    rank: {
                        imgRank: Gold3,
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
                },
                {
                    summonerName: 'lnSanee',
                    imgMainPosition: Jungle,
                    rank: {
                        imgRank: Gold1,
                        rankName: 'Gold I',
                        LP: '19',
                        win: '73',
                        lose: '62',
                        winrate: '54.0'
                    },
                    Bans: [
                        {
                            championImg: Elise,
                            win: '16',
                            lose: '10',
                            winrate: '62',
                            kda: '4.01'
                        },
                        {
                            championImg: Tristana,
                            win: '9',
                            lose: '11',
                            winrate: '45',
                            kda: '3.21'
                        },
                        {
                            championImg: Tryndamere,
                            win: '11',
                            lose: '8',
                            winrate: '58',
                            kda: '3.30'
                        },
                        {
                            championImg: Riven,
                            win: '3',
                            lose: '4',
                            winrate: '43',
                            kda: '3.96'
                        }
                    ]
                },
                {
                    summonerName: 'BA WE MON AMI',
                    imgMainPosition: Mid,
                    rank: {
                        imgRank: Silver1,
                        rankName: 'Silver I',
                        LP: '25',
                        win: '120',
                        lose: '139',
                        winrate: '46.0'
                    },
                    Bans: [
                        {
                            championImg: Lux,
                            win: '96',
                            lose: '83',
                            winrate: '54',
                            kda: '2.01'
                        },
                        {
                            championImg: Riven,
                            win: '26',
                            lose: '38',
                            winrate: '41',
                            kda: '1.69'
                        },
                        {
                            championImg: Lucian,
                            win: '7',
                            lose: '13',
                            winrate: '35',
                            kda: '1.84'
                        },
                        {
                            championImg: Tristana,
                            win: '6',
                            lose: '11',
                            winrate: '35',
                            kda: '1.23'
                        }
                    ]
                },
                {
                    summonerName: 'Minhtou',
                    imgMainPosition: Bottom,
                    rank: {
                        imgRank: Plat3,
                        rankName: 'Plat III',
                        LP: '24',
                        win: '10',
                        lose: '5',
                        winrate: '67'
                    },
                    Bans: [
                        {
                            championImg: Lucian,
                            win: '5',
                            lose: '3',
                            winrate: '63',
                            kda: '4.55'
                        },
                        {
                            championImg: Tristana,
                            win: '4',
                            lose: '1',
                            winrate: '80',
                            kda: '3.38'
                        },
                        {
                            championImg: Gnar,
                            win: '1',
                            lose: '3',
                            winrate: '25',
                            kda: '2.59'
                        },
                        {
                            championImg: Lulu,
                            win: '0',
                            lose: '4',
                            winrate: '0',
                            kda: '1.72'
                        }
                    ]
                },
                {
                    summonerName: 'Scandinavian God',
                    imgMainPosition: Support,
                    rank: {
                        imgRank: Bronze2,
                        rankName: 'Bronze II',
                        LP: '0',
                        win: '37',
                        lose: '36',
                        winrate: '51'
                    },
                    Bans: [
                        {
                            championImg: Lulu,
                            win: '21',
                            lose: '11',
                            winrate: '52',
                            kda: '4.50'
                        },
                        {
                            championImg: Lux,
                            win: '15',
                            lose: '12',
                            winrate: '56',
                            kda: '2.96'
                        },
                        {
                            championImg: Elise,
                            win: '6',
                            lose: '14',
                            winrate: '30',
                            kda: '1.90'
                        },
                        {
                            championImg: Riven,
                            win: '17',
                            lose: '16',
                            winrate: '52',
                            kda: '3.17'
                        }
                    ]
                },
            ],
            temp: 0
        }
    };

    changeRenderScouting(i) {

        if (i === '0') {

            if (this.state.temp !== 4) {
                this.setState({ temp: this.state.temp + 1 });
            }
            else {
                console.log('reset');
                this.setState({ temp: 0 });
            }
        }
        else {
            if (this.state.temp !== 0) {
                this.setState({ temp: this.state.temp - 1 });
            }
            else {
                this.setState({ temp: 4 });
            }
        }
    }



    render() {
        return (
            <div>
                <div id="caroussel">
                    <button id="leftButton" onClick={() => this.changeRenderScouting('1')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" viewBox="0 0 579.12 579.12" id="leftArrow">
                            <g id="Composant_2_1" data-name="Composant 2 – 1" transform="translate(289.56) rotate(45)">
                                <rect id="Rectangle_1" data-name="Rectangle 1" width="409" height="64" fill="#f1c22a" />
                                <g id="Composant_1_1" data-name="Composant 1 – 1" transform="translate(345.5 0.5)">
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width="409" height="64" transform="translate(0 409) rotate(-90)" fill="#f1c22a" />
                                </g>
                            </g>
                        </svg>
                    </button>
                    <Scouting Data={this.state.player[this.state.temp]} />
                    <button id="rightButton" onClick={() => this.changeRenderScouting('0')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" viewBox="0 0 579.12 579.12" id="rightArrow">
                            <g id="Composant_2_1" data-name="Composant 2 – 1" transform="translate(289.56) rotate(45)">
                                <rect id="Rectangle_1" data-name="Rectangle 1" width="409" height="64" fill="#f1c22a" />
                                <g id="Composant_1_1" data-name="Composant 1 – 1" transform="translate(345.5 0.5)">
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width="409" height="64" transform="translate(0 409) rotate(-90)" fill="#f1c22a" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>

        );
    }
}


export default CarousselScouting;