cd %~dp0\backend
start /min nodemon server
cd %~dp0\frontend\src\discordBot
start node fetchGL.js
cd %~dp0\frontend
start /min npm start %~dp0\frontend