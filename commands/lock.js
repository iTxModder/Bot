//comando meio bugado mais ta ai
const ms = require('parse-ms');
exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['abrir', 'unlock'];
    if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Moderador") || message.member.roles.some(r => r.name === "S1mple Staff")) {

    console.log("|" + time + "|")
    if (!time) return message.reply('Diz uma duração de horas, minutos e segundos para bloquear o canal.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('**Lockdown levantado.**');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
              let timeobj = ms(time);
          console.log("|" + time + "|")
            message.channel.send(`**<:zAlert:580520339705167872> Canal bloqueado <:zAlert:580520339705167872>** por ${timeobj}.`).then(() => {

                client.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send('**Lockdown levantado.**')).catch(console.error);
                    delete client.lockit[message.channel.id];
                }, timeobj);

            }).catch(error => {
                console.log(error);
            });
        });
    }
  } else return message.reply('Não tens permissões suficientes.').catch(console.error);
};

module.exports.command = {
    name: 'lockdown',
    description: 'Bloqueia/desbloqueia um canal',
    category: "admin",
    usage: ['*lockdown <tempo>'],
    enabled: true
}
