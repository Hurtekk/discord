const { Client, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "messageDelete",

    execute(message) {
        logChannel = message.guild.channels.cache.get('1176636955694477363');
        user = message.author;

        const messageDeleteEmbed = new EmbedBuilder()
            .setColor('#cc3131')
            .setAuthor({name: `Message Deleted |❌|`})
            .setDescription(`Message content: \`${message.content}\`\nMessage author: <@${user.id}>`)
            .setTimestamp();

        logChannel.send({ embeds: [messageDeleteEmbed] });
    },
};