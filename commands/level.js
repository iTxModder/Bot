const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
 let userxp = await db.fetch(`xp_${message.author.id}`)
 if (userxp === null) await db.set(`xp_${message.author.id}`, 0);
 let userlevel = await db.fetch(`xplevel_${message.author.id}`)
 if (userlevel === null) await db.set(`xplevel_${message.author.id}`, 0);
  
  var userxplevelmax = await db.fetch(`xplevelmax_${message.author.id}`)
  var userxpneed = Math.floor(userxplevelmax - userxp)
 
 let userxp_ = message.mentions.members.first();


if(!userxp_){
         const embed = new Discord.RichEmbed()
 .setTitle("Status de Level")
 .setColor("#71fc00")
 .addField(`XP: 
${userxp}`, "----------------------")
 .setDescription("----------------------")
 .addField(`Level:
${userlevel}`, "----------------------")
  .addField(`XP para o próximo nível:
${userxpneed}`, "----------------------")
 message.channel.send(embed)



} else {

    let memberxp = await db.fetch(`xp_${userxp_.id}`);
    if (memberxp === null) await db.set(`xp_${userxp_.id}`, 0);
    let memberlevel = await db.fetch(`xplevel_${userxp_.id}`)
    if (memberlevel === null) await db.set(`xplevel_${userxp_.id}`, 0);
    var memberxplevelmax = await db.fetch(`xplevelmax_${userxp_.id}`)
    var memberxpneed = Math.floor(memberxplevelmax - memberxp)

         const embedmember = new Discord.RichEmbed()
 .setTitle("Status de Level")
 .setColor("#71fc00")
 .addField(`XP: 
${memberxp}`, "----------------------")
 .setDescription("-------------")
 .addField(`Level:
${memberlevel}`, "----------------------")
  .addField(`XP para o próximo nível:
${memberxpneed}`, "----------------------")
 message.channel.send(embedmember)
}
 
// const embed = new Discord.RichEmbed()
// .setTitle("Status de Leveling")
// .setColor("#71fc00")
// .addField(`XP: 
//${xp}`, "----------------------")
// .setDescription("-------------")
// .addField(`Level:
//${level}`, "----------------------")
// message.channel.send(embed)
}


module.exports.command = {
    name: 'level',
    description: 'Veja o seu level e xp!',
    category: "leveling",
    usage: '*level',
    enabled: true
}
