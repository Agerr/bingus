module.exports = {
  name: 'ping',
  description: 'Responds with the bot latency and API latency',
  aliases: ['latency'],
  usage: '',
  guildOnly: false,
  args: 0,
  permissions: {
    bot: [],
    user: [],
  },
  async execute(message, args, client) {
    await message.channel.send('Calculating...').then(msg => {
        msg.edit(`Bot latency: \`${msg.createdTimestamp - message.createdTimestamp}ms\`, Bot-API latency: \`${client.ws.ping}ms\``)
    })
  }
}