const { Client, ActivityType } = require('discord.js');
const mongoose = require('mongoose');
const config = require('../../config.json');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        await mongoose.connect(config.mongodb || '', {
        });

        if(mongoose.connect){
            console.log('Connected to MongoDB');
        }

        console.log(`${client.user.tag} is now online.`);
        client.user.setActivity({ 
            name: "Minevalik",
            type: ActivityType.Watching, 
            url: 'https://www.youtube.com/channel/UCOQYccq6nFPCdliE12Ux1cg',
         });
    }
}