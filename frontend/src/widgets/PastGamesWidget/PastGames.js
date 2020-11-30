import React from 'react'
import './PastGames.css'
import { ResponsiveContainer, LineChart, Line, XAxis, Label, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PastGamesData from './PastGamesData.json'

class PastGames extends React.Component {

    render() {
        return (
            <div class='display widgetContainer'>
                <ResponsiveContainer>
                    <LineChart data={PastGamesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke='#86a0b5' />
                        <XAxis dataKey="name" stroke='#86a0b5' >
                        <Label value="Average gold difference vs. lane opponent" stroke='#86a0b5' offset={460} position="insideBottom" />
                        </XAxis>
                        <YAxis stroke='#86a0b5' />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Soudidou92i" stroke="#00d084" />
                        <Line type="monotone" dataKey="FRShark110" stroke="#f1c22a" />
                        <Line type="monotone" dataKey="king of terra" stroke="#44a4f0" />
                        <Line type="monotone" dataKey="Ezveeee" stroke="#ff4c69" />
                        <Line type="monotone" dataKey="Bleudywind" stroke="#ff7f53" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default PastGames;