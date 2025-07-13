/* SC BOT WL
BASE : SAMBO NETWORK
RECODE : SAMBO X PHILDE
CREACOT : SAMBO X PHILDE
*/

const fs = require('fs')
const chalk = require('chalk')

//—————「 Set Host Untuk Koneksi ke Server WL 」—————//
global.host = 'localhost' // HOST SFTP
global.port = '3000' // PORT SFTP
global.username = 'root' //USERNAME SFTP
global.password = '' //PASSWORD SFTP
global.sftppath = '/scriptfiles/WhiteList/' //UBAH MENJADI PATH TEMPAT FILE WHITELIST KALIAN BERADA

//—————「 Set Host Untuk Koneksi ke Server UCP 」—————//
global.hostucp = 'HOST_DATABASE_LU' // HOST/ENDPOINT DB
global.usernamedb = 'USERNAME_DATABASE_LU' // USERNAME DB
global.passworddb = 'PASSWORD_DATABASE_LU' // PASSWORD DB
global.database = 'DATABASE_LU' // NAMA DB

//—————「 Setting Samp Query 」—————//
global.IpServer = '157.245.151.97' //UBAH MENJADI IP SERVER KALIAN
global.PortServer = '7777' // UBAH MENJADI PORT SERVER KALIAN
global.NameServerLite = 'MCRP' // UBAH MENJADI NAMA SINGKATAN SERVER RP KALIAN CONTOH ALVEOULUS ROLEPLAY JADI ALRP
global.NameServerFull = 'MACITY ROLEPLAY' // UBAH MENJADI NAMA SERVER KALIAN

//—————「 Setting Bot 」—————//
global.owner = "62895327486788"
global.namabot = "BOT MCRP"
global.botname = "BOT MCRP"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'BotWlMCRP WHITELIST' //Gausah Juga
global.bugthomz = fs.readFileSync("./bugthomz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By Yanzzy🥵"

//—————「 Setting Nama Store 」—————//
global.namastore = "-"
global.nodana = "-"
global.nogopay = "-"
global.shopepay = "limit"
global.qris = "-"

//—————「 Setting Create Panel 」—————//
global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//—————「 Setting Anti Link 」—————//
global.antilink = false

const mess = {
   wait: "Tunggu Bang Lagi Saya Proses",
   success: "Berhasil ✓",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang Raihan Art Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu",
       admin: "Ga Usah Pake Fitur Ini Asu",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
