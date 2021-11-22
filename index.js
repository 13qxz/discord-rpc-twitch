const { Client, Intents, DiscordAPIError } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const prefix = "a!";


client.once('ready', () => {
	console.log('Ready!');
    
    client.user.setActivity("discord.gg/alone", {
        
        type:"STREAMING",

        url: "https://www.twitch.tv/alone"
    });
});


client.login(token);