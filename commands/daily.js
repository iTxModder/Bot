//novamente Creditos para TheBigerGamer
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async(bot, message, args) => {


let cooldown = 8.64e+7
let amount = 500
let amount2 = 50
let amount3 = 100
let amount4 = 150
let amount5 = 200
let amount6 = 250
let amount7 = 300
let amount8 = 400
let amount9 = 150
let amount10 = 100
let amount11 = 50

let lastdaily = await db.fetch(`lastdaily_${message.author.id}`)
if(lastdaily !== null && cooldown - (Date.now() - lastdaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastdaily));

    message.channel.send(`:no_entry_sign:**|** Você já pegou suas moons diarias. Você precisa esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)

} else { 
if(message.member.roles.some(a => a.name === "👑 S1mple Nitro Classic")){
message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como é **👑 S1mple Nitro Classic** ganhou mais ${amount} moons!`)

    db.set(`lastdaily_${message.author.id}`, Date.now());
    db.add(`moons_${message.author.id}`, (amount + amount9))

} else { 
    if(message.member.roles.some(b => b.name === "💸 Contributor")){
    message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como é **💸 Contributor** ganhou mais ${amount8} moons!`)
    
        db.set(`lastdaily_${message.author.id}`, Date.now());
        db.add(`moons_${message.author.id}`, (amount + amount8))
     
} else { 
    if(message.member.roles.some(c => c.name === "🌹 Supreme")){
    message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como é **🌹 Supreme** ganhou mais ${amount7} moons!`)
    
        db.set(`lastdaily_${message.author.id}`, Date.now());
        db.add(`moons_${message.author.id}`, (amount + amount7))
    
    } else { 
        if(message.member.roles.some(d => d.name === "🌻 Divine")){
        message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como é **🌻 Divine** ganhou mais ${amount6} moons!`)
        
            db.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`moons_${message.author.id}`, (amount + amount6))
            
        } else { 
            if(message.member.roles.some(e => e.name === "🌺 Ancion")){
            message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como é **🌺 Ancion** ganhou mais ${amount5} moons!`)
            
                db.set(`lastdaily_${message.author.id}`, Date.now());
                db.add(`moons_${message.author.id}`, (amount + amount5))
                
            } else { 
                if(message.member.roles.some(f => f.name === "🥀 Legend")){
                message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como você é **🥀 Legend** ganhou mais ${amount4} moons!`)
                
                    db.set(`lastdaily_${message.author.id}`, Date.now());
                    db.add(`moons_${message.author.id}`, (amount + amount4))
                    
                } else { 
                    if(message.member.roles.some(g => g.name === "🌷 Gladiator")){
                    message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como você é **🌷 Gladiator** ganhou mais ${amount3} moons!`)
                    
                        db.set(`lastdaily_${message.author.id}`, Date.now());
                        db.add(`moons_${message.author.id}`, (amount + amount3))
                        
                    } else { 
                        if(message.member.roles.some(h => h.name === "🍁 Herald")){
                        message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<a:AcceptGif:569565878551838750> **|** Como você é **🍁 Herald** ganhou mais &{amount2} moons!`)
                        
                            db.set(`lastdaily_${message.author.id}`, Date.now());
                            db.add(`moons_${message.author.id}`, (amount + amount2))
                            
                        } else { 
                            if(message.member.roles.some(i => i.name === "@everyone")){
                            message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.`)
                            
                                db.set(`lastdaily_${message.author.id}`, Date.now());
                                db.add(`moons_${message.author.id}`, amount)
                                
                            } else { 
                                if(message.member.roles.find(j => j.name === "new bubble popper")){
                                message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount8} moons diarias.`)
                                
                                    db.set(`lastdaily_${message.author.id}`, Date.now());
                                    db.add(`moons_${message.author.id}`, 15)
                                    
                                } else { 
                                    if(message.member.roles.find(k => k.name === "members")){
                                    message.channel.send(`<a:zMoonGif:580518832792272916> **|** Você recebeu suas ${amount8} moons diarias.`)
                                    
                                        db.set(`lastdaily_${message.author.id}`, Date.now());
                                        db.add(`moons_${message.author.id}`, 10)
                                        
                                        
                                    }}}}}}}}}}}}
    
}



module.exports.command = {
    name: 'daily',
    description: 'Pegue sua recompensa diária',
    category: "economia",
    usage: 'daily',
    enabled: true
}
