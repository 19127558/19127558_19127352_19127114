var version = '1.0.0';
module.exports = {
    name: "about",
    description: "Give Soda's information!",
    execute(message,args, Discord){
        const embed = new Discord.MessageEmbed()
        .setTitle('DJ Soda information')
        .addField('Version', version)
        .addField('Creator', 'Shane (Sharko)')
        .addField('Current server', message.guild.name)
        .setDescription("This bot is created as a GIFT for my Ame~ !")
        .setThumbnail('https://cdn.discordapp.com/attachments/886809226423447603/919160989788799006/portrait_study_110418_dj_soda_by_raphire_dc8nyfc-350t.png')
        .setColor("#ffbb00")
        .setImage('https://cdn.discordapp.com/attachments/886809226423447603/919156238326054932/download.jpg');
        message.channel.send({embeds: [embed]});
    }
  }
  