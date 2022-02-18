function handler(m) {
  this.sendContact(m.chat, '50257681618', 'Jhusz - CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '50230118401', 'NotJhusz? - CREADOR - OFICIAL', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
