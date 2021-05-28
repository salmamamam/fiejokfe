const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<:00:847199564938084392>`,
'1': `<:01:847197653628485652>`,
'2': `<:02:847197715431292938>`,
'3': `<:03:847197765474058240>`,
'4': `<:04:847197850454720602>`,                       
'5': `<:05:847197891970072588>`,
'6': `<:06:847197948995305492>`,
'7': `<:07:847198021795053631>`,
'8': `<:08:847198062865547264>`,
'9': `<:09:847198134173696000>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<:00:847199564938084392>`,
'1': `<:01:847197653628485652>`,
'2': `<:02:847197715431292938>`,
'3': `<:03:847197765474058240>`,
'4': `<:04:847197850454720602>`,                       
'5': `<:05:847197891970072588>`,
'6': `<:06:847197948995305492>`,
'7': `<:07:847198021795053631>`,
'8': `<:08:847198062865547264>`,
'9': `<:09:847198134173696000>`}[d];})}
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<:00:847199564938084392>`,
'1': `<:01:847197653628485652>`,
'2': `<:02:847197715431292938>`,
'3': `<:03:847197765474058240>`,
'4': `<:04:847197850454720602>`,                       
'5': `<:05:847197891970072588>`,
'6': `<:06:847197948995305492>`,
'7': `<:07:847198021795053631>`,
'8': `<:08:847198062865547264>`,
'9': `<:09:847198134173696000>`}[d];})}

  
const embed1 = new Discord.MessageEmbed()
 .setColor("#323131")
 .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Total Members: ${üyesayısı} ** 

**Online: ${cevirimici}** 
 
**In Voice Channels: ${sessayı}**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
    aliases: ["count",'countmembers', 'countserver'],
  permLevel: 0
};
exports.help = {
  name: 'count'
}