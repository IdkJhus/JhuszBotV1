// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `Ingrese un nuevo nombre para el bot`
  try {
    await conn.updateProfileName(text)
    conn.reply(m.chat, 'Nombre cambiado exitosamente', m)
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i
handler.owner = true

module.exports = handler
