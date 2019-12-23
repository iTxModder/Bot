const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async (client, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(2).join(' ');
    if(!reason) reason = "Nenhuma razão definitiva";

    let tomute = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]))
    if(!tomute) return message.reply('Mencione um membro valido desse servidor!')
    if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.reply('Você não tem permissão para usar este comando.')
    let muterole = message.guild.roles.find(`name`, "mute")

    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "mute",
                color: "#00000",
                permissions: []
            })
            message.guild.channeles.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });       
        }catch(e){
            console.log(e.stack);
        }
    }
    let mutetime = args[1]
    if(!mutetime) return message.reply("Coloque um tempo válido!")

    await(tomute.addRole(muterole.id));

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> Foi desmutado.`)
    }, ms(mutetime))

    let embed = new Discord.RichEmbed()
        .setTitle(`TempMute`)
        .addField(`Membro mutado:`,`${member.user.tag}`)
        .addField(`Mutado por:`, `${message.author.tag}`)
        .addField(`Motivo:`, `${reason}`)
        .addField(`Duração`, `${mutetime}`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM").setTimestamp()

        message.channel.send(embed)
}
