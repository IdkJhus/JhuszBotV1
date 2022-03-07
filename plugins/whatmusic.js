let FormData = require('form-data')
let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Responda a la canción que quiere encontrar*${usedPrefix + command}*`
 m.reply(global.wait)
				const bodyForm = new FormData()
			        bodyForm.append('audio', await q.download(), 'music.mp3')
           			bodyForm.append('apikey', 'apivinz')
           			axios('https://api.zeks.me/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				  m.reply(`*_Información encontrada!_*\n\n*Título* : ${data.data.title}\n*Artista* : ${data.data.artists}\n*Genero* : ${data.data.genre}\n*Album* : ${data.data.album}\n*Fecha de lanzamiento* : ${data.data.release_date}`)
				}).catch(() => {
				m.reply('*_No se encontró el nombre_*')
				})
				
}
handler.help = ['whatmusic']
handler.tags = ['music']

handler.command = /^(whatmusic)$/i

module.exports = handler
