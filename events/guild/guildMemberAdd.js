const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const { user, guild } = member;
        const welcomeChannel = member.guild.channels.cache.get('1159608455125020742');

        const welcomeEmbed = new EmbedBuilder()
            .setColor('#00ff00')
            .setAuthor({name: 'User Joined!', iconURL: member.user.displayAvatarURL()})
            .setDescription(`Welcome <@${member.id}> to **${guild.name}**.\nWe now have [\`${guild.memberCount}\`] members!`)
            .setTimestamp();

        welcomeChannel.send({ embeds: [welcomeEmbed] });
    }
};
