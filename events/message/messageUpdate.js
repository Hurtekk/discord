const { Client, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'messageUpdate',
    on: true,
    execute(oldMessage, newMessage) {
        logChannel = newMessage.guild.channels.cache.get('1176636955694477363');
        user = newMessage.author;

        const messageEditedEmbed = new EmbedBuilder()
            .setColor('#a25cf7')
            .setAuthor({name: 'Message Edited |♻️|'})
            .setDescription(`Message Before: \`${oldMessage.content}\`\nMessage After: \`${newMessage.content}\`\nMessage author: <@${user.id}>`)
            .setTimestamp();

        logChannel.send({ embeds: [messageEditedEmbed] });
    }
}