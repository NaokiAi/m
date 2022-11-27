/** Script Ini Baru Jadi Jika 
Ada Yang Error Harap Laporkan
Ke Pembuat Scriptnya Supaya Di Fix **/

// Jika Ingin Menambah Fitur Tolong Jangan Hapus Authornya

/* Please Support Me */
// My Youtube : Zero YT7
// My Github : Zero-YT7
// My Instagram : Zero_YT7

/* Donate Me */
// https://socibuzz.com/Zero_YT7/tribe

/* Jika Ingin Beli Script Bot , Rdp , Vps , Jasa Run Bot
Bisa Hubungin Saya 081548926840 ( Zero YT7 ) */

// Thanks To
// Allah S.W.T
// Ortuku
// All Creator Bot
// All Subscriberku

const fs = require('fs')
const chalk = require('chalk')

global.called = false
global.Prefix = 'Multi'
global.owner = ['6281548926840']
global.botName = 'Popeye-MD'
global.packname = 'Zero YT7'
global.author = 'Zero YT7'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
