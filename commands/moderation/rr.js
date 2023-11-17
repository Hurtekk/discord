const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rrtest")
        .setDescription("test")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const addRole = new ButtonBuilder()
            .setCustomId('addRole')
            .setLabel('Add Role')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder()
            .addComponents(addRole);

        await interaction.reply({
            components: [row],
        });
    }
};

