const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const embedmsg = args.join(" ");

    let specifyembed = new Discord.RichEmbed()
        .setColor(0xF55D5D)
        .setDescription(`${message.author}, Por favor especifica algo para fazer o embed`)
        .setTimestamp();

    if (!args[0]) return message.channel.send(specifyembed);

    let embedsay = new Discord.RichEmbed()
        .setColor('#7200eb')
        .setDescription(`${embedmsg}`);

    message.channel.send(embedsay);
};

module.exports.command = {
    name: 'embed',
    description: 'Faz um embed com uma mensagem',
    usage: '*embed <mensagem>',
    category: "outros",
    enabled: true
}
