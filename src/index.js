const { Client, GatewayIntentBits, Partials, version, Collection } = require('discord.js')
const { token } = require('../config.json')


// Create client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ],
    partials: [
        Partials.Channel
    ]
})


// Print runtime info
console.log(`Node.js\t\t${process.version}`)
console.log(`Discord.js\tv${version}\n`)


// Define global collections
client.commands = new Collection()


// Require handlers
;['events', 'commands'].forEach(handler => {
    require(`./handlers/${handler}`)(client)
})


// Login
client.login(token)