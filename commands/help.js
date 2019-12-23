module.exports.run = async (client, message, args) => {
    const guildArray = client.guilds.map((guild) => {
    return `Comandos: *ban, *ping, *mute, *unmute, *clear, *anunciar *kiss, *serverinfo, *embed, *meme, *sorteio, *avatar, *abraço:, *daily, *buy, *work `
    })

    await message.author.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
    return message.channel.send("Mandei no seu privado os meu comandos !")
}

module.exports.help = {
    name: "help"
}
