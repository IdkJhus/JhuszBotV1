let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
*✨𝗛ola, ${username}!!*

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«
╔════════════════╗
🎮𝐦𝐚𝐭𝐡 *𝐦𝐨𝐝𝐨*
🎮𝐭𝐭𝐭 *𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐥𝐚 𝐬𝐚𝐥𝐚*
🎮𝐝𝐞𝐥𝐭𝐭𝐭 *𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐥𝐚 𝐬𝐚𝐥𝐚*
🎮𝐠𝐚𝐲𝟐 *𝐲𝐨 / @𝐭𝐚𝐠*
🎮𝐠𝐚𝐲 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐥𝐞𝐬𝐛𝐢 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐩𝐚𝐣𝐞𝐫𝐨 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐩𝐚𝐣𝐞𝐫𝐚 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐩𝐮𝐭𝐚 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐩𝐮𝐭𝐨 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐫𝐚𝐭𝐚 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐦𝐚𝐧𝐜𝐨 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐦𝐚𝐧𝐜𝐚 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐟𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚
🎮𝐝𝐚𝐝𝐨
🎮𝐬𝐢𝐦𝐬𝐢𝐦𝐢 *𝐭𝐞𝐱𝐭𝐨*
🎮𝐟𝐨𝐫𝐦𝐚𝐫𝐭𝐫𝐢𝐨
🎮𝐥𝐨𝐯𝐞 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐚𝐦𝐢𝐠𝐨𝐫𝐚𝐧𝐝𝐨𝐦
🎮𝐬𝐥𝐨𝐭 *𝐜𝐚𝐧𝐭𝐢𝐝𝐚𝐝*
🎮𝐩𝐩𝐭 *𝐩𝐢𝐞𝐝𝐫𝐚 / 𝐩𝐚𝐩𝐞𝐥 / 𝐭𝐢𝐣𝐞𝐫𝐚*
🎮𝐩𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐚 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐩𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐨 *@𝐭𝐚𝐠 / 𝐧𝐨𝐦𝐛𝐫𝐞*
🎮𝐭𝐨𝐩𝟏𝟎𝐠𝐚𝐲𝐬
🎮𝐭𝐨𝐩𝐥𝐢𝐧𝐝@𝐬
🎮𝐭𝐨𝐩𝐩𝐮𝐭@𝐬
🎮𝐭𝐨𝐩𝐩𝐚𝐣𝐞𝐫@𝐬
🎮𝐭𝐨𝐩𝐨𝐭𝐚𝐤𝐮𝐬
🎮𝐝𝐨𝐱𝐱𝐞𝐨 *𝐧𝐨𝐦𝐛𝐫𝐞 / @𝐭𝐚𝐠*
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐉𝐔𝐄𝐆𝐎𝐒 𝐏𝐀𝐑𝐀 𝐔𝐒𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋. 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐕𝐈𝐓𝐀𝐑 𝐄𝐋 𝐒𝐏𝐀𝐌«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨𝐬', `#menuaudios`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(gamesmenu|menujuegos|gamesm|gsm)$/i
handler.fail = null
module.exports = handler
