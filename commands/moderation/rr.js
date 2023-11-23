const { ActionRowBuilder, SelectMenuBuilder, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rrtest")
        .setDescription("test")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const select = new StringSelectMenuBuilder()
            .setCustomId('Select Menu')
            .setPlaceholder('Make a selection!')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 1')
                    .setDescription('test')
                    .setValue('option 1'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 2')
                    .setDescription('test')
                    .setValue('option 2'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 3')
                    .setDescription('test')
                    .setValue('option 3'),
            );
    },
};

