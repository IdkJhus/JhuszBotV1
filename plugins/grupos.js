let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Jhusz-Bot*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/K1qdmBjJpUJ0Uw2V9YzGYi*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 Jhusz X-X 🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
