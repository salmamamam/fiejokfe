const Discord = require("discord.js");

const moment = require("moment");
const talkedRecently = new Set();
const { parseZone } = require("moment");
const Settings = require('../Settings.json');
const prefix = Settings.prefix



module.exports.run = async(client, message, args)  => {

 if(!message.member.roles.cache.get("BAN_MEMBERS") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Don't Have Permission To Use This Command.")

 if(!args[0]) return message.channel.send('**Tag A Member!**')
let reason = args.slice(1).join(' ')

let user = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

if(!reason) return message.channel.send('**Specify A Reason Please.**')

if(!user) return message.channel.send('**The Specified User Does Not Exist On The Server.**')

let member = message.guild.member(user)

if(!member) return message.channel.send('**The Specified User Does Not Exist On The Server.**')

if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("You Can't Ban This User.")

  member.ban({days: 7, reason: reason})

         const embed = new Discord.MessageEmbed()

        .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))

        .setColor(`#323131`)

        .setDescription(`**• **<@${member.id}> (\`${member.id}\`) **Banned By** <@${message.author.id}> **From The Server.**

      **• Banned By:** <@${message.author.id}> (\`${message.author.id}\`)

      **• Reason:** \`${reason}\`

      **• Banned Channel:** \`${message.channel.name}\`

        `)

        message.channel.send(embed)
        message.react('🟩')


};

exports.conf = {
	enabled : true,
	guildOnly : true,
	aliases : ["ban", "banmember"],
	permLevel : 0
}

exports.help = {
	name : 'ban',
	description : "For Ban A Member.",
	usage : 'ban @member',
  cooldown: 10
}


