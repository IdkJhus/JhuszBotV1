let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/a.mp3'
conn.sendFile(m.chat, vn, 'no digas eso papu.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /no digas eso papu|:,v|/
handler.command = /^(no digas eso papu|:,v|?$)/

module.exports = handler
