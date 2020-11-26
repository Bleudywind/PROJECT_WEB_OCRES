import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css'

export const Timer = ({startDay, startHour , startMinute, startSecond, fontSyzeNumber, fontSyzetext, backgroudColor, numberColor, textColor}) => {

    var myVar = setInterval(Timer, 1000);
    startDay = 0;
    startHour = 0;
    startMinute = 0;
    startSecond = 2;
    

    function Timer(){

        if (startDay ==0 && startHour ==0 && startMinute == 0 && startSecond == 0){
            document.getElementById("timer").style.display = "none";
            document.getElementById("code").style.visibility = "visible";
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

    }

    return (
        <div className="timerBlock">
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
                    bite
                </div>
            </div>
        </div>
    );

};

Timer.prototype = {

    startDay: PropTypes.string,
};