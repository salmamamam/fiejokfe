const Discord = require('discord.js');
const client = new Discord.Client();
const Settings = require('./Settings.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
client.cooldowns = new Discord.Collection()
const fs = require('fs');
const express = require('express');
require('./Util/eventLoader.js')(client);
const path = require('path');

var prefix = Settings.prefix;//

const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./Commands/', (err, files) => {//
    if (err) console.error(err);//
    log("                          ")
    log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
    log("                          ")
    log(`Commands Loading...`);//
    log("                          ")
    log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
    files.forEach(f => {//
        let cmds = require(`./Commands/${f}`);//
        log(`[COMMAND] ${cmds.help.name}     `);//
      
        client.commands.set(cmds.help.name, cmds);//
        cmds.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, cmds.help.name);//
        });
    });
});

fs.readdir("./Events/", (err, files) => {
if(err) return console.error(err);
log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
log("                          ")
log(`Events Loading...`);//
log("                          ")
log("‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒")
files.filter(rgevents => rgevents.endsWith(".js")).forEach(rgevents => {
let EventLoad = require(`./Events/${rgevents}`);
if(!EventLoad.configuration) return console.log(`[Event] ${rgevents}`)
client.on(EventLoad.configuration.name, EventLoad)})});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./Commands/${command}`)];
            let cmd = require(`./Commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Commands/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./Commands/${command}`)];
            let cmd = require(`./Commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === Settings.Owner) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login("ODQ3NTE3ODAxNDE3NDA4NTIy.YK_OdQ.7GxoMkFwNqhXpeNrmWqTmdCYBdc   ");

    const efm = new Discord.MessageEmbed()
      .setDescription(`Hello, I am **Pasko**.
                      
                       Type Help For Show **My Help Menu**.

                       [Join Support Server](https://discord.gg/wB9YccsURD) | [Invite The Bot](https://discord.com/oauth2/authorize?client_id=847517801417408522&scope=bot&permissions=8) | [Donate Bot](https://donatebot.io/checkout/847074601212051456)`)

      .setThumbnail("https://cdn.discordapp.com/icons/847074601212051456/4c2dc0f8a051ade6659c321537719e25.png?size=256")
      .setColor("#323131")


client.on('message', message => {
  if (message.content.startsWith("pasko info")) {
    message.channel.send(efm);
  }
});

var dev = "Developed By"
var y = "L"
var s = "a"
var r = "r"
var a = "s"
var l = "y"