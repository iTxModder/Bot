//Creditos a Marquiim_
const ytdl = require("ytdl-core")
const pesquisa = require('yt-search')
const Discord = require('discord.js')
exports.run = (client, message, args) => {
    if (!message.member.voiceChannel) return message.reply(' Seria legal se voce entrasse no chat de voz né?')
    if (message.guild.me.voiceChannel) return message.reply('Eu já estou em um chat de voz.')

    let pes = args.join(" ")
    if(!pes) return message.reply('Voce não digitou um video valido')

    pesquisa(pes, async (erro, re) => {
        if (erro) console.log(erro)

       const videos = re.videos;
        const pVideo = videos[0];

       const con = await message.member.voiceChannel.join();
       const musica = await con.playStream(ytdl(pVideo.url, {filter: 'audioonly'}))

     musica.on('end', () => {
       message.channel.send('A musica acabou')
        message.guild.me.voiceChannel.leave()
     })

      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setTitle(`Tocando agora: ${pVideo.title}`)
      .setURL(`https://www.youtube.com${pVideo.url}`)
      .setDescription(`Duração: ${pVideo.timestamp.duration}`)
      .setColor('#3693f')
      message.channel.send(embed)
  })
  // m.play [nome do video]
}
