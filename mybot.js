const Discord = require('discord.js')
const client = new Discord.Client()
const Token = "NTQ5MTg3OTA3Nzg5NzgzMDQ0.D1QOwQ.wuHI46pf_w6JqAFCJKJzufLhnMo"

client.on('ready', () => {
console.log('Bot connected / logged in')
// Logs when bot is connected.
client.user.setGame('Doing stuff for Jayy')

});
client.on('message', (msg) => {
if (msg.content === '.ping')
msg.channel.send(`Pong ${msg.author}!`)

if (msg.content === '.Jayy')
msg.channel.send ('Jayy is cool, clap.')

if (msg.content === '.groups')
msg.channel.send ('Jayy is in lots of groups, they can be found on his profile, xJay_y.')

if (msg.content === '.partners')
msg.channel.send ('Jayy partners with many groups to ensure they have the best experience. You may ask to partner with Jayy via DMS.')


if (msg.content === '.help')
var help = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('My commands')
.setDescription('In Development')
.addField('.ping', 'Pings user.')
.addField('.help', 'Sends a list of commands!')
.addField('.Jayy', 'Gives you some info about Jayy!')
.addField('.groups', 'Gives you info of some of Jayys groups!')
.addField('.partners', 'Gives you info on partnering with him.')
msg.channel.send(help)

});



client.login(Token)
