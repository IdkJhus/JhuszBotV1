let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/alan madrid2.mp3'
conn.sendFile(m.chat, vn, 'alan madrid2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /AlanZzz|BarcaGOD|RealZZZ|ClasicoGOD/ 
handler.command = new RegExp
module.exports = handler