module.exports={
    name:'ping',
    description:"Use to show ping of the bot",
    execute(message,args){
        message.channel.send("Pong!");
    } 
}