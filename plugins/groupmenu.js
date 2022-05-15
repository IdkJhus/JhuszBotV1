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
💎 _${usedPrefix}admins *texto*_ 
💎 _${usedPrefix}añadir *numero*_ 
💎 _${usedPrefix}sacar @tag_
💎 _${usedPrefix}save *@tag + nombre de contacto*_
💎 _${usedPrefix}daradmin *@tag*_
💎 _${usedPrefix}quitaradmin *@tag*_
💎 _${usedPrefix}grupo *abrir / cerrar*_
💎 _${usedPrefix}enable welcome_
💎 _${usedPrefix}disable welcome_
💎 _${usedPrefix}enable antilink_
💎 _${usedPrefix}disable antilink_
💎 _${usedPrefix}enable antilink2_
💎 _${usedPrefix}disable antilink2_
💎 _${usedPrefix}enable delete_
💎 _${usedPrefix}disable  delete_ 
💎 _${usedPrefix}link_
💎 _${usedPrefix}notificar *texto*_
💎 _${usedPrefix}setname *Nuevo nombre del grupo*_
💎 _${usedPrefix}setdesc *Nueva descripción del grupo*_
💎 _${usedPrefix}infogrupo_
💎 _${usedPrefix}invocar *texto*_
💎 _${usedPrefix}del *responder a un mensaje del bot*_
💎 _${usedPrefix}fantasmas_
💎 _${usedPrefix}banchat_
💎 _${usedPrefix}unbanchat_
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
