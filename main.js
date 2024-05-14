const discord = require('discord.js');
const { Client, GatewayIntentBits  } = require('discord.js');
const channel = client.channels.cache.get('894700086242734103');

const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const config = require("./config")

const { formatMessage, formatChannelMessages } = require('./formatMessage');
const { getLastNMessages, getLastNMessagesChannel, getMostActiveUser } = require("./db"); 


bot.commands = new discord.Collection();

bot.login(config.token);


channel.send(messageContent)
  .then(() => console.log('Message envoyé avec succès'))
  .catch(error => console.error('Erreur lors de l\'envoi du message :', error));

bot.on("ready", async () => {
    console.log(`${bot.user.tag} est bien en ligne`);
});


bot.on("messageCreate", async (message) => {
    console.log("in message")
    if (message.author.bot) return; 
    if (!message.content.startsWith(config.prefix)) return; 

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    console.log("args",args)
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName);

    if (!command) return; // Ignore les commandes non reconnues

    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("Une erreur s'est produite lors de l'exécution de la commande.");
    }
});


bot.commands.set("/hey", {
    execute: async (message) => {
        await message.channel.send("Hey❤️");
    }
});

bot.commands.set("/who-am-i", {
    execute: async (message) => {
        const userInfo = `You are: ${message.author.username}\nYour id is: ${message.author.id}\nYour avatar is: ${message.author.avatarURL()}\nThis server id is: ${message.guild.id}`;
        await message.channel.send(userInfo);
    }
});


bot.commands.set("/show-message", {
    execute: async (message, args) => {
        const n = parseInt(args[0]);
        const username = args.slice(1).join(" ");

    }
});


bot.commands.set("show-message-channel", {
    execute: async (message, args) => {
        const n = parseInt(args[0]);
        const channelID = args[1];
     
    }
});


bot.commands.set("talk-too-much", {
    execute: async (message, args) => {
        const channelID = args[0];
       
    }
});

const { token } = require('./config.json');

client.login(token);

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    
    if (message.content === '!format-messages') {
        // Vous devez obtenir vos messages ici et les stocker dans une variable messages
        const messages = []; // Remplacez cela par votre méthode pour obtenir les messages

        const formattedMessages = messages.map(formatMessage).join('');
        message.channel.send(formattedMessages);
    }

    if (message.content === '!format-channel-messages') {
        // Vous devez obtenir vos messages de canal ici et les stocker dans une variable channelMessages
        const channelMessages = []; // Remplacez cela par votre méthode pour obtenir les messages de canal

        const formattedChannelMessages = formatChannelMessages(channelMessages);
        message.channel.send(formattedChannelMessages);
    }
});
