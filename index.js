const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} Is opgestart.`);
    client.user.setActivity("Test.", {type: "playing"});
    

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix

    var messageArray = message.content.split(" ");
    
    var command = messageArray[0];

    if(command === `${prefix}Hallo`){
        return message.channel.send("Hallo!");
    }

    if(command === `${prefix}Milou`){
        return message.channel.send("Milou is raar");
    }

    if(command === `${prefix}Yzze`){
        return message.channel.send("Yzze is een dwerg");
    }

    if(command === `${prefix}Stijn`){
        return message.channel.send("Een zeer hutse mossel jongen");
    }

    if(command === `${prefix}Lizzy`){
        return message.channel.send("Lizzy in een paarden pak ~ Milou 2021");
    }

    if(command === `${prefix}Maya`){
        return message.channel.send("Maya de paashaasschaamhaarverzamelaar");
    }

    if(command === `${prefix}Joey`){
        return message.channel.send("Joey: Vrachtwagen neuker");
    }

    if(command === `${prefix}Astma`){
        return message.channel.send("https://tenor.com/view/nervous-asthma-anxious-breathe-fogell-gif-17098317");
    }

    if (command === `${prefix}Help`) {
      
        var botEmbed = new discord.MessageEmbed()
            .setTitle('Help pagina')
            .setDescription("Hier zie je commands enzo je weet wellll")
            .setColor("#5d00ff")
            .addField("**?Hallo**", "De bot zegt gezzelige hallo terug")
            .addField("**?Milou/?Yzze/?Stijn/?Lizzy/?Maya/?Joey**", "Geweldige boodschap over deze persoon!")
 
            .setThumbnail('https://cdn.discordapp.com/icons/815860036097277983/0fdb61a3ec85eaccd2a14dcc601357d2.png')
            .setTimestamp()
            .setFooter('Kaas eter', 'https://cdn.discordapp.com/attachments/851205539052650504/856963507677429810/downie_400x400.png');
 
    
        return message.channel.send(botEmbed);
    }

    if (command === `${prefix}help`) {
      
        var botEmbed = new discord.MessageEmbed()
            .setTitle('Help pagina')
            .setDescription("Hier zie je commands enzo je weet wellll")
            .setColor("#5d00ff")
            .addField("**?Hallo**", "De bot zegt gezzelige hallo terug")
            .addField("**?Milou/?Yzze/?Stijn/?Lizzy/?Maya/?Joey**", "Geweldige boodschap over deze persoon!")
 
            .setThumbnail('https://cdn.discordapp.com/icons/815860036097277983/0fdb61a3ec85eaccd2a14dcc601357d2.png')
            .setTimestamp()
            .setFooter('Kaas eter', 'https://cdn.discordapp.com/attachments/851205539052650504/856963507677429810/downie_400x400.png');
 
    
        return message.channel.send(botEmbed);
    }

    if (command === `Help`) {
      
        var botEmbed = new discord.MessageEmbed()
            .setTitle('Help pagina')
            .setDescription("Hier zie je commands enzo je weet wellll")
            .setColor("#5d00ff")
            .addField("**?Hallo**", "De bot zegt gezzelige hallo terug")
            .addField("**?Milou/?Yzze/?Stijn/?Lizzy/?Maya/?Joey**", "Geweldige boodschap over deze persoon!")
 
            .setThumbnail('https://cdn.discordapp.com/icons/815860036097277983/0fdb61a3ec85eaccd2a14dcc601357d2.png')
            .setTimestamp()
            .setFooter('Kaas eter', 'https://cdn.discordapp.com/attachments/851205539052650504/856963507677429810/downie_400x400.png');
 
    
        return message.channel.send(botEmbed);
    }

    if (command === `help`) {
      
        var botEmbed = new discord.MessageEmbed()
            .setTitle('Help pagina')
            .setDescription("Hier zie je commands enzo je weet wellll")
            .setColor("#5d00ff")
            .addField("**?Hallo**", "De bot zegt gezzelige hallo terug")
            .addField("**?Milou/?Yzze/?Stijn/?Lizzy/?Maya/?Joey**", "Geweldige boodschap over deze persoon!")
 
            .setThumbnail('https://cdn.discordapp.com/icons/815860036097277983/0fdb61a3ec85eaccd2a14dcc601357d2.png')
            .setTimestamp()
            .setFooter('Kaas eter', 'https://cdn.discordapp.com/attachments/851205539052650504/856963507677429810/downie_400x400.png');
 
    
        return message.channel.send(botEmbed);
    }

    if(command === `Je_moeder`){
        return message.channel.send("**Uno reverse card**");
    }

    if(command === `Gn`){
        return message.channel.send("Goodnight:)");
    }

    if(command === `GN`){
        return message.channel.send("Goodnight:)");
    }

    if(command === `gN`){
        return message.channel.send("Goodnight:)");
    }

    if(command === `gn`){
        return message.channel.send("Goodnight:)");
    }

    if(command === `ASTMA`){
        return message.channel.send("*Geeft astma puffer*");
    }

    if(command === `astma`){
        return message.channel.send("*Geeft astma puffer*");
    }

    if(command === `OMG`){
        return message.channel.send("En jezus dan?!?!?!");
    }

    if(command === `omg`){
        return message.channel.send("En jezus dan?!?!?!");
    }

    if(command === `Omg`){
        return message.channel.send("En jezus dan?!?!?!");
    }

})