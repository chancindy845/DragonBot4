function handler(m) {
  this.sendContact(m.chat, '972528662202', 'Dragon - CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '972528662202', 'Dragon - CREADOR - OFICIAL', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
