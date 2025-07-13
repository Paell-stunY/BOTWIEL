/* SC WHITELIST
ASE : HW MODS
RECODE : SAMBO
CREACOT : SAMBO × PHILDE
*/

require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const mysql = require('mysql2/promise');
const sftpConfig = require('./sftp-config.json');
const SftpClient = require('ssh2-sftp-client');
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./all/bugthomz/ngazap')
const { buttonkal } = require('./all/bugthomz/buttonkal')
const { cttl } = require('./all/bugthomz/cttl')
const { tizi } = require('./all/bugthomz/tizi')
const { weg } = require('./all/bugthomz/weg')
const { virtex7 } = require('./all/bugthomz/virtex7')
const { remini } = require('./all/remini')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await haikal.decodeJid(haikal.user.id)
const sender = m.key.fromMe ? (haikal.user.id.split(':')[0]+'@s.whatsapp.net' || haikal.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : true
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : true
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : true
const isAdmins = isGroup ? groupAdmins.includes(sender) : true 
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const antilink = JSON.parse(fs.readFileSync('./all/antilink.json'));
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : true
 
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return haikal.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await haikal.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await haikal.getName(i + '@s.whatsapp.net')}\n
FN:${await haikal.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

/////DOWNLOAD MP3
const ytmp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, {
filter: 'audioonly'
}).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await haikal.sendMessage(m.chat, {
audio: fs.readFileSync(mp3File),
mimetype: 'audio/mp4',
ptt: true
}, {
quoted: m
})
})
} catch (err) {
reply(`${err}`)
}
}

async function connectDb() {
    const connection = await mysql.createConnection({
        host: global.hostucp,
        user: global.usernamedb,
        password: global.passworddb,
        database: global.database
    });
    return connection;
}


const thomz = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
// Function Reply
const reply = (teks) => { 
haikal.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "MCRP WHITELIST ROLEPLAY", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": m, 
"mediaUrl": "https://media.discordapp.net/attachments/1187551356857356370/1223121938940039198/IMG-20240202-WA0046.jpg?ex=6618b412&is=66063f12&hm=96d27490fc3b99b5b27af42a98bb318b363ad16ea77a613e18bf3a5bdad51995&", 
"sourceUrl": "https://youtube.com/@SAMBOGabut" }}}, { quoted: m }) }

if (m.isGroup && isBotAdmins && !m.key.fromMe && antilink) {
  if (body.match(`chat.whatsapp.com`)) {
    setTimeout(() => {
      haikal.sendMessage(from, { text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${sender.split("@")[0]} Maaf Link Yang Kamu Kirim Di Dalam Group Ini Akan Di Hapus Oleh Bot`, mentions: [sender]}, { quoted: m })
    }, 1000)
    setTimeout(() => {
      haikal.sendMessage(from, { delete: m.key })
    }, 2000)
  }
}
 
switch (command) {
// CASE CREATED BY SAMBO
          // JANGAN MENGUBAH KALAU TIDAK PAHAM
          // KALAU API GA BERFUNGSI BERARTI DOMAIN GW EXPIRED :v

          // SAMP CASE SYSTEM
          // ===========================================================================================================================================================

          case 'samp': {
              if (!text) return reply(`Kirim perintah:\n${prefix+command} ip|port\n\nContoh penggunaan:\n${prefix+command} 127.0.0.1|7777`)
              if (!text.includes('|') && !text.split(" ").length === 3) return reply(`Kirim perintah:\n${prefix+command} ip|port\n\nContoh penggunaan:\n${prefix+command} 127.0.0.1|7777`)

              const [ip, port] = text.includes('|') ? text.split("|") : text.split(" ").slice(-2);
              let sampApiUrl = `https://pablonetwork.cyclic.app/API/samp?key=pablo&host=${ip}&port=${port}`

              try {
                  let response = await axios(sampApiUrl)
                  let sampInfo = response.data;

                  // Mengambil nilai dari properti yang diinginkan
                  let serverIP = sampInfo.response.serverip;
                  let address = sampInfo.response.address;
                  let gamemode = sampInfo.response.gamemode;
                  let playerOnline = sampInfo.response.isPlayerOnline;
                  let maxPlayers = sampInfo.response.maxplayers;
                  let hostname = sampInfo.response.hostname;
                  let language = sampInfo.response.language;
                  let lagCompensation = sampInfo.response.rule.lagcomp;
                  let mapName = sampInfo.response.rule.mapname;
                  let version = sampInfo.response.rule.version;
                  let weather = sampInfo.response.rule.weather;
                  let webUrl = sampInfo.response.rule.weburl;
                  let worldTime = sampInfo.response.rule.worldtime;

                  // Menampilkan hasil ke pengguna dengan tata letak yang lebih rapi dan pemisahan menggunakan ":"
                  let result = `
*${hostname}*

> IP:PORT:
> [ ${serverIP} ]

> Gamemode:
> [ ${gamemode} ]

> Players Online:
> [ ${playerOnline} ]

> Max Players: 
> [ ${maxPlayers} ]

> Language: 
> [ ${language} ]

> Map: 
> [ ${mapName} ]

> Version: 
> [ ${version} ]

> Weather:
> [ ${weather} ]

> Url:
> [ ${webUrl} ]

> Time:
> [ ${worldTime} ]`;

                   // Menampilkan informasi pemain online (jika ada)
                   reply(result);
               } catch (error) {
                   console.error(error);
                   reply(`Unable To Connect ${ip}:${port}`);
               }
          }
          break;

          case 'ipinfo': {
              if (!text) return reply(`Kirim perintah:\n${prefix+command} [alamat IP]`)

              let ipAddress = text.trim();
              let ipApiUrl = `https://SAMBOnetwork.cyclic.app/API/samp/ipinfo?key=SAMBO&host=${ipAddress}`;

              try {
                  let response = await axios(ipApiUrl);
                  let ipInfo = await response.data;

                  // Menampilkan informasi alamat IP dari api
                  let result = `
                  *IP INFO:*

> IP: 
> [ ${ipInfo.query} ]

> Country: 
> [ ${ipInfo.country} ]

> Country Code: 
> [ ${ipInfo.countryCode} ]

> Region: 
> [ ${ipInfo.region} ]

> Region Name:
> [ ${ipInfo.regionName} ]

> City: 
> [ ${ipInfo.city} ]

> Zip: 
> [ ${ipInfo.zip} ]

> Lat:
> [ ${ipInfo.lat} ]

> Lon:
> [ ${ipInfo.lon} ]

> TimeZone: 
> [ ${ipInfo.timezone} ]

> ISP: 
> [ ${ipInfo.isp} ]

> Organization: 
> [ ${ipInfo.org} ]

> AS: 
> [ ${ipInfo.as} ]

> Mobile: 
> [ ${ipInfo.mobile ? 'Yes' : 'No'} ]
> Proxy: 
> [ ${ipInfo.proxy ? 'Yes' : 'No'} ]
> Hosting: 
> [ ${ipInfo.hosting ? 'Yes' : 'No'} ]`;

                  reply(result);
              } catch (error) {
                  console.error(error);
                  reply('Terjadi kesalahan saat mengambil informasi alamat IP dari SAMBOnetwork.cyclic.app.');
              }
          }
          break;

          case 'portscan': {
              if (!text) return reply(`Kirim perintah:\n${prefix+command} ip port\n\nContoh penggunaan:\n${prefix+command} 127.0.0.1 7777`)

              const [ip, port] = text.trim().split(" ");
              if (!ip || !port) return reply('Mohon berikan alamat IP dan nomor port yang valid.');          

              let sampApiUrl = `https://SAMBOnetwork.cyclic.app/API/samp/portscan?key=SAMBO&host=${ip}&port=${port}`;

              try {
                  let response = await axios(sampApiUrl)
                  let portscan= response.data;

                  let result = `
> ╭───「 *PORT SCAN* 」─────ఌ︎
> ├──────────────────ఌ︎
> │ *PORT:*
> │ *${portscan.response.status}*`;

                  if (portscan.response.status === 'open') {
                      result += `
> │ *Port terbuka: ${port}*
> ├──────────────────​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ఌ︎
> ╰─── *SAMBONetwork* ────​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ఌ︎`;
                  } else {
                      result += `
> │  *Port tertutup.*
> ├──────────────────​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ఌ︎
> ╰─── *SAMBONetwork* ────​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ఌ︎`;
                  }

                   reply(result);
               } catch (error) {
                   console.error(error);
                   reply(`Unable To Connect ${ip}:${port}`);
               }
          }
          break;

          case 'pingscan': {
              if (!text) return reply(`Kirim perintah:\n${prefix+command} ip|port\n\nContoh penggunaan:\n${prefix+command} 127.0.0.1 7777`)

              const [ip, port] = text.trim().split(" ");
              if (!ip || !port) return reply('Mohon berikan alamat IP dan nomor port yang valid.');          

              let sampApiUrl = `https://SAMBOnetwork.cyclic.app/API/samp/ping?key=SAMBO&host=${ip}&port=${port}`;

              try {
                  let response = await axios(sampApiUrl)
                  let sampping = response.data;

                  let result = `
> ╭───「 *PING SCAN* 」─────ఌ︎
> ├──────────────────ఌ︎
> │ *PING:*
> │ *${sampping.response.ping}*
> ├──────────────────​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ఌ︎
> ╰─── *SAMBONetwork* ────​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ఌ︎`;

                   reply(result);
               } catch (error) {
                   console.error(error);
                   reply(`Unable To Connect ${ip}:${port}`);
               }
          }
          break;

          case 'ddosggshss': {
              if (!text) return reply(`Kirim perintah:\n${prefix+command} [methods] [host] [port] [time]`)

              const [jenisAtt, host, port, time] = text.trim().split(" ");
              if (!jenisAtt || !host || !port || !time) return reply('Mohon berikan semua parameter yang diperlukan.');

              let apiUrl = '';
              let attType = '';

              if (jenisAtt.toLowerCase() === 'tls') {
                  apiUrl = `https://api-ddos.cyclic.app/?host=${host}&time=${time}&method=TLS`;
                  attType = 'DDoS Attack';
              } else if (jenisAtt.toLowerCase() === 'samp') {
                  apiUrl = `https://flask-production-1db9.up.railway.app/?host=${host}&port=${port}&time=${time}`;
                  attType = 'DDoS Attack';
              } else {
                  return reply('Methods tidak valid. Harap pilih "TLS" atau "SAMP".');
              }

              try {
                  let response = await axios(apiUrl);

                  if (!response.ok) {
                      throw new Error(`Terjadi kesalahan saat meminta API. Kode status: ${response.status}`);
                  }

                  reply(`*${attType} Successfully Attack Sent!*
                  - Methods: ${jenisAtt}
                  - Host: ${host}
                  - Port: ${port}
                  - Time: ${time}
                  - Sent By SAMBONetwork`);
              } catch (error) {
                  console.error(error);
                  reply(`Terjadi kesalahan saat melakukan ${attType}. Mohon periksa kembali parameter yang diberikan.`);
              }
          }
          break;

          case 'ddos': {
              reply('Fitur Ini Di Nonaktifkan');
          }
          break;

          case 'menu': {
            const mode = haikal.public ? 'Public' : 'Self';
            const uptime = process.uptime();
            const uptimeText = `${Math.floor(uptime / 3600)} jam, ${Math.floor((uptime % 3600) / 60)} menit, ${Math.floor(uptime % 60)} detik`;

        reply(`
╭───「 *𝙸𝙽𝙵𝙾 𝙱𝙾𝚃* 」─────ఌ︎
├──────────────────ఌ︎
│ *𝙽𝙰𝙼𝙰 𝙱𝙾𝚃* : MCRP WHITELIST
│ *𝙽𝙰𝙼𝙰 𝙳𝙴𝚅 𝙱𝙾𝚃* : JUAN
│ *𝙾𝚆𝙽𝙴𝚁* : wa.me/6283169170104
│ *𝙳𝙴𝚅* : wa.me/6283169170104
│ *𝚄𝙿𝚃𝙸𝙼𝙴* : ${uptimeText}
│ *𝙼𝙾𝙳𝙴* : ${mode}
│ *𝚃𝚈𝙿𝙴* : NodeJs
│ *𝚄𝙿𝙳𝙰𝚃𝙴* : V4✔︎
├──────────────────ఌ︎
╰─── 『 *MCRP WHITELIST*』 ────ఌ︎

『 *ALL MENU∘₊✧*』

╔━═━≫
║⫸ ➪ samp
║⫸ ➪ wl
║⫸ ➪ unwl
║⫸ ➪ listdb
║⫸ ➪ ip
╚━═━≫
               `);
        const pl = 'music.mp3'; // Alamat file music.mp3
        haikal.sendMessage(m.chat, {
            audio: fs.readFileSync(pl),
            fileName: 'music.mp3',
            mimetype: 'audio/mp4',
            ptt: true,
        }, { quoted: m }).then(() => {
            console.log('File terkirim');
        }).catch(err => {
            console.error(err);
        });
          }
          break;

          case 'fivem': {
              reply('Fitur Belum Tersedia');
          }
          break;

          case 'mc':
    // Pastikan pesan memiliki argumen yang cukup
    if (!args || args.length < 2) {
        reply('Format penggunaan salah. Gunakan .mc [bed/jav] [ip]');
        break;
    }
    
    // Pisahkan argumen menjadi tipe dan alamat IP
    const type = args[0].toLowerCase();
    const ip = args.slice(1).join(' ');

    let apiUrl = '';
    
    // Tentukan URL API berdasarkan tipe server Minecraft
    if (type === 'bed') {
        apiUrl = `https://SAMBOnetwork.cyclic.app/API/mc/bed?key=SAMBO&host=${ip}`;
    } else if (type === 'jav') {
        apiUrl = `https://SAMBOnetwork.cyclic.app/API/mc/jav?key=SAMBO&host=${ip}`;
    } else {
        reply('Tipe Minecraft tidak valid. Gunakan "bed" untuk Bedrock atau "jav" untuk Java.');
        break;
    }

    // Mengirim permintaan HTTP ke API menggunakan axios
    axios.get(apiUrl)
        .then(response => {
            // Memproses data respons dari API
            const data = response.data;

            // Menyiapkan pesan berformat
            let message = `
*${data.hostname}*

> IP:PORT:
> [ ${data.ip}:${data.port} ]

> Ping:
> [ ${data.debug.ping} ]

> Query:
> [ ${data.debug.query} ]

> SRV:
> [ ${data.debug.srv} ]

> Query Mismatch:
> [ ${data.debug.querymismatch} ]

> IP in SRV:
> [ ${data.debug.ipinsrv} ]

> CNAME in SRV:
> [ ${data.debug.cnameinsrv} ]

> Animated MOTD:
> [ ${data.debug.animatedmotd} ]

> Cache Hit:
> [ ${data.debug.cachehit} ]

> Cache Time:
> [ ${data.debug.cachetime} ]

> Cache Expire:
> [ ${data.debug.cacheexpire} ]

> API Version:
> [ ${data.debug.apiversion} ]

> MOTD:
> [ ${data.motd.clean[0]} ]

> Online:
> [ ${data.players.online} ]

> Max:
> [ ${data.players.max} ]

> Version:
> [ ${data.version} ]

> Online:
> [ ${data.online} ]

> Version:
> [ ${data.protocol.version} ]

> Name:
> [ ${data.protocol.name} ]

> Hostname:
> [ ${data.hostname} ]

> Software:
> [ ${data.software} ]

> Info:
> [ ${data.info.clean[0]} ]
> [ ${data.info.clean[1]} ]
> [ ${data.info.clean[2]} ]

> Eula Blocked:
> [ ${data.eula_blocked} ]
`;

            reply(message);
        })
        .catch(error => {
            console.error('Error:', error);
            reply(`Unable To Connect ${ip}`);
        });
    break;

          case "public": {
          if (!isOwner) return reply(mess.only.owner)
          haikal.public = true
          reply(mess.success)
          }
          break;
    
          case "self": {
    if (!isOwner) return reply(mess.only.owner)
    haikal.public = false
    reply(mess.success)
    }
          break;
    
          case "sc" :
          case "script": {
          const text12 = `SCRIPT INI DIJUAL INGIN MEMBELI? BISA LANGSUNG CHAT OWNER INI NOMOR NYA wa.me/6283169170104`
          reply(text12)
          }
          break;

          case 'sys':
          case 'system':
          case 'infobot':
          case 'info': 
          case 'speed':
          case 'ping': {
        const os = require('os');
        const { performance } = require('perf_hooks');
        const startTime = performance.now();

        // Mendapatkan informasi UPTIME
        const uptime = process.uptime();
        const uptimeText = `${Math.floor(uptime / 3600)} jam, ${Math.floor((uptime % 3600) / 60)} menit, ${Math.floor(uptime % 60)} detik`;

        // Menghitung ping
            const start = Date.now();
            const end = Date.now();
            const ping = (end - start).toFixed(2);

        // Mendapatkan informasi sistem
        const systemInfo = `
╭───[ System Information ]
│ Platform: ${os.platform()}
│ CPU Architecture: ${os.arch()}
│ Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
│ Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
│ CPU Cores: ${os.cpus().length}
│ Ping: ${ping} ms
╰───[ Uptime ]
${uptimeText}
        `;

        reply(systemInfo);
          }
          break;
    
          case "owner": {
          const repf = await haikal.sendMessage(from, { 
    contacts: { 
    displayName: `${list.length} 62857552519341`, 
    contacts: list }, contextInfo: {
    forwardingScore: 9999999, 
    isForwarded: true,
    mentionedJid: [sender]
    }}, { quoted: m })
    haikal.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Ini Owner Ku Kak Kalo Mau Buy Script Ke Dia Aja`, contextInfo:{
    forwardingScore: 9999999, 
    isForwarded: true,
    mentionedJid:[sender]
    }}, { quoted: repf })
          }
          break

    case 'shutdown': {
      if (!isOwner) return reply(`Perintah Ini Hanya Dapat Digunakan Oleh Owner`);
        const delayInSeconds = 6; // Delay sebelum shutdown dalam detik
        const editInterval = 1; // Interval edit pesan dalam detik

        let remainingTime = delayInSeconds;

        const editMessage = () => {
            if (remainingTime <= 5) { // Membuat pesan 1 detik sebelum proses exit
                m.reply(`Bot akan dimatikan dalam ${remainingTime - 1} detik.`);
            }
            remainingTime -= editInterval;
        };

        const editIntervalId = setInterval(editMessage, editInterval * 1000);

        // Menunggu delay sebelum menjalankan process.exit()
        setTimeout(() => {
            clearInterval(editIntervalId); // Menghentikan interval editing
            m.reply('Bot telah di shutdown.');
            setTimeout(() => {
                process.exit();
            }, 1000); // Delay 1 detik sebelum process.exit()
        }, delayInSeconds * 1000);
    }
    break;

    case 'restarthhhhh': {
        if (!isOwner) return reply(`Perintah ini hanya dapat digunakan oleh owner.`);

        const reloadBot = () => {
            // Menghapus cache dari semua modul yang telah dimuat
            Object.keys(require.cache).forEach(key => {
                delete require.cache[key];
            });

            // Memuat kembali modul utama bot
            require('./index.js'); // Ganti dengan nama file utama bot Anda
        };

        m.reply('Merestart bot...');

        // Menunggu sejenak sebelum menjalankan reloadBot()
        setTimeout(() => {
            reloadBot();
            m.reply('Bot telah berhasil direstart!');
        }, 1000); // Delay 1 detik sebelum reloadBot()
    }
    break;
    
case 'ytplay':
case 'play':{
if (!q) return reply(`🚩 *Example:* ${prefix+command} lagu sad`)
let yts = require('yt-search')
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let a = `💸Duration : ${anu.timestamp}\n🎉Viewers : ${anu.views}\n`
await haikal.sendMessage(m.chat, {
text: a,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: anu.title,
body: anu.ago,
thumbnailUrl: anu.image,
sourceUrl: anu.url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
await sleep(1000)
if (anu.seconds < 1000) {
await ytmp3(anu.url)
} else reply('durasi nya bro ke besaran')
}
break


          case 'wl': {
              const sftpConfig = JSON.parse(fs.readFileSync('sftp-config.json', 'utf8'));
              const wlGroup = sftpConfig.wlgrup;

              if (m.chat == "") return reply('Perintah ini hanya dapat digunakan di grup whitelist.');

              if (!text) return reply(`Kirim perintah:\n${prefix}wl [ Nama ]\nContoh .wl Sambo_Philde`);

              const nama = text.trim();
              const nomorTelepon = m.sender.split('@')[0]; // Mendapatkan nomor telepon pengirim

              // Fungsi untuk memeriksa kata-kata terlarang
              function isToxic(name) {
                  const toxicWords = require('./toxic.json');
                  return toxicWords.some(word => name.toLowerCase().includes(word.toLowerCase()));
              }

              // Baca file database.json jika ada
              let database = {};
              if (fs.existsSync('database.json')) {
                  database = JSON.parse(fs.readFileSync('database.json'));
              }

              // Periksa apakah nama sudah digunakan
              const existingNumber = Object.keys(database).find(number => database[number] === nama);
              if (existingNumber) {
                  return reply(`Nama "${nama}" telah digunakan oleh nomor telepon ${existingNumber}.`);
              }

               if (m.body.length > 20) {
                 return reply(`Nama ${nama} terlalu panjang.`);
               }

              // Periksa apakah nomor telepon sudah ada di dalam database
              if (database[nomorTelepon]) {
                  return reply(`Anda sudah whitelist sebelumnya.`);
              }

              // Periksa apakah nama mengandung kata-kata terlarang
              if (isToxic(nama)) {
                  return reply('Nama yang Anda masukkan mengandung kata-kata terlarang.');
              }

              const wlFilePath = `${global.sftppath}${nama}.txt`;

              try {
                  const sftp = new SftpClient(); // Inisialisasi objek SFTP

                  await sftp.connect({
                    host: `${global.host}`,
                    port: `${global.port}`,
                    username: `${global.username}`,
                    password: `${global.password}`
                });

                  // Membuat file whitelist jika belum ada
                  await sftp.put(Buffer.from(''), wlFilePath, { mode: 0o644 });

                  // Menambahkan nama ke file whitelist
                  await sftp.append(Buffer.from(`${nama}\n`), wlFilePath);

                  await sftp.end();

                  // Simpan nama dan nomor telepon ke database
                  database[nomorTelepon] = nama;
                  fs.writeFileSync('database.json', JSON.stringify(database, null, 2));

                  reply(`
*Dear Warga ${global.NameServerLite} !*
 
*Pendaftaran Nama anda berhasil didaftarkan! harap gunakan nama karakter anda dibawah ini untuk Registrasi pada InGame.*
 
*Nama: ${nama}*
 
*IP:* ${global.IpServer}:${global.PortServer}
 
*©2024© ${global.NameServerFull}*`);
              } catch (error) {
                  console.error(error);
                  reply('Terjadi kesalahan saat menambahkan nama dan nomor telepon ke whitelist.');
              }
          }
          break;

          case 'unwl': {
              const sftpConfig = JSON.parse(fs.readFileSync('sftp-config.json', 'utf8'));
              const adminGroup = sftpConfig.admingrup;

              if (m.chat == "") return reply('Perintah ini hanya dapat digunakan di grup admin.');

              if (!isOwner) return reply(`Perintah Ini Hanya Dapat Digunakan Oleh Owner`); // Memeriksa apakah pengirim pesan adalah pemilik

              if (!text) return reply(`Kirim perintah:\n${prefix}unwl [nama]`);

              const nama = text.trim();

              // Baca file database.json jika ada
              let database = {};
              if (fs.existsSync('database.json')) {
                  database = JSON.parse(fs.readFileSync('database.json'));
              }

              // Cek apakah nama ada di dalam database
              const nomorTelepon = Object.keys(database).find(key => database[key] === nama);
              if (!nomorTelepon) {
                  return reply(`Nama "${nama}" tidak ditemukan dalam whitelist.`);
              }

              // Menghapus entri dari database
              delete database[nomorTelepon];
              fs.writeFileSync('database.json', JSON.stringify(database, null, 2));

              // Menghapus entri dari file SFTP
              try {
                  const sftp = new SftpClient(); // Inisialisasi objek SFTP

                  await sftp.connect({
                    host: `${global.host}`,
                    port: `${global.port}`,
                    username: `${global.username}`,
                    password: `${global.password}`
                });

                  const wlFilePath = `${global.sftppath}${nama}.txt`;
                  await sftp.delete(wlFilePath); // Menghapus file whitelist dengan nama yang diberikan

                  await sftp.end();
              } catch (error) {
                  console.error(error);
                  return reply('Terjadi kesalahan saat menghapus nama dari whitelist.');
              }

              // Beritahu pengguna bahwa nama telah dihapus dari whitelist
              reply(`Nama "${nama}" telah dihapus dari whitelist.`);
          }
          break;

          case 'listdb': {
              const sftpConfig = JSON.parse(fs.readFileSync('sftp-config.json', 'utf8'));
              const adminGroup = sftpConfig.admingrup;

              if (!m.isGroup) return reply('Perintah ini hanya bisa digunakan dalam grup!');
              if (m.chat == "") return reply('Perintah ini hanya dapat digunakan di grup admin.');

              // Baca file database.json jika ada
              let database = {};
              if (fs.existsSync('database.json')) {
                  database = JSON.parse(fs.readFileSync('database.json'));
              }

              // Membuat daftar nama yang terdaftar
              let daftarNama = 'Daftar Nama yang Terdaftar:\n';
              Object.keys(database).forEach(number => {
                  const nama = database[number];
                  daftarNama += `- ${nama} (${number})\n`;
              });

              // Mengirim daftar nama ke pengirim pesan
              reply(daftarNama);
          }
          break;
case 'ucperror': {
    if (m.chat == "") return reply('Perintah ini hanya dapat digunakan di grup whitelist.');

    if (!text) return reply(`Kirim perintah:\n${prefix}ucp [Nama|DiscordID]\nContoh .ucp SAMBOSatoru|123456789`);

    const [nama, discordID] = text.trim().split('|');
    if (!nama || !discordID) return reply(`Format tidak valid. Contoh penggunaan: ${prefix}ucp SAMBOSatoru|123456789`);

    const nomorTelepon = m.sender.split('@')[0]; // Mendapatkan nomor telepon pengirim

    function isToxic(name) {
        const toxicWords = require('./toxic.json');
        return toxicWords.some(word => name.toLowerCase().includes(word.toLowerCase()));
    }

    if (nama.length > 20) {
        return reply(`Nama ${nama} terlalu panjang.`);
    }

    if (isToxic(nama)) {
        return reply('Nama yang Anda masukkan mengandung kata-kata terlarang.');
    }

    // Baca file database.json jika ada
    let database = {};
    if (fs.existsSync('database.json')) {
        database = JSON.parse(fs.readFileSync('database.json'));
    }

    // Periksa apakah nomor telepon sudah ada di dalam database
    if (database[nomorTelepon]) {
        return reply(`Anda sudah whitelist sebelumnya.`);
    }

    try {
        const connection = await connectDb();

        // Periksa apakah nama sudah ada di MySQL
        const [rows] = await connection.execute('SELECT * FROM playerucp WHERE ucp = ?', [nama]);
        if (rows.length > 0) {
            const verifyCode = rows[0].verifycode;

            // Kirim pesan verifikasi melalui pesan pribadi
            haikal.sendMessage(nomorTelepon + "@s.whatsapp.net", { 
                text: `
*_UCP ANDA_*
Ic/Karaktermu
- Nama: ${nama}
- Code: ${verifyCode}
NOTE: *NUSA ROLEPLAY*`
            });

            return reply(`Nama "${nama}" telah digunakan. Kode verifikasi telah dikirimkan melalui pesan pribadi.`);
        }

        // Tambahkan nama dan Discord ID ke MySQL
        await connection.execute('INSERT INTO playerucp (ucp, DiscordID) VALUES (?, ?)', [nama, discordID]);

        // Ambil kembali entri yang baru saja ditambahkan untuk mendapatkan kode verifikasi
        const [result] = await connection.execute('SELECT verifycode FROM playerucp WHERE ucp = ?', [nama]);
        const verifyCode = result[0].verify_code;

        connection.end();

        // Simpan nama dan nomor telepon ke database.json
        database[nomorTelepon] = nama;
        fs.writeFileSync('database.json', JSON.stringify(database, null, 2));

        // Kirim pesan verifikasi melalui pesan pribadi
        reply(`
*Dear Warga ${global.NameServerLite} !*

*Pendaftaran Nama anda berhasil didaftarkan! Harap gunakan nama karakter anda dibawah ini untuk Registrasi pada InGame.*

*Nama: ${nama}*
*Discord ID: ${discordID}*

*IP:* ${global.IpServer}:${global.PortServer}

*©2024© ${global.NameServerFull}*`);

        haikal.sendMessage(nomorTelepon + "@s.whatsapp.net", { 
            text: `
*_UCP ANDA_*
Ic/Karaktermu
- Nama: ${nama}
- Code: ${verifyCode}
NOTE: *NUSA ROLEPLAY*`
        });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menambahkan nama ke whitelist.');
    }
}
break;
        
case 'ucp': {
    if (m.chat == "") return reply('Perintah ini hanya dapat digunakan di grup whitelist.');

    if (!text) return reply(`Kirim perintah:\n${prefix}ucp [Nama|DiscordID]\nContoh .ucp SAMBOSatoru|123456789`);

    const [nama, discordID] = text.trim().split('|');
    if (!nama || !discordID) return reply(`Format tidak valid. Contoh penggunaan: ${prefix}ucp SAMBOSatoru|123456789`);

    const nomorTelepon = m.sender.split('@')[0]; // Mendapatkan nomor telepon pengirim

    function isToxic(name) {
        const toxicWords = require('./toxic.json');
        return toxicWords.some(word => name.toLowerCase().includes(word.toLowerCase()));
    }

    if (nama.length > 20) {
        return reply(`Nama ${nama} terlalu panjang.`);
    }

    if (isToxic(nama)) {
        return reply('Nama yang Anda masukkan mengandung kata-kata terlarang.');
    }

    // Baca file database.json jika ada
    let database = {};
    if (fs.existsSync('database.json')) {
        database = JSON.parse(fs.readFileSync('database.json'));
    }

    // Periksa apakah nomor telepon sudah ada di dalam database
    if (database[nomorTelepon]) {
        return reply(`Anda sudah whitelist sebelumnya.`);
    }

    // Periksa apakah nama sudah digunakan
    const existingNumber = Object.keys(database).find(number => database[number] === nama);
    if (existingNumber) {
        return reply(`Nama "${nama}" telah digunakan oleh nomor telepon ${existingNumber}.`);
    }

    try {
        const connection = await connectDb();

        // Periksa apakah nama sudah ada di MySQL
        const [rows] = await connection.execute('SELECT * FROM playerucp WHERE ucp = ?', [nama]);
        if (rows.length > 0) {
            return reply(`Nama "${nama}" telah digunakan.`);
        }

        // Tambahkan nama dan Discord ID ke MySQL
        await connection.execute('INSERT INTO playerucp (ucp, DiscordID) VALUES (?, ?)', [nama, discordID]);

        // Ambil kembali entri yang baru saja ditambahkan untuk mendapatkan kode verifikasi
        const [result] = await connection.execute('SELECT verifycode FROM playerucp WHERE ucp = ?', [nama]);
        const verifyCode = result[0].verifycode;

        connection.end();

        // Simpan nama dan nomor telepon ke database.json
        database[nomorTelepon] = nama;
        fs.writeFileSync('database.json', JSON.stringify(database, null, 2));

        // Kirim pesan verifikasi melalui pesan pribadi
        reply(`
*Dear Warga ${global.NameServerLite} !*

*Pendaftaran Nama anda berhasil didaftarkan! Harap gunakan nama karakter anda dibawah ini untuk Registrasi pada InGame.*

*Nama: ${nama}*
*Discord ID: ${discordID}*

*IP:* ${global.IpServer}:${global.PortServer}

*©2024© ${global.NameServerFull}*`);

        haikal.sendMessage(nomorTelepon + "@s.whatsapp.net", { 
            text: `*DATA UCP ANDA*

* Nama: ${nama}
* Verifycode: ${verifyCode}
* IP & Port Server: ${global.IpServer}:${global.PortServer}

*Note : Simpan Data Anda Ini Karena Data Ini Digunakan Untuk Anda Melakukan Registrasi Ke Dalam Server*

*©2024 ${global.NameServerFull}*`
        });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menambahkan nama ke whitelist.');
    }
}
break;

case 'unucp': {
    if (m.chat == "") return reply('Perintah ini hanya dapat digunakan di grup admin.');

    if (!isOwner) return reply(`Perintah Ini Hanya Dapat Digunakan Oleh Owner`);

    if (!text) return reply(`Kirim perintah:\n${prefix}unucp [nama]`);

    const nama = text.trim();

    // Baca file database.json jika ada
    let database = {};
    if (fs.existsSync('database.json')) {
        database = JSON.parse(fs.readFileSync('database.json'));
    }

    // Cek apakah nama ada di dalam database
    const nomorTelepon = Object.keys(database).find(key => database[key] === nama);
    if (!nomorTelepon) {
        return reply(`Nama "${nama}" tidak ditemukan dalam whitelist.`);
    }

    try {
        const connection = await connectDb();

        // Hapus entri dari MySQL
        await connection.execute('DELETE FROM playerucp WHERE ucp = ?', [nama]);

        connection.end();

        // Hapus entri dari database.json
        delete database[nomorTelepon];
        fs.writeFileSync('database.json', JSON.stringify(database, null, 2));

        reply(`Nama "${nama}" telah dihapus dari whitelist.`);
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghapus nama dari whitelist.');
    }
}
break;

case 'daftarucp': {
    if (!m.isGroup) return reply('Perintah ini hanya bisa digunakan dalam grup!');
    if (m.chat == "") return reply('Perintah ini hanya dapat digunakan di grup admin.');

    try {
        const connection = await connectDb();

        // Membuat daftar nama yang terdaftar di MySQL
        const [rows] = await connection.execute('SELECT * FROM playerucp');
        let daftarNama = 'Daftar Nama yang Terdaftar:\n';
        rows.forEach(row => {
            daftarNama += `- ${row.ucp} (Discord ID: ${row.DiscordID})\n`;
        });

        connection.end();

        // Mengirim daftar nama ke pengirim pesan
        reply(daftarNama);
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat membaca daftar whitelist.');
    }
}
break;

        
          case 'getid': {
              
              if (!m.isGroup) return; // Pastikan perintah hanya dapat digunakan di grup

              // Kirim ID grup ke pengguna
              reply(`ID grup ini adalah: ${m.chat}`);
          }
          break;

          case 'server': {
              let sampApiUrl = `https://SAMBOnetwork.cyclic.app/API/samp?key=SAMBO&host=${global.IpServer}&port=${global.PortServer}`

              try {
                  let response = await axios(sampApiUrl)
                  let sampInfo = response.data;

                  // Mengambil nilai dari properti yang diinginkan
                  let serverIP = sampInfo.response.serverip;
                  let address = sampInfo.response.address;
                  let gamemode = sampInfo.response.gamemode;
                  let playerOnline = sampInfo.response.isPlayerOnline;
                  let maxPlayers = sampInfo.response.maxplayers;
                  let hostname = sampInfo.response.hostname;
                  let language = sampInfo.response.language;
                  let lagCompensation = sampInfo.response.rule.lagcomp;
                  let mapName = sampInfo.response.rule.mapname;
                  let version = sampInfo.response.rule.version;
                  let weather = sampInfo.response.rule.weather;
                  let webUrl = sampInfo.response.rule.weburl;
                  let worldTime = sampInfo.response.rule.worldtime;

                  // Menampilkan hasil ke pengguna dengan tata letak yang lebih rapi dan pemisahan menggunakan ":"
                  let result = `
*${hostname}*

> IP:PORT:
> [ ${serverIP} ]

> Gamemode:
> [ ${gamemode} ]

> Players Online:
> [ ${playerOnline} ]

> Max Players: 
> [ ${maxPlayers} ]

> Language: 
> [ ${language} ]

> Map: 
> [ ${mapName} ]

> Version: 
> [ ${version} ]

> Weather:
> [ ${weather} ]

> Url:
> [ ${webUrl} ]

> Time:
> [ ${worldTime} ]`;

                  // Menampilkan informasi pemain online (jika ada)
                  reply(result);
              } catch (error) {
                  console.error(error);
                  reply('> Now Server Is Offline 🔴.');
              }
          }
          break;

          case 'player': {
              let sampApiUrl = `https://SAMBOnetwork.cyclic.app/API/samp?key=SAMBO&host=${global.IpServer}&port=${global.PortServer}`

              try {
                  let response = await axios(sampApiUrl)
                  let sampInfo = response.data;

                  // Mengambil nilai dari properti yang diinginkan
                  let serverIP = sampInfo.response.serverip;
                  let address = sampInfo.response.address;
                  let gamemode = sampInfo.response.gamemode;
                  let playerOnline = sampInfo.response.isPlayerOnline;
                  let maxPlayers = sampInfo.response.maxplayers;
                  let hostname = sampInfo.response.hostname;
                  let language = sampInfo.response.language;
                  let lagCompensation = sampInfo.response.rule.lagcomp;
                  let mapName = sampInfo.response.rule.mapname;
                  let version = sampInfo.response.rule.version;
                  let weather = sampInfo.response.rule.weather;
                  let webUrl = sampInfo.response.rule.weburl;
                  let worldTime = sampInfo.response.rule.worldtime;

                  // Menampilkan hasil ke pengguna dengan tata letak yang lebih rapi dan pemisahan menggunakan ":"
                  let result = `
*${hostname}*

> IP:PORT:
> ${serverIP}

> Hostname:
> ${hostname}

> Player Online: 
> ${playerOnline}

> Max Players: 
> ${maxPlayers}`;

                  // Menampilkan informasi pemain online (jika ada)
                  reply(result);
              } catch (error) {
                  console.error(error);
                  reply('> Now Server Is Offline 🔴.');
              }
          }
          break;

          case 'status': {
              let sampApiUrl = `https://SAMBOnetwork.cyclic.app/API/samp?key=SAMBO&host=${global.IpServer}&port=${global.PortServer}`

              try {
                  let response = await axios(sampApiUrl)
                  let sampInfo = response.data;

                  // Mengambil nilai dari properti yang diinginkan
                  let serverIP = sampInfo.response.serverip;
                  let address = sampInfo.response.address;
                  let gamemode = sampInfo.response.gamemode;
                  let playerOnline = sampInfo.response.isPlayerOnline;
                  let maxPlayers = sampInfo.response.maxplayers;
                  let hostname = sampInfo.response.hostname;
                  let language = sampInfo.response.language;
                  let lagCompensation = sampInfo.response.rule.lagcomp;
                  let mapName = sampInfo.response.rule.mapname;
                  let version = sampInfo.response.rule.version;
                  let weather = sampInfo.response.rule.weather;
                  let webUrl = sampInfo.response.rule.weburl;
                  let worldTime = sampInfo.response.rule.worldtime;

                  // Menampilkan hasil ke pengguna dengan tata letak yang lebih rapi dan pemisahan menggunakan ":"
                  let result = `
> Now Server Is Online 🟢.`;

                  // Menampilkan informasi pemain online (jika ada)
                  reply(result);
              } catch (error) {
                  console.error(error);
                  reply('> Now Server Is Offline 🔴.');
              }
          }
          break;

          case 'ip': {
              let IpMessage= `
> ${global.IpServer}:${global.PortServer}
              `;

              reply(IpMessage);
          }
          break;

          case 'test': {
            reply(`${global.NameServerLite}`)
            reply(`${global.NameServerFull}`)
          }
          break;

// NSFW AREA
// ===========================================================================================================================================================
          case 'nsfwmenu': {
            const mode = haikal.public ? 'Public' : 'Self';
            const uptime = process.uptime();
            const uptimeText = `${Math.floor(uptime / 3600)} jam, ${Math.floor((uptime % 3600) / 60)} menit, ${Math.floor(uptime % 60)} detik`;

        reply(`
╭───「 *𝙸𝙽𝙵𝙾 𝙱𝙾𝚃* 」─────ఌ︎
├──────────────────ఌ︎
│ *𝙽𝙰𝙼𝙰 𝙱𝙾𝚃* : MCRP WHITELIST
│ *𝙽𝙰𝙼𝙰 𝙳𝙴𝚅 𝙱𝙾𝚃* : JUAN
│ *𝙾𝚆𝙽𝙴𝚁* : wa.me/6283169170104
│ *𝙳𝙴𝚅* : wa.me/6283169170104
│ *𝚄𝙿𝚃𝙸𝙼𝙴* : ${uptimeText}
│ *𝙼𝙾𝙳𝙴* : ${mode}
│ *𝚃𝚈𝙿𝙴* : NodeJs
│ *𝚄𝙿𝙳𝙰𝚃𝙴* : V3✔︎
├──────────────────ఌ︎
╰─── 『 *MCRP WHITELIST*』 ────ఌ︎

『 *ALL MENU∘₊✧*』

╔━═━≫
║⫸ ➪ trap
║⫸ ➪ hneko
║⫸ ➪ nwaifu
║⫸ ➪ gasm
║⫸ ➪ animespank
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
║⫸ ➪ 
╚━═━≫
               `);
        const pl = 'music.mp3'; 
        haikal.sendMessage(m.chat, {
            audio: fs.readFileSync(pl),
            fileName: 'music.mp3',
            mimetype: 'audio/mp4',
            ptt: true,
        }, { quoted: m }).then(() => {
            console.log('File terkirim');
        }).catch(err => {
            console.error(err);
        });
          }
          break;

case 'trap' :

 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
haikal.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :

    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
haikal.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :

    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
haikal.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
					
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
haikal.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'animespank':

 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await haikal.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
          // BATAS NSFW AREA
          // ===========================================================================================================================================================

          // BATAS SUCI
          // ===========================================================================================================================================================
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
