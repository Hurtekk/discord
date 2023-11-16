const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("greet")
        .setDescription("Greet the user and add a reaction."),
    async execute(interaction) {
        // Odpowiedź tekstem
        await interaction.reply({ content: "Hello! I hope you're having a great day. 😊"}); 
    }
};

