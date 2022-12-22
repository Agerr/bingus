const { Client, GatewayIntentBits, version, Collection } = require('discord.js')
const { readdirSync, readdir } = require('fs')
const { token } = require('../config.json')


// Create client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ]
})


// Print runtime info
console.log(`Node.js\t\t${process.version}`)
console.log(`Discord.js\tv${version}\n`)


// Load commands
client.commands = new Collection()
readdirSync('./src/commands').forEach(file => {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)

    console.log(`Loading ${file} as ${command.name}`)
})


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