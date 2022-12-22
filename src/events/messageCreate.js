const { Events } = require('discord.js')
const { prefix } = require('../../config.json')

module.exports = {
    name: Events.MessageCreate,
    async execute(client, message) {
        // Custom bingus command
        if (message.author.id !== client.user.id && message.content.toLowerCase().includes('bingus'))
        message.reply('https://tenor.com/view/bingus-gif-18557268')
        

        if (message.author.bot || !message.content.startsWith(prefix)) return

        const args = message.content.slice(prefix.length).split(/ +/)
        const commandName = args.shift().toLowerCase()
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

        if (!command) return

        // Check if command is guid only
        if (command.guildOnly && message.guild === null) return message.reply('This command is guild only').catch()
      
        // Check for arguments
        if (command.args > args.length)
        return message.reply(`You didn't provide all arguments.\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``)

        // Execute command
        try {
            command.execute(message, args, client)
          } catch (error) {
            console.error(error)
            message.reply('There was an error trying to execute that command')
          }
    }
}