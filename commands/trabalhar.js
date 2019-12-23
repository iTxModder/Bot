const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms")

const talkedRecently = new Set();

exports.run = async(bot, message, args) => {


    let cooldown = 30000
    let cooldown2 = 20000
    let cooldown3 = 10000
    //let lastwork = await db.fetch(`lastwork_${message.author.id}`)
    //let timeObj = ms(cooldown - (Date.now() - lastwork));
  
    let TotalMoons;
    let moons = await db.fetch(`moons_${message.author.id}`)
    if (moons === null) db.set(`moons_${message.author.id}`, 0);
    else TotalMoons = moons;
    if (TotalMoons === undefined) TotalMoons = 1;
    let amount = (Math.floor(Math.random() * 30) + 10  )
    let amount2 = (Math.floor(Math.random() * 90) + 10  )
    let amount3 = (Math.floor(Math.random() * 70) + 10  )
     
    
    if(message.member.roles.some(a => a.name === "👑 S1mple Nitro Classic")){
      let lastwork = await db.fetch(`lastwork_${message.author.id}`)
    let timeObj = ms(cooldown3 - (Date.now() - lastwork));
    if(lastwork !== null && cooldown3 - (Date.now() - lastwork) > 0) { 
    message.channel.send(`😴 Você está cansado de tanto trabalhar. Você precisa esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)
     } else {
    db.add(`moons_${message.author.id}`, amount2).then(i => {
     message.channel.send(`:rocket: |** ${message.author.username}, Você viajou para o espaço e recebeu ${amount} :crystal_ball:!**`)
      db.set(`lastwork_${message.author.id}`, Date.now());      
        
    })
     }
    } else { if(message.member.roles.some(h => h.name === "💸 Contributor")){
      let lastwork = await db.fetch(`lastwork_${message.author.id}`)
    let timeObj = ms(cooldown2 - (Date.now() - lastwork));
      if(lastwork !== null && cooldown2 - (Date.now() - lastwork) > 0) { 
    message.channel.send(`😴 Você está cansado de tanto trabalhar. Você precisa esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)
     } else {
    db.add(`moons_${message.author.id}`, amount3).then(i => {
     message.channel.send(`:rocket: |** ${message.author.username}, Você viajou para o espaço e recebeu ${amount} :crystal_ball:!**`)
      db.set(`lastwork_${message.author.id}`, Date.now());      
        
    })
     }
    } else {if(message.member.roles.some(i => i.name === "@everyone")){
      let lastwork = await db.fetch(`lastwork_${message.author.id}`)
    let timeObj = ms(cooldown - (Date.now() - lastwork));
      if(lastwork !== null && cooldown - (Date.now() - lastwork) > 0) { 
    message.channel.send(`😴 Você está cansado de tanto trabalhar. Você precisa esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)
     } else {
    db.add(`moons_${message.author.id}`, amount).then(i => {
     message.channel.send(`:rocket: |** ${message.author.username}, Você viajou para o espaço e recebeu ${amount} :crystal_ball:!**`)
      db.set(`lastwork_${message.author.id}`, Date.now());      
        
    })
     }
    }}
           }
}




module.exports.command = {
    name: 'trabalhar',
    description: 'Parte em trabalho para planetas à procura de moons',
    category: "economia",
    usage: '*trabalhar',
    enabled: true
}
