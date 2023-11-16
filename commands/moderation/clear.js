const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Clear an amount of messages.")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Amount of messages to clear')
                .setRequired(true)
        )
        .addUserOption(option =>
            option.setName('target')
                .setDescription('Select a target to clear their messages')
                .setRequired(false)
        ),
    async execute(interaction) {
        const { channel, options } = interaction;

        const amount = options.getInteger('amount');
        const target = options.getUser('target');

        const messages = await channel.messages.fetch({
            limit: amount + 1,
        });

        const responseEmbed = new EmbedBuilder()
            .setColor('#99009e');

            if (target) {
                let i = 0;
                const filtered = [];
    
                (await messages).filter((msg) => {
                    if (msg.author.id === target.id && amount > i) {
                        filtered.push(msg);
                        i++
                    }
                });

            await channel.bulkDelete(filtered).then(messages => {
                responseEmbed.setDescription(`Successfully deleted ${messages.size} messages from ${target.username}.`);
                interaction.reply({ embeds: [responseEmbed] });
            });
        } else {
            await channel.bulkDelete(amount, true).then(messages => {
                responseEmbed.setDescription(`Successfully deleted ${messages.size} messages from the channel.`);
                interaction.reply({ embeds: [responseEmbed] });
            });
        }
    }
};