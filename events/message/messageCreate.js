const { Client } = require('discord.js');

const cooldowns = new Map();

module.exports = {
    name: 'messageCreate',
    on: true,
    execute(message) {
        const messageChannel = message.guild.channels.cache.get('1173943621179953253');

        if (message.author.bot) {
            return;
        }

        if (cooldowns.has(message.author.id)) {
            const expirationTime = cooldowns.get(message.author.id);
            
            if (Date.now() < expirationTime) {
                return;
            }
        }

        const cooldownTime = 3 * 60 * 1000;
        cooldowns.set(message.author.id, Date.now() + cooldownTime);

        if (message.content.toLowerCase() === "tak") {
            messageChannel.send("nie");
        } else if (message.content.toLowerCase() === "nie") {
            messageChannel.send("tak");
        } 
    }
}
