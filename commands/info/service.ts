module.exports = {
    name:"service",
    execute(msg) {

        const Diecord = require(`discord.js`);

        var url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyALqowrUUelRZOyrjC_NzdLUTnsW9PNj5k&channelId=UCGHf21vW7hVVHCVaCoS8ttw&part=snippet,id&order=date&maxResults=1';

        const fetch = require('node-fetch');

        fetch(url)
        .then(res => res.json())
        .then(api => {

            const url = `https://youtube.com/watch?v=${api.items[0].id.videoId}`;
            const image = api.items[0].snippet.thumbnails.high.url;
            const time = api.items[0].snippet.publishTime;


            const embed = new Diecord.MessageEmbed()
            .setAuthor('Latest Church Service:')
            .setColor(`#FF0000`)
            .setDescription(url)
            .setFooter(time)
            .setThumbnail(image);

            msg.channel.send(embed);

        })

    },
};