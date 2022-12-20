const Discord = require(`discord.js`),
      client = new Discord.Client({ intents: 131071, partials: [`CHANNEL`]}),
      config = require(`../config.json`);

console.log(`\nNode.js ${process.version}\n`);
console.log(`Discord.js v${Discord.version}\n`);

client.on("ready", () => {

    // Fetch all members
    client.guilds.cache.forEach(guild => {
        guild.members.fetch();
    });

    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async message => {
    
    if (message.author.bot) return;

    message.channel.send("Someone sent a message :face_with_raised_eyebrow:?");
});

client.login(config.token);