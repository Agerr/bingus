const { readdirSync } = require('fs')

module.exports = (client) => {
    readdirSync('./src/events').forEach(file => {
        const event = require(`../events/${file}`)
    
        if (event.once) {
            client.once(event.name, (...args) => event.execute(client, ...args))
        } else {
            client.on(event.name, (...args) => event.execute(client, ...args))
        }
    })
}