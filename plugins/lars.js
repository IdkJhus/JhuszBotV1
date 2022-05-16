let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
*⍣Lars⍣*
best kuaker
https://www.youtube.com/channel/UC3waPBiThiCCrTfUpmKXh-g
Canal de spoofeo y buzoneo.
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×*', 'status@broadcast')
    }
    handler.command = /^(lars|Lars|el ma kuaker)$/i
    
    module.exports = handler