const Discord = require('discord.js');
const config = require('./config.json');
const ytdl = require('ytdl-core')

const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Olá meu prefixo é `* meus comandos sâo *ban, *ping, *mute, *unmute, *clear, *anunciar *kiss, *serverinfo, *embed, *meme, *sorteio, *avatar *abraço:) `")}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
  
  client.on('guildMemberAdd', member => {
      member.send('Seja bem vindo(a) ao servidor! leia as regras.')
  })
  
})

client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)
    client.user.setPresence({ game: { name: 'Bot oficial', type: 1, url: 'https://www.twitch.tv/pedroricardo'} });

    //0 = Jogando
    //1 = Transmitindo
    //2 = Ouvindo
    //3 = Assistindo
})

client.login(config.token)