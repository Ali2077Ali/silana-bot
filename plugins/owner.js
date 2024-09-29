import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/967781974099
*instagram:*\ninstagram.com/noureddine_ouaf

*youtube:*\nyoutube.com/@noureddineouafy

*facebook page:*\nwww.facebook.com/profile.ph?id=100063533185520

*script bot :* github.com/noureddineouaf

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
