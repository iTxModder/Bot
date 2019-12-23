//TheBigerGamer
const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
 let userxp = await db.fetch(`xp_${message.author.id}`)
 if (userxp === null) await db.set(`xp_${message.author.id}`, 0);
 let userlevel = await db.fetch(`xplevel_${message.author.id}`)
 if (userlevel === null) await db.set(`xplevel_${message.author.id}`, 0);
  
  
}

module.exports.command = {
    name: 'xpconvert',
    description: 'Converta xp em moons!',
    category: ["leveling", "economy"],
    usage: '*xpconvert <quantia>',
    enabled: true
}
