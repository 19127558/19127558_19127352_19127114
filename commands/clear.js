module.exports = {
    name: 'clear',
    description: "Use to clear amount of messages",
    async execute(message, args) {
        if (!args[0]) return message.reply("Please stick this command with the amount of messages that you want to clear!");
        if (isNaN(args[0])) return message.reply("Please use nature number (1,2,3,...) only!");
        if (args[0] > 100) return message.reply("I can' clear more than 20 messages at a time! pay me to make me work harder :D");
        if (args[0] < 1) return message.reply("You must delete at least 1 message! :)");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}