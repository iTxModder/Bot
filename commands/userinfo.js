const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR')
const status = {
  online: "Online",
  idle: "Ausente",
  dnd: "Não Pertube",
  offline: "Offline/Invisível"
};
const bot = {
  false: "Não.",
  true: "Sim."
};
exports.run = (client, msg, args) => {
  const member = msg.mentions.members.first() || msg.guild.member(args[0]) || msg.member;
  if (!member) return msg.reply("Porfavor, mencione um usuário válido ou coloque o ID");

  const embed = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.displayAvatarURL}`)
    .addField("🏷 Apelido:", `${member.nickname !== null ? `${member.nickname}` : "Nenhum"}`, true)
    .addField(":robot: Bot:", `${bot[member.user.bot]}`, true)
    .addField("💻 Status:", `${status[member.user.presence.status]}`, true)
    .addField("🕹 Jogando:", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Nada"}`, true)
    .addField("📆 Entrou Em:", `${moment(member.joinedAt).format("LLLL")}`, true)
    .addField("🌟 Criado em:", `${moment(member.user.createdAt).format("LLLL")}`, true)
    .addField("👑 Cargos:", `${member.roles.size === 1 ? 'Nenhum' : member.roles.filter(role => role.name != '@everyone').map(role => role.name).join(', ')}.`, true)
    .addField("🌎 Servidores em Comum:", `${client.guilds.filter(a => a.members.get(member.user.id)).map(a => a.name).join(', ')}`, true)

  msg.channel.send(embed);
};



module.exports.command = {
    name: 'userinfo',
    description: 'Mostra as informações de um usuario',
    category: "info",
    usage: ['*userinfo <usuario>'],
    enabled: true
}
