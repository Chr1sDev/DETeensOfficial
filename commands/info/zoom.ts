//require('band-api').app.config.access_token = 'ZQAAAVrVeJJjNcgBU1oqEZ4TYXokXM6PV5j5ErHCklAsuw4udXHpTrZTheqoug839K58NxpvYsVpk-fnuUv8K1Afq5RNMVZAnLPYSJ64OHIIhUeM';
//require('band-api').app.config.client_id = '	307455980';
//require('band-api').app.config.redirect_uri = '	http://localhost/defend/callback?code=example';
//const band = require('band-api');
//const { bands } = require('band-api/lib/app');
module.exports = {
	name: 'zoom',
	description: '',
	execute(msg, args) {

        const fetch = require('node-fetch');
        var url = `https://openapi.band.us/v2/band/posts?access_token=ZQAAAVrVeJJjNcgBU1oqEZ4TYXokXM6PV5j5ErHCklAsuw4udXHpTrZTheqoug839K58NxpvYsVpk-fnuUv8K1Afq5RNMVZAnLPYSJ64OHIIhUeM&locale=en_US&band_key=AACNEuRju8lfnyCwrqCNhjUS`
        
        fetch(url)
        .then(res => res.json())
        .then((band) => {

        var i = 0;
        var posts = band.result_data.items;

        while (true) {
            if(posts[i].content.includes("zoom")) {
                var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
                // var expression = /(?<=Topic)(.*)(?=Meeting ID)/gs
                var regex = new RegExp(expression);
                var passStr = /Passcode:.+\s/ig;
                var passEx = new RegExp(passStr);
                msg.channel.send(`**Potential Zoom Links:**\n${posts[i].content.match(regex)}\n${posts[i].content.match(passEx) ? `${posts[i].content.match(passEx)}` : ` `}`);
                break;
            } else {
                i++
            }
        }
        




        })
        .catch(err => { throw err });


	},
};