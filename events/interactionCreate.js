module.exports = {
	name: 'interactionCreate',
	async execute(interaction, bot) {
        if (!interaction.isCommand()) return;
        const command = bot.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            bot.log('ERROR', `EE01 - ${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
	},
};