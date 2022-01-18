module.exports = {
    name: 'unmute',
    description: "Use to unmute a member!",
    execute(message, args) {
        if (message.member.permissions.has("MUTE_MEMBERS")) {
            const mem = message.mentions.users.first();
            if (mem) {
                const memTarger = message.guild.members.cache.get(mem.id);
                let mainRole = message.guild.roles.cache.find(r => r.name === "member");
                let muteRole = message.guild.roles.cache.find(r => r.name === "mute");

                memTarger.roles.remove(muteRole.id);
                memTarger.roles.add(mainRole.id);

                message.channel.send(`<@${memTarger.user.id}> has been unmuted`)
            } else {
                message.channel.send("I can't find that member! :(")
            }
        } else {
            message.channel.send("You don't have that permission! you're just a fkin clown in the circus :)")
        }
    }
}