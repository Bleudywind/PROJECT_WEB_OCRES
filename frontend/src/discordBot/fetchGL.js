const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NjkwMzE1MzU1NDYxMTI0MTE2.XnP1rg.FDHkpUkLtuFfzgZY5-p14Q45l84');


client.on("message", message => {
    if(message.channel.id == "787646258134646794") {
        console.log(message.content)
    }
});


