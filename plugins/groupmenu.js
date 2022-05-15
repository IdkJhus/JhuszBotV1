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

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«💎
╔════════════════╗
💎.𝐚𝐝𝐦𝐢𝐧𝐬 *𝐭𝐞𝐱𝐭𝐨*
💎.𝐚𝐝𝐝 *𝐧𝐮𝐦𝐞𝐫𝐨*
💎.𝐤𝐢𝐜𝐤 @𝐭𝐚𝐠
💎.𝐬𝐚𝐯𝐞 *@𝐭𝐚𝐠 + 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐨*
💎.𝐩𝐫𝐨𝐦𝐨𝐭𝐞 *@𝐭𝐚𝐠*
💎.𝐝𝐞𝐦𝐨𝐭𝐞 *@𝐭𝐚𝐠*
💎.𝐠𝐫𝐮𝐩𝐨 *𝐚𝐛𝐫𝐢𝐫 / 𝐜𝐞𝐫𝐫𝐚𝐫*
💎.𝐞𝐧𝐚𝐛𝐥𝐞 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
💎.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
💎.𝐞𝐧𝐚𝐛𝐥𝐞 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
💎.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
💎.𝐞𝐧𝐚𝐛𝐥𝐞 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
💎.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
💎.𝐞𝐧𝐚𝐛𝐥𝐞 𝐝𝐞𝐥𝐞𝐭𝐞
💎.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐝𝐞𝐥𝐞𝐭𝐞
💎.𝐥𝐢𝐧𝐤
💎.𝐧𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐫 *𝐭𝐞𝐱𝐭𝐨*
💎.𝐬𝐞𝐭𝐧𝐚𝐦𝐞 *𝐍𝐮𝐞𝐯𝐨 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*
💎.𝐬𝐞𝐭𝐝𝐞𝐬𝐜 *𝐍𝐮𝐞𝐯𝐚 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢ó𝐧 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*
💎.𝐢𝐧𝐟𝐨𝐠𝐫𝐮𝐩𝐨
💎.𝐡𝐢𝐝𝐞𝐭𝐚𝐠 *𝐭𝐞𝐱𝐭𝐨*
💎.𝐝𝐞𝐥 *𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐚 𝐮𝐧 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭*
💎.𝐬𝐢𝐝𝐞𝐫
💎.𝐛𝐚𝐧𝐜𝐡𝐚𝐭
💎.𝐮𝐧𝐛𝐚𝐧𝐜𝐡𝐚𝐭
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐔𝐍𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨𝐬', `#menuaudios`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(groupmenu|menugrupo|groupm|gm)$/i
handler.fail = null
module.exports = handler
