const { Events } = require('discord.js')

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`\nLogged in as ${client.user.tag}!\n`)
    }
}