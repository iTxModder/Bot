const Discord = require ('discord.js')
exports.run = async (client, message, args, prefix) => {

    let embed = new Discord.RichEmbed()
    .setTitle('Deu um abraço ')
    .setImage('https://thumbs.gfycat.com/AntiqueScaryAustraliansilkyterrier-small.gif')
    message.channel.send(embed)
}
