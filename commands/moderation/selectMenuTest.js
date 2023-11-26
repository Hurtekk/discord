const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("selectmenu")
        .setDescription("test")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const select = new StringSelectMenuBuilder()
            .setCustomId('rr')
            .setMinValues(1)
            .setPlaceholder('Make a selection!')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 1')
                    .setDescription('test')
                    .setValue('option1'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 2')
                    .setDescription('test')
                    .setValue('option2'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option3')
                    .setDescription('test')
                    .setValue('option3'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option4')
                    .setDescription('test')
                    .setValue('option4'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option5')
                    .setDescription('test')
                    .setValue('option5'),
            );

        const row = new ActionRowBuilder()
            .addComponents(select);

        await interaction.reply({
            content: 'Choose',
            components: [row],
        });
    },
};

