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
📥.𝐢𝐦𝐚𝐠𝐞𝐧 *𝐭𝐞𝐱𝐭𝐨*
📥.𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡 *𝐭𝐞𝐱𝐭𝐨*
📥.𝐝𝐥𝐚𝐮𝐝𝐢𝐨 *𝐥𝐢𝐧𝐤 𝐲𝐭*
📥.𝐝𝐥𝐯𝐢𝐝 *𝐥𝐢𝐧𝐤 𝐲𝐭*
📥.𝐲𝐭𝐦𝐩𝟑 *𝐥𝐢𝐧𝐤 𝐲𝐭*
📥.𝐲𝐭𝐦𝐩𝟒 *𝐥𝐢𝐧𝐤 𝐲𝐭*
📥.𝐩𝐥𝐚𝐲 *𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞𝐥 𝐚𝐮𝐝𝐢𝐨*
📥.𝐩𝐥𝐚𝐲𝟐 *𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨*
📥.𝐩𝐥𝐚𝐲𝟑 *𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐞𝐥 𝐚𝐮𝐝𝐢𝐨/𝐯𝐢𝐝𝐞𝐨*
📥.𝐥𝐲𝐫𝐢𝐜𝐬 *𝐧𝐨𝐦𝐛𝐫𝐞𝐝𝐞𝐥𝐚𝐜𝐚𝐧𝐜𝐢ó𝐧*
📥.𝐠𝐨𝐨𝐠𝐥𝐞 *𝐭𝐞𝐱𝐭𝐨*
📥.𝐠𝐨𝐨𝐠𝐥𝐞𝐟 *𝐭𝐞𝐱𝐭𝐨*
📥.𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭𝐯𝐢𝐝𝐞𝐨 *𝐥𝐢𝐧𝐤 𝐝𝐞 𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭*
📥.𝐭𝐢𝐤𝐭𝐨𝐤𝐚𝐮𝐝𝐢𝐨 *𝐥𝐢𝐧𝐤 𝐝𝐞𝐥 𝐭𝐢𝐤𝐭𝐨𝐤*
📥.𝐭𝐢𝐤𝐭𝐨𝐤 *𝐥𝐢𝐧𝐤*
📥.𝐬𝐩𝐨𝐭𝐢𝐟𝐲 *𝐚𝐮𝐭𝐨𝐫, 𝐜𝐚𝐧𝐜𝐢𝐨𝐧*
📥.𝐚𝐜𝐨𝐫𝐭𝐚𝐫 *𝐥𝐢𝐧𝐤*
📥.𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭𝟐 *𝐭𝐞𝐱𝐭𝐨*
📥.𝐬𝐬𝐰𝐞𝐛 *𝐥𝐢𝐧𝐤*
📥.𝐚𝐧𝐢𝐦𝐞𝐢𝐧𝐟𝐨 *𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐚𝐧𝐢𝐦𝐞*
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀 𝐏𝐀𝐑𝐀 𝐔𝐒𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋. 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐕𝐈𝐓𝐀𝐑 𝐄𝐋 𝐒𝐏𝐀𝐌«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨𝐬', `#menuaudios`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(downloadmenu|menudescargar|descargasm|dm)$/i
handler.fail = null
module.exports = handler