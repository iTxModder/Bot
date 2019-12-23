const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Pong")
        .addField(":robot: ", Math.floor(clientping) + "ms")
        .addField(":desktop:API: ", Math.floor(client.ping) + "ms")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)

        message.channel.send(pEmbed)
}

module.exports.help = {
    name: "ping"
    }
