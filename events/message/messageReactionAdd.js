const {CommandInteraction} = require('discord.js');

module.exports = {
    name: "messageReactionAdd",

    async execute(reaction, user) {
        command.execute(interaction, client);

        const { commandName } = interaction;
        if (commandName == "greet") {
            interaction.reply('Reacting with null');
            const message = await interaction.fetchReply();
            message.react('😊');
            
            const guild = interaction.guild;
            const role = guild.roles.cache.find(role => role.name ===  "Skyblock");
            const member = interaction.member;
            await member.roles.add(role);
        }
    },
};