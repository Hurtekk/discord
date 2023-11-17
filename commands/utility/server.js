const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
			const serverEmbed = new EmbedBuilder()
			.setColor('#99009e')
			.setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
			.addFields(
				{ name: 'ID', value: interaction.guild.id },
				{ name: 'Member Count', value: String(interaction.guild.memberCount - interaction.guild.members.cache.filter(member => member.user.bot).size) },
			)
			.setThumbnail(interaction.guild.iconURL() )
			.setTimestamp()
			.setFooter({ text: `Command executed by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

			await interaction.reply({embeds: [serverEmbed]});
	},
};
