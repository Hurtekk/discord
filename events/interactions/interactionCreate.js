const {CommandInteraction} = require('discord.js');

module.exports = {
    name: "interactionCreate",

    async execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) {
            interaction.reply({content: "outdated command"});
        }

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