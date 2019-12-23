const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
    if (!args[0]){
        const msg = new Discord.RichEmbed()
        .setTitle('Comando: *ship')
        .setDescription(`Como usar:\n
**Sintaxe:** *ship <usuário1 e usuário2>.
**Exemplo:** *8444ship mrtaazer e mrtazer.`)
        .setColor('#dcf442');
        message.channel.send({ embed : msg });
        return;
    }

    
    let casal = message.content.split(" ").slice(1).join(" ");
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`:sparkling_heart: Vamos descobrir a porcentagem de amor entre **${casal}**. :sparkling_heart:`)

        message.channel.send({ embed : embed });

    let piadas = [
        "**1% [█..........]** Acho que não seria um belo casal... :slight_frown:",
        "**6% [█..........]** As possibilidades de ter este casal são quase impossíveis! :sob:",
        "**71% [████████...]** Eu apoiaria! :smile:",
        "**29% [███........]** Friendzone? :neutral_face:",
        "**26% [███........]** Triste não poder dizer que funciona... :no_mouth:",
        "**51% [██████.....]** Só falta eles conversarem mais! :wink:",
        "**50% [██████.....]** Se os dois se gostarem, só vai! :smirk:",
        "**39% [████.......]** Pode ser, quem sabe... :thinking:",
        "**47% [█████......]** É... talvez, eu acho... :slight_frown:",
        "**53% [██████.....]** Amigos... Mas quem sabe, né... :smirk:",
        "**80% [█████████..]** Seria surpreendente não ver os dois juntos... :smile:",
        "**100% [████████████]** Casal perfeito, já devem estar casados! :blush:"
        
    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.channel.send(piadas[piada]);

}
module.exports.help = {
  name: "ship"
}
