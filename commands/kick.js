module.exports = {
    name: 'kick',
    description: "Use to kick a member!",
    execute(message, args) {
        if (message.member.permissions.has("KICK_MEMBERS")) {
            const mem = message.mentions.users.first();
            if (mem) {
                const memTarger = message.guild.members.cache.get(mem.id);
                memTarger.kick('Kicked by administrator');
                message.channel.send(`<@${mem.user.id}>  has been kicked! :)`);
            } else {
                message.channel.send("You can't kick that member! :)")
            }
        } else {
            message.channel.send("You don't have that permission! you're just a fkin clown in the circus :)")
        }
    }
}