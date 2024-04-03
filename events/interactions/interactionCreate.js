const { CommandInteraction } = require('discord.js');

module.exports = {
    name: "interactionCreate",

    async execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;
        if (!interaction.isCommand() && !interaction.isStringSelectMenu()) {
            return interaction.reply({ content: "Command not found or invalid interaction.", ephemeral: true });
        }

        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) {
                return interaction.reply({ content: "Outdated command", ephemeral: true });
            }

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                return interaction.reply({ content: "An error occurred while executing the command.", ephemeral: true });
            }
        }

        if (interaction.isStringSelectMenu()) {
            if (interaction.customId === 'rr') {
                interaction.reply({
                    content: `You selected ${interaction.values[0]}`,
                    ephemeral: true,
                });
            }
        }
        },
    };
