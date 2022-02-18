let handler = async m => m.reply(`
Weno, esta es una versión modificada así que en YouTube encontraran el modo v:
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
