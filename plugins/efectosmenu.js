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
*โจ๐ola, ${username}!!*

ยป๐๐ช๐ฎ๐ขฬ ๐๐ง๐๐จ๐ง๐ญ๐ซ๐๐ซ๐ฬ๐ฌ ๐ฅ๐จ๐ฌ ๐๐ข๐ฌ๐ญ๐ข๐ง๐ญ๐จ๐ฌ ๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐๐ข๐ฌ๐ฉ๐จ๐ง๐ข๐๐ฅ๐๐ฌยซ
โโโโโโโโโโโโโโโโโโ
๐ค.๐๐๐ฌ๐ฌ
๐ค.๐๐๐๐ฉ
๐ค.๐๐๐ซ๐ซ๐๐ฉ๐
๐ค.๐๐๐ฌ๐ญ
๐ค.๐๐๐ญ
๐ค.๐ง๐ข๐ ๐ก๐ญ๐๐จ๐ซ๐
๐ค.๐ซ๐๐ฏ๐๐ซ๐ฌ๐
๐ค.๐ซ๐จ๐๐จ๐ญ
๐ค.๐ฌ๐ฅ๐จ๐ฐ
๐ค.๐ฌ๐ฆ๐จ๐จ๐ญ๐ก
๐ค.๐ฏ๐ข๐๐ซ๐๐๐ข๐จ๐ง *๐๐๐ง๐ญ๐ข๐๐๐*
โโโโโโโโโโโโโโโโโโ
ยป๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐. ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐ ๐๐๐๐ยซ
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'ยฉ๐๐ก๐ฎ๐ฌ๐ณแ  แทฆรอร', '๐๐๐ง๐ฎ ๐๐ซ๐ข๐ง๐๐ข๐ฉ๐๐ฅ', `#menu`, '๐๐๐ง๐ฎ ๐๐ฎ๐๐ข๐จ๐ฌ', `#menuaudios`, '๐๐ง๐ฌ๐ญ๐๐ ๐ซ๐๐ฆ ๐คณ', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(efectosmenu|menuefectos|efectosm|em)$/i
handler.fail = null
module.exports = handler