module.exports = {
    feedbackListener: function (msg) {

        if (msg.channel.id !== `804070776683626537`) return;

        msg.delete();

        let suggestions = msg.guild.channels.cache.get(`804070601186082876`);
        let time = new Date().toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, '');

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Suggestion`, `https://chr1s.dev/assets/mailbox.png`)
            .setColor(Math.floor(Math.random()*16777215).toString(16))
            .setDescription(`${msg}`)
            .setFooter(`From: ${msg.author.tag}  |  Time: ${time}`);
        suggestions.send(embed)
            .then(message => {
                message.react(`✅`)
                message.react(`❌`)
                message.react(`❔`)
            });

    }
};