const { Client } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    on: true,
    execute(message) {
        const messageChannel = message.guild.channels.cache.get('1170073523801301002');
        if (message.content === "tak") {
            messageChannel.send("nie");
        }
    }
}