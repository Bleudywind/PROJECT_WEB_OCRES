import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css'
import axios from 'axios';

export const Timer = props => {

    var myVar = setInterval(Timer, 1000);
    axios.get('http://localhost:5000/matches/nextMatch')
    .then(response => {
        props = response.data;
    })
    var startDay = 0;
    var startHour = 0;
    var startMinute = 0;
    var startSecond = 0;
    var tempo = 0;
    var init=0;

    
    function Timer() {

        if (init===0)
        {
            startDay = props[0].date.substring(8,10) - 10;
            startHour = props[0].date.substring(11,13) - 11;
            startMinute = props[0].date.substring(14,16) - 29;
            startSecond = props[0].date.substring(17,19) + 1 ;
            init = 1;
        }

        try {
            if (startDay === 0 && startHour === 0 && startMinute === 0 && startSecond === 0) {
                if (tempo === 0) {
                    document.getElementById("timer").style.display = "none";
                    document.getElementById("code").style.visibility = "visible";
                    document.getElementById("code").style.height = "auto";
                    document.getElementById("onclick").style.pointerEvents = "auto";
                    document.getElementById("onclick").style.cursor = "pointer";
                }
                codeToornament();
            }
            else {
                document.getElementById("onclick").style.pointerEvents = "none";
                document.getElementById("Second").innerHTML = startSecond;
                document.getElementById("Minute").innerHTML = startMinute;
                document.getElementById("Hour").innerHTML = startHour;
                document.getElementById("Day").innerHTML = startDay;
                if (startSecond !== 0) {
                    startSecond--;
                    document.getElementById("Second").innerHTML = startSecond;
                }
                else {
                    startSecond = 59;
                    document.getElementById("Second").innerHTML = startSecond;
                    if (startMinute !== 0) {
                        startMinute--;
                        document.getElementById("Minute").innerHTML = startMinute;
                    }
                    else {
                        startMinute = 59;
                        document.getElementById("Minute").innerHTML = startMinute;
                        if (startHour !== 0) {
                            startHour--;
                            document.getElementById("Hour").innerHTML = startHour;
                        }
                        else {
                            startHour = 23;
                            document.getElementById("Hour").innerHTML = startHour;
                            startDay--;
                            document.getElementById("Day").innerHTML = startDay;
                        }
                    }
                }
            }
        } catch (error) {
            clearInterval(myVar);
        }


    }

    function copyLink() {
        document.getElementById("copytext").style.display = "inline";
        var to_cpy = document.getElementById("copytext");
        to_cpy.select();
        document.execCommand('copy');
        document.getElementById("copytext").style.display = "none";

    }

    function codeToornament() {

        if (tempo !== 5) {
            tempo++;
        }
        else {
            document.getElementById("timer").style.display = "inline";
            document.getElementById("code").style.visibility = "hidden";
            document.getElementById("code").style.height = "0";
            document.getElementById("linkToornament").disabled = true;
            document.getElementById("onclick").style.cursor = "auto";
            tempo = 0;
            /* 
            GET TIME UNTIL NEXT GAME
            */
            startDay = 0;
            startHour = 0;
            startMinute = 0;
            startSecond = 5;
        }
    }

    return (
        <div id="linkToornament">
            <div onClick={() => copyLink()} id="onclick" className="borderTimer widgetContainer">
                <div id="timer">
                    <div className="line">
                        <p className="textNextGame">Next game in :</p>
                    </div>
                    <div className="line">
                        <p id="Day" className="number"></p>
                        <p className="texts">Days</p>
                        <p id="Hour" className="number"></p>
                        <p className="texts">Hours</p>
                    </div>
                    <div className="line">
                        <p id="Minute" className="number"></p>
                        <p className="texts">Minutes</p>
                        <p id="Second" className="number"></p>
                        <p className="texts">Seconds</p>
                    </div>
                </div>
                <div id="code">
                    Toornament Code
                        <textarea id="copytext" style={{ display: "none" }}>
                        text à copier
                        </textarea>
                </div>
            </div>
        </div>
    );

};

export default Timer;

Timer.prototype = {

    startDay: PropTypes.string,
};