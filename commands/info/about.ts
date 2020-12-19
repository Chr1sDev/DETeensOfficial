const Discord1 = require('discord.js');
module.exports = {
    name: 'about',
    description: '',
    execute(msg, args) {

        const aboutEmbed = new Discord1.MessageEmbed()
        .setTitle(`About DE Teens`)
        .setURL(`https://chr1s.dev`)
        .setAuthor("About!", `https://chr1s.dev/assets/boticon.png`,"https://chr1s.dev")
        .setColor('#02f2ce')
        .setDescription(`\**DE Teens\** is an all-purpose discord bot for the Dallas East Teens discord server. It's main purpose is moderation. But, it also includes many other informational and fun commands!`)
        .setFooter(`Developer: Chr1s (christopher#8888)`, `https://chr1s.dev/assets/verified_dev.png`)
        .setThumbnail('https://chr1s.dev/assets/bot4.gif')
        msg.channel.send(aboutEmbed)

    },
}