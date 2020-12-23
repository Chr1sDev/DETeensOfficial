module.exports = {
    name:"test",
    execute(msg) {

        const Discord0843 = require(`discord.js`);
        var page = 1;
        const embed = new Discord0843.MessageEmbed()
        .setAuthor('Band Posts:')
        .setDescription(``)
        .setColor('#4582DA')
        .setFooter(`page ${page}`);
        msg.channel.send(embed)
        .then(async msg => {
            await msg.react('◀')
            await msg.react('▶')
            const left = (reaction, user) => {
                return reaction.emoji.name === '◀';
            };
            const right = (reaction, user) => {
                return reaction.emoji.name === '▶';
            };
            const leftCollector = msg.createReactionCollector(left, { time: 50000 });
            leftCollector.on('collect', (reaction, user) => {
                if (page == 1) {
                } else {
                    page -= 1;
                    embed.setFooter(`page ${page}`);
                    msg.edit(embed)
                }
            });
            leftCollector.on('end', collected => {
                msg.reactions.removeAll();
            });
            const rightCollector = msg.createReactionCollector(right, { time: 50000 });
            rightCollector.on('collect', (reaction, user) => {
                if (false) { // (page == band.length - 1)
                } else {
                    page += 1;
                    embed.setFooter(`page ${page}`);
                    msg.edit(embed)
                }
            });
            rightCollector.on('end', collected => {
                msg.reactions.removeAll();
            });

        }); // END OF .then()

    },
};