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
🧧.𝐬
🧧.𝐬𝐭𝐢𝐜𝐤𝐞𝐫
🧧.𝐬𝐞𝐦𝐨𝐣𝐢
🧧.𝐰𝐚𝐬𝐭𝐞𝐝
🧧.𝐬𝐭𝐨𝐧𝐤𝐬
🧧.𝐭𝐫𝐚𝐬𝐡
🧧.𝐫𝐚𝐢𝐧𝐛𝐨𝐰
🧧.𝐜𝐢𝐫𝐜𝐥𝐞
🧧.𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐚𝐤𝐞𝐫
🧧.𝐚𝐭𝐭𝐩 *𝐭𝐞𝐱𝐭𝐨*
🧧.𝐬𝐭𝐲𝐥𝐞 *𝐭𝐞𝐱𝐭𝐨*
🧧.𝐚𝐭𝐭𝐩𝟐 *𝐭𝐞𝐱𝐭𝐨*
🧧.𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐟𝐢𝐥𝐭𝐞𝐫
🧧.𝐦𝐩𝟑 *𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨*
🧧.𝐢𝐦𝐠 *𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫*
🧧.𝐛𝐥𝐮𝐫 *𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧*
🧧.𝐬𝐰𝐦 *𝐥𝐢𝐧𝐤 𝐝𝐞 𝐢𝐦𝐚𝐠𝐞𝐧 𝐝𝐞 𝐠𝐨𝐨𝐠𝐥𝐞*
🧧.𝐠𝐢𝐟 *𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐬𝐭𝐢𝐜𝐤𝐞𝐫/𝐯𝐢𝐝𝐞𝐨*
🧧.𝐭𝐨𝐯𝐢𝐝𝐞𝐨 *𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐧𝐨𝐭𝐚 𝐝𝐞 𝐯𝐨𝐳*
🧧.𝐭𝐚𝐤𝐞 𝐧𝐨𝐦𝐛𝐫𝐞 | 𝐚𝐮𝐭𝐨𝐫
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐏𝐀𝐑𝐀 𝐔𝐒𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋. 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐕𝐈𝐓𝐀𝐑 𝐄𝐋 𝐒𝐏𝐀𝐌«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨𝐬', `#menuaudios`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(stickermenu|menusticker|stickerm|sm)$/i
handler.fail = null
module.exports = handler