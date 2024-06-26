const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const { user, guild } = member;
        const welcomeChannel = member.guild.channels.cache.get('1220675865159929877');

        const welcomeEmbed = new EmbedBuilder()
            .setColor('#424cdb')
            .setAuthor({name: 'User Joined!', iconURL: member.user.displayAvatarURL()})
            .setDescription(`Welcome <@!${member.id}> to **${guild.name}**.\nWe now have [\`${guild.memberCount}\`] members!`)
            .setTimestamp();

        welcomeChannel.send({ embeds: [welcomeEmbed] });

        const role = member.guild.roles.cache.find(r => r.name === 'User');

        member.roles.add(role);
    }
};
