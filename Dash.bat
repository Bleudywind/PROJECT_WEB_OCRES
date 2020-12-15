cd %~dp0\backend
start /min nodemon server
cd %~dp0\frontend
start /min node .\src\discordBot\fetchGL.js
start /min npm start %~dp0\frontend