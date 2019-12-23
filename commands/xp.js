const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
 let xp = await db.fetch(`xp_${message.author.id}`)
 
 const embed = new Discord.RichEmbed()
 .setTitle("XP")
 .setColor("#71fc00")
 .setDescription(`XP: ${xp}`)
 message.channel.send(embed)
}


module.exports.command = {
    name: 'xp',
    aliases: ['experience'],
    description: 'Veja o seu xp!',
    category: "leveling(deprecated)",
    usage: '*xp',
    enabled: false
}
