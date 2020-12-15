#!/bin/bash
start powershell npm start
start powershell node ./src/discordBot/fetchGL.js
start powershell nodemon ../backend/server.js