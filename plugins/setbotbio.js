// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `Ingrese el texto a poner en la biografía del bot`
  try {
    await conn.setStatus(text)
    conn.reply(m.chat, 'Biografía cambiada exitosamente', m)
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
