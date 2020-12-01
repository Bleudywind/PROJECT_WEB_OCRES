import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css'

export const Timer = ({ startDay, startHour, startMinute, startSecond, fontSyzeNumber, fontSyzetext, backgroudColor, numberColor, textColor }) => {

    var myVar = setInterval(Timer, 1000);
    startDay = 0;
    startHour = 0;
    startMinute = 0;
    startSecond = 20;
    var tempo = 0;


    function Timer() {

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
            startSecond = 4;
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