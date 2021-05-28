const Discord = require("discord.js");

const moment = require("moment");
const talkedRecently = new Set();
const { parseZone } = require("moment");
const Settings = require('../Settings.json');
const prefix = Settings.prefix



module.exports.run = async(client, message, args)  => {

let reason = args.slice(0).join(' ')
if(!reason) return message.channel.send('**Specify A Report Reason Please.**')

let reportchannel = client.channels.cache.get("847179432459894826")

        const delivered = new Discord.MessageEmbed()

        .setColor(`#323131`)

        .setTitle("Your Report Has Been Successfully Delivered!")

        .setFooter(`Reported By ${message.author.id}`)

         const embed = new Discord.MessageEmbed()

        .setColor(`#323131`)


        .setTitle("A New Report For Pasko Bot!")

        .setDescription(`**Report :** \`${reason}\`

                         **Server Name:** \`${message.guild.name} ( ${message.guild.id} )\``)
         
        .setFooter(`Reported By ${message.author.id}`)

        reportchannel.send(embed)
        message.channel.send(delivered)
        message.react('🟩')


};

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ["report", "report-pasko"],
	permLevel : 0
}

exports.help = {
	name : 'report',
	description : "For Report.",
	usage : 'report',
  cooldown: 60
}


