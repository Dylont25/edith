module.exports = {
	name: 'ready',
	once: true,
	execute(bot) {
		bot.log('SYSTEM', `Loaded successfully!`);
        bot.log('SYSTEM', `${bot.cmds} commands loaded.`);
        bot.log('SYSTEM', `${bot.events} events loaded.`);
        bot.log('SYSTEM', `${bot.guilds.cache.size} guilds loaded`);
	},
};