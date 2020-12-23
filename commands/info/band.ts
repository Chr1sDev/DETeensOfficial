//require('band-api').app.config.access_token = 'ZQAAAVrVeJJjNcgBU1oqEZ4TYXokXM6PV5j5ErHCklAsuw4udXHpTrZTheqoug839K58NxpvYsVpk-fnuUv8K1Afq5RNMVZAnLPYSJ64OHIIhUeM';
//require('band-api').app.config.client_id = '	307455980';
//require('band-api').app.config.redirect_uri = '	http://localhost/defend/callback?code=example';
//const band = require('band-api');
//const { bands } = require('band-api/lib/app');
module.exports = {
	name: 'band',
	description: '',
	execute(msg, args) {

        const fetch = require('node-fetch');
        var url = `https://openapi.band.us/v2/band/posts?access_token=ZQAAAVrVeJJjNcgBU1oqEZ4TYXokXM6PV5j5ErHCklAsuw4udXHpTrZTheqoug839K58NxpvYsVpk-fnuUv8K1Afq5RNMVZAnLPYSJ64OHIIhUeM&locale=en_US&band_key=AACNEuRju8lfnyCwrqCNhjUS`
        
        fetch(url)
        .then(res => res.json())
        .then((band) => {

        // var i = 0;
        // var posts = band.result_data.items;

        // while (true) {
        //     if(posts[i].content.includes("zoom")) {
        //         var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
        //         // var expression = /(?<=Topic)(.*)(?=Meeting ID)/gs
        //         var regex = new RegExp(expression);
        //         var passStr = /Passcode:.+\s/ig;
        //         var passEx = new RegExp(passStr);
        //         msg.channel.send(`**Potential Zoom Links:**\n${posts[i].content.match(regex)}\n${posts[i].content.match(passEx) ? `${posts[i].content.match(passEx)}` : ` `}`);
        //         break;
        //     } else {
        //         i++
        //     }
        // }
            const Discord0843 = require(`discord.js`);
            var page = 1;

            var posts = band.result_data.items;
            var author = band.result_data.items[page - 1].author.name;
            var content = band.result_data.items[page - 1].content.substr(0,1930);

            const embed = new Discord0843.MessageEmbed()
            .setAuthor('Band Posts:')
            .setDescription(`${content}`)
            .setColor('#4582DA')
            .setFooter(`Page: ${page}  |  Author: ${author}`);
            msg.channel.send(embed)
            .then(async msg => {
                await msg.react('⏪')
                await msg.react('◀')
                await msg.react('⏹')
                await msg.react('▶')
                await msg.react('⏩')
                const left = (reaction, user) => {
                    return reaction.emoji.name === '◀';
                };
                const right = (reaction, user) => {
                    return reaction.emoji.name === '▶';
                };
                const first = (reaction, user) => {
                    return reaction.emoji.name === '⏪';
                };
                const last = (reaction, user) => {
                    return reaction.emoji.name === '⏩';
                };
                const middle = (reaction, user) => {
                    return reaction.emoji.name === '⏹';
                };
                const leftCollector = msg.createReactionCollector(left, { time: 100000 });
                leftCollector.on('collect', async (reaction, user) => {
                    if (page == 1) {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                    } else {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                        page -= 1;
                        author = band.result_data.items[page - 1].author.name;
                        content = band.result_data.items[page - 1].content.substr(0,1930);
                        embed.setDescription(`${content}`);
                        embed.setFooter(`Page: ${page}  |  Author: ${author}`);
                        msg.edit(embed)
                    }
                });
                leftCollector.on('end', collected => {
                    msg.reactions.removeAll();
                }); // END OF left reaction collector
                const rightCollector = msg.createReactionCollector(right, { time: 100000 });
                rightCollector.on('collect', async (reaction, user) => {
                    if (page == posts.length) {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                    } else {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                        page += 1;
                        author = band.result_data.items[page - 1].author.name;
                        content = band.result_data.items[page - 1].content.substr(0,1930);
                        embed.setDescription(`${content}`);
                        embed.setFooter(`Page: ${page}  |  Author: ${author}`);
                        msg.edit(embed)
                    }
                });
                rightCollector.on('end', collected => {
                    msg.reactions.removeAll();
                }); // END OF right reaction collector
                const firstCollector = msg.createReactionCollector(first, { time: 100000 });
                firstCollector.on('collect', async (reaction, user) => {
                    if (page == 1) {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                    } else {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                        page = 1;
                        author = band.result_data.items[page - 1].author.name;
                        content = band.result_data.items[page - 1].content.substr(0,1930);
                        embed.setDescription(`${content}`);
                        embed.setFooter(`Page: ${page}  |  Author: ${author}`);
                        msg.edit(embed)
                    }
                });
                firstCollector.on('end', collected => {
                    msg.reactions.removeAll();
                }); // END OF first reaction collector
                const lastCollector = msg.createReactionCollector(last, { time: 100000 });
                lastCollector.on('collect', async (reaction, user) => {
                    if (page == posts.length) {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                    } else {

                        const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                        try {
                            for (const reaction of userReactions.values()) {
                                await reaction.users.remove(user.id);
                            }
                        } catch (error) {
                            console.error('Failed to remove reactions.');
                        }

                        page = posts.length;
                        author = band.result_data.items[page - 1].author.name;
                        content = band.result_data.items[page - 1].content.substr(0,1930);
                        embed.setDescription(`${content}`);
                        embed.setFooter(`Page: ${page}  |  Author: ${author}`);
                        msg.edit(embed)
                    }
                });
                lastCollector.on('end', collected => {
                    msg.reactions.removeAll();
                }); // END OF last reaction collector
                const stopCollector = msg.createReactionCollector(middle, { time: 100000 });
                stopCollector.on('collect', async (reaction, user) => {

                    const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                    try {
                        for (const reaction of userReactions.values()) {
                            await reaction.users.remove(user.id);
                        }
                    } catch (error) {
                        console.error('Failed to remove reactions.');
                    }

                });
                leftCollector.on('end', collected => {
                    msg.reactions.removeAll();
                }); // END OF left reaction collector

            }).catch(err => {console.error(err)}); // END OF .then()



        })
        .catch(err => { throw err });

	},
};