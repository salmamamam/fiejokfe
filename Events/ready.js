//-------------------------Required Modules--------------------------\\


const Discord = require("discord.js");
const Settings = require("../Settings.json");


//-------------------------Required Modules--------------------------\\


module.exports = client => {

  client.user.setStatus("dnd");
  client.user.setActivity(`#SOON`, { type: "PLAYING"}); //// TYPE - WATCHING , PLAYING , LISTENING

  console.log('‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒')
  console.log("                          ")
  console.log(`${client.user.username} ( ${Settings.prefix} ) CONNECTED!`) 
};
