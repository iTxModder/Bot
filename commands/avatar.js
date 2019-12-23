const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("**Gerando avatar...**");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("00ff00")
        .setTitle("Avatar")
        .setFooter("Usuário " + message.author.tag)
        .setDescription("[Download do avatar]("+mentionedUser.displayAvatarURL+")")
        .setDescription(`:frame_photo: ${message.author}`);
        

        message.channel.send(embed)


    msg.delete();
}


  module.exports.config = {
    name: "avatar",
    description: " a member in the discord!",
    usage: "avatar",
    accessableby: "Members",
    aliases: ["ava"]
}
