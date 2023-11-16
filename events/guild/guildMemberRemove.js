const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        const { user, guild } = member;
        const welcomeChannel = member.guild.channels.cache.get('1159608455125020742');

        const byeEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setAuthor({name: 'User Left!', iconURL: member.user.displayAvatarURL()})
            .setDescription(`<@${member.id}> left.\nWe now have [\`${guild.memberCount}\`] members!`)
            .setTimestamp();

        welcomeChannel.send({ embeds: [byeEmbed] });
    }
};
