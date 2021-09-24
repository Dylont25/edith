const { bot, Intents } = require('discord.js');
const { token } = require('./config.json');

const bot = new bot({ intents: [Intents.FLAGS.GUILDS] });

bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(token);