//creditos do comando para TheBigerGamer
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {


    let author = db.fetch(`moons_${message.author.id}`)
    
    if (args[0]) {
      message.reply("<:errado:580518832939204628> **|** Você precisa de especificar um item para comprar.")
    

    } else if (args[0] == 'Auto Claim Card') {
        if (!message.guild.roles.find("name", '💳 Auto Claim Card')) return message.channel.send('<:errado:580518832939204628> **|** Não encontrei um cargo de nome `💳 Auto Claim Card `, verifique o problema com a Staff.')
        if (author < 10000) return message.channel.send('<:errado:580518832939204628> **|** Você precisa de pelo menos `500:Moon:` para comprar o cargo 💳 Auto Claim Card .') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '<:certo:580518832611786753> **|** Você comprou o cargo 💳 Auto Claim Card  com sucesso por `500:Moon:`'))

        db.subtract(`moons_${message.author.id}`, 10000)
        message.channel.send(message.author.tag + '<:certo:580518832611786753> **|** Você comprou o cargo 🍁 Herald com sucesso por `700:Moon:`')
    
    } else if(args[0] == 'Gladiator') {
        if (!message.guild.roles.find("name", '🌷 Gladiator')) return message.channel.send('<:errado:580518832939204628> **|** Não encontrei um cargo de nome `🌷 Gladiator`, verifique o problema com a Staff..')
        if (author < 15000) return message.channel.send('<:errado:580518832939204628> **|** Precisas de pelo menos `15000:Moon:` para comprar o role 🌷 Gladiator.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '🌷 Gladiator')) // get the role & add it

        db.subtract(`moons_${message.author.id}`, 15000)
        message.channel.send(message.author.tag + '<:certo:580518832611786753> **|** Você comprou o cargo 🌷 Gladiator com sucesso por `15000:Moon:`')
    }





}

module.exports.command = {
    name: 'buy',
    description: 'Compra itens.',
    category: "economia",
    usage: '*buy <item>',
    enabled: true
}
