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

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐦𝐞𝐧𝐮́𝐬 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«
╔════════════════╗
横ミこ椅.𝐛𝐨𝐨𝐬𝐭
横ミこ椅.𝐫𝐞𝐬𝐭𝐚𝐫𝐭
横ミこ椅.𝐛𝐚𝐧𝐥𝐢𝐬𝐭
横ミこ椅.𝐯𝐢𝐫𝐭𝐞𝐱𝐭𝟏
横ミこ椅.𝐨𝐰𝐧𝐞𝐫𝐛𝐚𝐧
横ミこ椅.𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐫
横ミこ椅.𝐂𝐚𝐣𝐚𝐅𝐮𝐞𝐫𝐭𝐞
横ミこ椅.𝐮𝐧𝐛𝐚𝐧𝐜𝐡𝐚𝐭𝟐
横ミこ椅.𝐛𝐜 𝐭𝐞𝐱𝐭𝐨
横ミこ椅.𝐛𝐜𝐠𝐜 𝐭𝐞𝐱𝐭𝐨
横ミこ椅.𝐛𝐜𝐛𝐨𝐭 𝐭𝐞𝐱𝐭𝐨
横ミこ椅.𝐬𝐞𝐭𝐛𝐲𝐞 @𝐭𝐚𝐠
横ミこ椅.𝐛𝐚𝐧𝐮𝐬𝐞𝐫 @𝐭𝐚𝐠
横ミこ椅.𝐞𝐧𝐚𝐛𝐥𝐞 𝐩𝐮𝐛𝐥𝐢𝐜
横ミこ椅.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐩𝐮𝐛𝐥𝐢𝐜
横ミこ椅.𝐮𝐧𝐛𝐚𝐧𝐮𝐬𝐞𝐫 @𝐭𝐚𝐠
横ミこ椅.𝐥𝐢𝐬𝐭𝐠𝐫𝐨𝐮𝐩 @𝐭𝐚𝐠
横ミこ椅.𝐞𝐧𝐚𝐛𝐥𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐭
横ミこ椅.𝐞𝐧𝐚𝐛𝐥𝐞 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝
横ミこ椅.𝐬𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 @𝐭𝐚𝐠
横ミこ椅.𝐞𝐧𝐚𝐛𝐥𝐞 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝
横ミこ椅.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝
横ミこ椅.𝐥𝐞𝐚𝐯𝐞𝐠𝐜
横ミこ椅.𝐬𝐞𝐭𝐛𝐨𝐭𝐛𝐢𝐨
横ミこ椅.𝐬𝐞𝐭𝐛𝐨𝐭𝐧𝐚𝐦𝐞
横ミこ椅.𝐬𝐞𝐭𝐛𝐨𝐭𝐩𝐩
横ミこ椅.𝐢𝐧𝐬𝐩𝐞𝐜𝐭
横ミこ椅.𝐬𝐢𝐦𝐮𝐥𝐚𝐭𝐞
╚════════════════╝
»𝐄𝐬𝐭𝐞 𝐛𝐨𝐭 𝐞𝐬 𝐝𝐞 𝐮𝐬𝐨 𝐩𝐫𝐢𝐯𝐚𝐝𝐨, 𝐩𝐨𝐫 𝐥𝐨 𝐭𝐚𝐧𝐭𝐨, 𝐬𝐢 𝐝𝐞𝐬𝐞𝐚𝐬 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐚𝐜𝐜𝐞𝐬𝐨 𝐚 𝐞𝐥, 𝐡𝐚𝐛𝐥𝐚 𝐜𝐨𝐧 𝐞𝐥 𝐨𝐰𝐧𝐞𝐫 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐪𝐮𝐞 𝐬𝐞 𝐩𝐮𝐞𝐝𝐞 𝐡𝐚𝐜𝐞𝐫 𝐚𝐥 𝐫𝐞𝐬𝐩𝐞𝐜𝐭𝐨.

»𝐒𝐢 𝐝𝐞𝐬𝐞𝐚𝐧 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐫 𝐚𝐥𝐠ú𝐧 𝐦𝐞𝐧ú 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐬𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐞 𝐢𝐧𝐭𝐫𝐨𝐝𝐮𝐳𝐜𝐚𝐧 𝐞𝐥 𝐩𝐫𝐞𝐟𝐢𝐣𝐨 𝐞𝐬𝐭𝐚𝐛𝐥𝐞𝐜𝐢𝐝𝐨 (.) 𝐣𝐮𝐧𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨.

`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menu`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(ownermenu|menuowner|ownerm|om)$/i
handler.fail = null
module.exports = handler
