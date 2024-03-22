const { Client, ActivityType } = require('discord.js');
const mongoose = require('mongoose');
const config = require('../../config.json');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} is now online.`);
        client.user.setActivity({ 
            name: "not real",
            type: ActivityType.PLAYING
         });
    }
}