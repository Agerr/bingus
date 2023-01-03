const { readdirSync } = require('fs')

module.exports = (client) => {
    readdirSync('./src/commands').forEach(file => {
        const command = require(`../commands/${file}`)
        client.commands.set(command.name, command)
    
        console.log(`Loaded ${file} as ${command.name}`)
    })
}