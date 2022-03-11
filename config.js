global.DeveloperMode = 'false' //true Or false
global.owner = ['50257681618','36302222243','5218451027071','50557689774','523421211594','40373800235','97252-992-7755','1437375-5051','1437370-1349','593963993760','50585015755','1507777-7777','50578036811','447700073770','50589371934','50557023016','50576642974','50584780754','50589045956', '50585267286', '213665838518', '59822225540', '50240323644', '50247960340', '50258741895', '50241572320', '50251731036', '50248859158', '50231980974', '50249866238', '50250428321', '50247733484', '50246299830', '50257815586', '50233933928', '50242845442', '50259955513', '50255556962', '593992463933', '593963134871', '59895555556','5212284036345','50433438259','58424-8344845', '50256118303' , '50493978558', '5215561724627', '97252-498-0009', '50583825588', '58412-8015774', '5212284804602', '5212281233165', '5212282578326', '+5212282541747', '5212282885431', '5212282835983', '5212282758204', '+5212282944594', '1(787)673-8023','51917189590','50242222322','58412-1953349','5217222818560','51924197709','59168574451','50557253473','50576590822','573228888548','33983333332','593983149955','50375409252', '5218132398911','34658535827','573002192594','573127137047','524434420204','50686923137','58426-3737723','573006591566','50587706267','50761200406' ] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot


// Nota: Puedes contactarme si necesitas ayuda con algo al +5219996125657 (este es mi numero personal/real bloqueo personas que no sean temas de la instalación)
// => Solo dudas sobre la instalación, temas generales contactarme al +17722386341 o al +14503280343
// => NO ayudo a hacer Bots, ni crearlos, ni editarlos 
// - Haré tutoriales de como editar el Bot, los videos los podran encontrar en mi canal de YouTube en https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'DyotaMC05',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': 'rey2k21'
}

// Sticker WM
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = 'Jhusz'


//global.wait = '*Esperé un momento..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
