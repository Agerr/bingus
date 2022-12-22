const { Client, GatewayIntentBits, version } = require('discord.js')
const { readdirSync } = require('fs')
const { token } = require('../config.json')


// Create client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})


// Print runtime info
console.log(`Node.js\t\t${process.version}`)
console.log(`Discord.js\tv${version}\n`)


// Event handler
readdirSync('./src/events').forEach(file => {
    const event = require(`./events/${file}`)

    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args))
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args))
    }
})


// Login
client.login(token)