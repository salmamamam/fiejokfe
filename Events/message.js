//-------------------------Required Modules--------------------------\\


const Discord = require("discord.js");
const Settings = require('../Settings.json');
const db = require("quick.db");


//-------------------------Required Modules--------------------------\\


let talkedRecently = new Set();

module.exports = message => {

  const prefixMention = new RegExp(`p!`);

  let prefix;
  
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.fetch(`prefix_${message.guild.id}`)
  }
    
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : Settings.prefix;

  }

  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if (client.cooldowns.has(`${command}_${message.author.id}`)) {
        const finish = client.cooldowns.get(`${command}_${message.author.id}`)
        const date = new Date();
        const kalan = (new Date(finish - date).getTime() / 1000).toFixed(2);

        const colddown = new Discord.MessageEmbed()

        .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))

        .setColor(`#323131`)

        .setDescription(`You Have To Wait **${kalan}s** To Use This Command Again.`)

        return message.channel.send(colddown);
    };
    
    const finish = new Date();
    finish.setSeconds(finish.getSeconds() + cmd.help.cooldown);
    cmd.run(client, message, params, perms);
    if (cmd.help.cooldown > 0) {
        client.cooldowns.set(`${command}_${message.author.id}`, finish);
        setTimeout(() => {
          client.cooldowns.delete(`${command}_${message.author.id}`);
        }, cmd.help.cooldown * 1000);
      }
  }

};