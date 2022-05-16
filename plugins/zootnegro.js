let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
    *⍣Zoot Revo⍣*
    El ma negro
    ╔════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╗
https://www.youtube.com/channel/UC5QIa0PWbCCUUTJa62VDo_g
    ╚════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╝
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×*', 'status@broadcast')
    }
    handler.command = /^(zoot|ZootRevo|el ma negro)$/i
    
    module.exports = handler