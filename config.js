const fs = require('fs')
const chalk = require('chalk')

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

//stick
global.author = 'Follow Instagram\n  @zzpa_ta  '
global.packname = 'hacktiv - bot\n'

//Link
global.gc = 'https://chat.whatsapp.com/Ha0umzzIVLR19TjlvvKlp5'
global.linkyt = 'https://youtube.com/@SUKAMI001'
global.linkgc = 'https://chat.whatsapp.com/Ha0umzzIVLR19TjlvvKlp5'

// Othr
global.owner = ['6285760536459']
global.premium = ['0']
global.ownername = 'zzpta'
global.botname = 'hacktiv - bot'
global.wm = '© hacktiv'
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ hacktiv ッ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '∘'
global.mess = {
    success: 'Berhasil',
    eror: 'Error',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//gambar
global.thumb = 'https://telegra.ph/file/86af4bca3faf0f9896d50.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
