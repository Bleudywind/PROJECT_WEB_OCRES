import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css'

export const Timer = ({startDay, startHour , startMinute, startSecond, fontSyzeNumber, fontSyzetext, backgroudColor, numberColor, textColor}) => {

    var myVar = setInterval(Timer, 1000);
    startDay = 0;
    startHour = 0;
    startMinute = 0;
    startSecond = 5;
    var tempo = 0;
    

    function Timer(){

        if (startDay ==0 && startHour ==0 && startMinute == 0 && startSecond == 0){
            document.getElementById("timer").style.display = "none";
            document.getElementById("code").style.visibility = "visible";
            document.getElementById("linkToornament").setAttribute("href", "https://www.toornament.com/fr/tournaments/4069172294700474368/stages/4083887645970456576/")
            codeToornament();
        }
        else{
            document.getElementById("Second").innerHTML = startSecond;
            document.getElementById("Minute").innerHTML = startMinute;
            document.getElementById("Hour").innerHTML = startHour;
            document.getElementById("Day").innerHTML = startDay;
            if (startSecond != 0){
                startSecond--;
                document.getElementById("Second").innerHTML = startSecond;
            }
            else{
                startSecond = 59;
                document.getElementById("Second").innerHTML = startSecond;
                if (startMinute != 0){
                    startMinute--;
                    document.getElementById("Minute").innerHTML = startMinute;
                }
                else{
                    startMinute = 59;
                    document.getElementById("Minute").innerHTML = startMinute;
                    if(startHour != 0){
                        startHour--;
                        document.getElementById("Hour").innerHTML = startHour;
                    }
                    else{
                        startHour = 23;
                        document.getElementById("Hour").innerHTML = startHour;
                        startDay--;
                        document.getElementById("Day").innerHTML = startDay;
                    }
                }
            }
        }
        
    }

    function codeToornament(){
        if (tempo != 5){
            tempo++;
        }
        else{
            document.getElementById("timer").style.display = "inline";
            document.getElementById("code").style.visibility = "hidden";
            document.getElementById("linkToornament").removeAttribute("href");
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
        <div className="timerBlock">
            <a id="linkToornament">
                <div className="borderTimer">
                    <div id="timer">
                        <div className="line">
                            <p className="textNextGame">Next game in :</p>
                        </div>
                        <div className="line">
                            <p id="Day" className="number"></p>
                            <p className="text">Days</p>
                            <p id="Hour" className="number"></p>
                            <p className="text">Hours</p>
                        </div>
                        <div className="line">
                            <p id="Minute" className="number"></p>
                            <p className="text">Minutes</p>
                            <p id="Second" className="number"></p>
                            <p className="text">Seconds</p>
                        </div>
                    </div>
                    <div id="code">
                        Toornament Code
                    </div>
                </div>
            </a> 
        </div>
    );

};

Timer.prototype = {

    startDay: PropTypes.string,
};