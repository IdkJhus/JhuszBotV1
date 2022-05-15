let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/el rap de fernanfloo.mp3'
conn.sendFile(m.chat, vn, 'el pepe.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Fernanfloo|el rap de fernan|fernan|crack/ 
handler.command = new RegExp
module.exports = handler