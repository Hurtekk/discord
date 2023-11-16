const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
			const userEmbed = new EmbedBuilder()
			.setColor('#99009e')
			.setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
			.addFields(
				{ name: 'ID', value: interaction.user.id },
				{ name: 'Account Created', value: moment.utc(interaction.user.createdAt).format("dddd, MMMM Do YYYY") },
				{ name: 'Server Join Date', value: moment.utc(interaction.user.joinedAt).format("dddd, MMMM Do YYYY") },
			)
			.setThumbnail(interaction.user.displayAvatarURL())
			.setTimestamp()
			.setFooter({ text: `Command executed by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

			await interaction.reply({embeds: [userEmbed]});
	},
};
