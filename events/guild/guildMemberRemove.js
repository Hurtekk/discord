const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        const { user, guild } = member;
        const welcomeChannel = member.guild.channels.cache.get('1220675852178558976');

        const byeEmbed = new EmbedBuilder()
            .setColor('#cc3131')
            .setAuthor({name: 'User Left!', iconURL: member.user.displayAvatarURL()})
            .setDescription(`<@!${member.id}> left.\nWe now have [\`${guild.memberCount}\`] members!`)
            .setTimestamp();

        welcomeChannel.send({ embeds: [byeEmbed] });
    }
};
