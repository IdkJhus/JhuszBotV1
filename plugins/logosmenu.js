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

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐚𝐮𝐝𝐢𝐨𝐬/𝐟𝐫𝐚𝐬𝐞𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«
╔════════════════╗
📝️𝐥𝐨𝐥𝐢𝐜𝐞
📝️𝐬𝐢𝐦𝐩𝐜𝐚𝐫𝐝
📝️𝐡𝐨𝐫𝐧𝐲𝐜𝐚𝐫𝐝
📝️𝐥𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤
📝️𝐥𝐨𝐠𝐨𝐜𝐨𝐫𝐚𝐳𝐨𝐧_
📝️𝐭𝐚𝐡𝐭𝐚 *𝐭𝐞𝐱𝐭𝐨*
📝️𝐧𝐮𝐥𝐢𝐬 *𝐭𝐞𝐱𝐭𝐨*
📝️𝐧𝐮𝐥𝐢𝐬𝟐 *𝐭𝐞𝐱𝐭𝐨*
📝️𝐥𝐨𝐥𝐢𝐜𝐞 *@𝐭𝐚𝐠*
📝️𝐥𝐨𝐠𝐨𝐬 (𝐥𝐢𝐬𝐭𝐚)
📝️𝐬𝐢𝐦𝐩𝐜𝐚𝐫𝐝 *@𝐭𝐚𝐠*
📝️𝐥𝐨𝐠𝐨𝐠𝐮𝐫𝐚 *𝐭𝐞𝐱𝐭𝐨* 
📝️𝐥𝐨𝐠𝐨𝐥𝐨𝐥𝐢 *𝐭𝐞𝐱𝐭𝐨*
📝️𝐥𝐨𝐠𝐨𝐬𝐚𝐝 *𝐭𝐞𝐱𝐭𝐨𝟏|𝐭𝐞𝐱𝐭𝐨𝟐*
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒 𝐏𝐀𝐑𝐀 𝐔𝐒𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋. 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐕𝐈𝐓𝐀𝐑 𝐄𝐋 𝐒𝐏𝐀𝐌«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐜𝐢ó𝐧', `#programacionmenu`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(logosmenu|menulogos|logossm|lm)$/i
handler.fail = null
module.exports = handler
