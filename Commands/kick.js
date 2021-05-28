const Discord = require("discord.js");

const moment = require("moment");
const talkedRecently = new Set();
const { parseZone } = require("moment");
const Settings = require('../Settings.json');
const prefix = Settings.prefix



module.exports.run = async(client, message, args)  => {

 if(!message.member.roles.cache.get("KICK_MEMBERS") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Don't Have Permission To Use This Command.")

 if(!args[0]) return message.channel.send('**Tag A Member!**')

let user = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

if(!user) return message.channel.send('**The Specified User Does Not Exist On The Server.**')

let member = message.guild.member(user)

if(!member) return message.channel.send('**The Specified User Does Not Exist On The Server.**')

if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("You Can't Kick This User.")

message.guild.member(user).kick();

         const embed = new Discord.MessageEmbed()

        .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))

        .setColor(`#323131`)

        .setDescription(`**• **<@${member.id}> (\`${member.id}\`) **Kicked By** <@${message.author.id}> **From The Server.**

      **• Kicked By:** <@${message.author.id}> (\`${message.author.id}\`)

      **• Kicked Channel:** \`${message.channel.name}\`

        `)

        message.channel.send(embed)
        message.react('🟩')


};

exports.conf = {
	enabled : true,
	guildOnly : true,
	aliases : ["kick", "kickmember"],
	permLevel : 0
}

exports.help = {
	name : 'kick',
	description : "For Kick A Member.",
	usage : 'kick @member',
  cooldown: 10
}


