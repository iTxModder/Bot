const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let muteRole = message.guild.roles.find("name", "mute")
    let member = message.mentions.members.first()
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão!")
    if(!member) return message.channel.send(`${message.author.tag}, Mencione o membro que você quer desmutar. `)
     else{
         member.removeRole(muteRole)
            let embed = new Discord.RichEmbed()
                .setTitle('unmute')
                .addField('Membro desmutado:', `${member}`)
                .addField('Desmutado por:', `${message.author}`)
            message.channel.send(embed)
     }
}
