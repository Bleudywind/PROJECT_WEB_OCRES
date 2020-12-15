const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const Token = process.env.TOKEN;
const axios = require('axios');

client.login(Token);

client.on("message", message => {
    if(message.channel.id == "787646258134646794") {
        const messageToSend = {message: message.content}
        console.log(message.content)
        axios.post('http://localhost:5000/annonces/add', messageToSend);
    }
});


