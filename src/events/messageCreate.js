const { Events } = require('discord.js')

module.exports = {
    name: Events.MessageCreate,
    async execute(client, message) {
        if (message.author.bot) return
        if (message.content.toLowerCase().includes('bingus')) message.channel.send('https://tenor.com/view/bingus-gif-18557268')
    }
}