//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

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
»»»»»𝙉𝙤𝙩𝙅𝙝𝙪𝙯ᙆ  ᷦ×͜×«««««

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐦𝐞𝐧𝐮́𝐬 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«
╔════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╗
»»»𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮«««
»»»𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮«««
»»»𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮«««
»»»𝐆𝐚𝐦𝐞𝐬 𝐌𝐞𝐧𝐮«««
»»»𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐌𝐞𝐧𝐮«««
»»»𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐌𝐞𝐧𝐮«««
»»»𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮«««
»»»𝐕𝐨𝐢𝐜𝐞𝐦𝐚𝐢𝐥 𝐌𝐞𝐧𝐮«««
»»»𝐕𝐨𝐢𝐜𝐞 𝐄𝐟𝐟𝐞𝐜𝐭𝐬 𝐌𝐞𝐧𝐮«««
»»»𝐀𝐮𝐝𝐢𝐨 𝐌𝐞𝐧𝐮«««
»»»𝐋𝐨𝐠𝐨𝐬 𝐌𝐞𝐧𝐮«««
╚════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╝

»𝐄𝐬𝐭𝐞 𝐛𝐨𝐭 𝐞𝐬 𝐝𝐞 𝐮𝐬𝐨 𝐩𝐫𝐢𝐯𝐚𝐝𝐨, 𝐩𝐨𝐫 𝐥𝐨 𝐭𝐚𝐧𝐭𝐨, 𝐬𝐢 𝐝𝐞𝐬𝐞𝐚𝐬 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐚𝐜𝐜𝐞𝐬𝐨 𝐚 𝐞𝐥, 𝐡𝐚𝐛𝐥𝐚 𝐜𝐨𝐧 𝐞𝐥 𝐨𝐰𝐧𝐞𝐫 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐪𝐮𝐞 𝐬𝐞 𝐩𝐮𝐞𝐝𝐞 𝐡𝐚𝐜𝐞𝐫 𝐚𝐥 𝐫𝐞𝐬𝐩𝐞𝐜𝐭𝐨.

»𝐒𝐢 𝐝𝐞𝐬𝐞𝐚𝐧 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐫 𝐚𝐥𝐠ú𝐧 𝐦𝐞𝐧ú 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐬𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐞 𝐢𝐧𝐭𝐫𝐨𝐝𝐮𝐳𝐜𝐚𝐧 𝐞𝐥 𝐩𝐫𝐞𝐟𝐢𝐣𝐨 𝐞𝐬𝐭𝐚𝐛𝐥𝐞𝐜𝐢𝐝𝐨 (.) 𝐣𝐮𝐧𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨.

»𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐨𝐰𝐧𝐞𝐫 𝐦𝐞𝐧𝐮

`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
