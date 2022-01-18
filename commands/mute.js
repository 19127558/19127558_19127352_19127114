const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Use to mute a member!",
    execute(message, args) {
        if (message.member.permissions.has("MUTE_MEMBERS")) {
            const mem = message.mentions.users.first();
            if (mem) {
                const memTarger = message.guild.members.cache.get(mem.id);
                let mainRole = message.guild.roles.cache.find(r => r.name === "member");
                let muteRole = message.guild.roles.cache.find(r => r.name === "mute");

                if (!args[1]) {
                    memTarger.roles.remove(mainRole.id);
                    memTarger.roles.add(muteRole.id);
                    message.channel.send(`<@${memTarger.user.id}> has been muted`);
                    return;
                }
                memTarger.roles.remove(mainRole.id);
                memTarger.roles.add(muteRole.id);
                message.channel.send(`<@${memTarger.user.id}> has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function () {
                    memTarger.roles.remove(muteRole.id);
                    memTarger.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send("I can't find that member! :(")
            }
        } else {
            message.channel.send("You don't have that permission! you're just a fkin clown in the circus :)")
        }
    }
}