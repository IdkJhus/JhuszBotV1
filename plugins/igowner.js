let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, aquí encontrarás el Instagram oficial de mi owner owo*

*_➤ Instagram:_*
*https://www.instagram.com/idk_jhuz/*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 Jhusz X-X 🔥*', 'status@broadcast')
}
handler.command = /^(ig|igofc|instagram)$/i

module.exports = handler
