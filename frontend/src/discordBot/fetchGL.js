const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const Token = process.env.TOKEN;

client.login(Token);

client.on("message", message => {
    if(message.channel.id == "787646258134646794") {
        console.log(message.content)
    }
});


