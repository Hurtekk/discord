const { Client } = require('discord.js');
const fs = require('fs');
const moment = require('moment');

module.exports = {
    name: 'messageCreate',
    on: true,
    execute(message) {
        const messageChannel = message.guild.channels.cache.get('1170073523801301002');
        if (message.content === "tak") {
            messageChannel.send("nie");
        }
        const handleTime = (timestamp) => moment(timestamp).format("DD/MM/YYYY - hh:mm:ss a").replace("pm", "PM").replace("am", "AM"); 
        const attachment = message.attachments.first();

        if(message.content === ""){
            fs.appendFile('./logs/messagesLogs.txt', `${handleTime(message.timestamp)} ${message.author.username} : ${attachment.name} ${attachment.url + '\n'}`, (err) => {
                if (err) throw err;
            });
        } else {
            fs.appendFile('./logs/messagesLogs.txt', `${handleTime(message.timestamp)} ${message.author.username} : ${message.content + '\n'}`, (err) => {
                if (err) throw err;
            });
        }
    }
}