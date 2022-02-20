let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
  let [, code] = text.match(linkRegex) || []
  if (!code) throw 'Link invalid'
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) throw res
  let caption = `
-- [Group Link Inspector] --
${res.id}
*Nombre del Grupo:* ${res.subject}
*Creado* por @${res.id.split('-')[0]} en *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*Título cambiado * por @${res.subjectOwner.split`@`[0]} en *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*Descripción cambiada* por @${res.descOwner.split`@`[0]} en *${formatDate(res.descTime * 1000)}*` : ''}
*Número de integrantes:* ${res.size}
*Miembros que se unieron*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'No hay ninguno miembro'}
${res.desc ? `*Descripción actual del grupo:*
${res.desc}` : '*Sin descripción*'}

`
handler.help = ['inspect <chat.whatsapp.com>']
handler.tags = ['tools']

handler.command = /^inspect$/i

module.exports = handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
