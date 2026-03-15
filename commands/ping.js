import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 𝖸𝕠𝔯𝔥𝐚 2B-VFX Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `WINTER DEV 237`
        )
    }, { quoted: message })
}