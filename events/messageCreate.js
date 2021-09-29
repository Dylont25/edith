module.exports = {
    name: 'messageCreate',
    async execute(message, bot) {
        try {
            if (message.author.bot) return;
        } catch (error) {
            bot.log('ERROR', `EE02 - ${error}`);
            return;
        }
    },
};