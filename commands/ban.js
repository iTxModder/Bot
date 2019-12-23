const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Você não tem **permissão** suficiente !")
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !")
    if(!member.bannable)
      return message.reply("Eu não posso banir esse usuário, o cargo dele e superior ao meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o: ${error}`))

      message.channel.send(`${message.author}`)

      let pEmbed = new Discord.RichEmbed()
          .setTitle(":hammer: Ban")
          .addField("Membro Banido:", `${member.user.tag}`)
          .addField("Banido por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED").setTimestamp()

          message.channel.send(pEmbed)
          
}

module.exports.help = {
    name: "ban"
}
