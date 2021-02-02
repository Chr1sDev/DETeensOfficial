module.exports = {
    name:"nick",
    execute(msg) {

        //msg.channel.send(`\`\`\`json\n${JSON.stringify(msg.client.commands)}\`\`\``)
        //msg.client.emit('guildMemberRemove', msg.author);
        //msg.client.emit(`typingStart`, );
        // msg.client.emit(`guildMemberWarned`);
        // msg.client.emit(`ready`);
        var nick = msg.content.split('"');
        var ping = msg.mentions.members.first();
        ping.setNickname(nick[1]);
        msg.channel.send(`> Nickname changed for ${ping.user.tag}`);

    },
};