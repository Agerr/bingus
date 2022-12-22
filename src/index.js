const { Client, GatewayIntentBits, version } = require("discord.js")
const { token } = require("../config.json")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})

console.log(`Node.js\t${process.version}`);
console.log(`Discord.js\tv${version}\n`);

client.on("ready", () => {

    // Fetch all members
    client.guilds.cache.forEach(guild => {
        guild.members.fetch();
    });

    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async message => {
    
    if (message.author.bot) return;

    if (message.content.toLocaleLowerCase().includes("bingus")) message.channel.send("https://tenor.com/view/bingus-gif-18557268");
});

client.login(token);