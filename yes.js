const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("545694572823445524").join(); 
    });
	
client.login(process.env.TOKEN)