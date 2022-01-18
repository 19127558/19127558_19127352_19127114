module.exports = {
    name: 'ban',
    description: "Use to ban a member!",
    execute(message, args) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const mem = message.mentions.users.first();
            if (mem) {
                const memTarger = message.guild.members.cache.get(mem.id);
                memTarger.ban('Banned by administrator');
                message.channel.send(`<@${mem.user.id}>  has been banned! :)`);
            } else {
                message.channel.send("You can't ban that member! :)")
            }
        } else {
            message.channel.send("You don't have that permission! you're just a fkin clown in the circus :)")
        }
    }
}