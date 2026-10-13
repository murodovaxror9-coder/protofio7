function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { type } = req.body ?? {}
  const isFormoOrder = type === 'formo-order'

  const botToken = isFormoOrder ? process.env.TELEGRAM_FORMO_BOT_TOKEN : process.env.TELEGRAM_CONTACT_BOT_TOKEN
  const chatId = isFormoOrder ? process.env.TELEGRAM_FORMO_CHAT_ID : process.env.TELEGRAM_CONTACT_CHAT_ID

  if (!botToken || !chatId) {
    console.error(isFormoOrder ? 'Missing TELEGRAM_FORMO_BOT_TOKEN or TELEGRAM_FORMO_CHAT_ID env vars' : 'Missing TELEGRAM_CONTACT_BOT_TOKEN or TELEGRAM_CONTACT_CHAT_ID env vars')
    return res.status(500).json({ error: 'Server is not configured' })
  }

  let text

  if (isFormoOrder) {
    const { name, phone, size, note } = req.body ?? {}

    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      typeof size !== 'string' ||
      !name.trim() ||
      !phone.trim() ||
      !size.trim()
    ) {
      return res.status(400).json({ error: 'Invalid form data' })
    }

    text =
      `<b>Yangi buyurtma so‘rovi — Formo</b>\n\n` +
      `<b>Ism:</b> ${escapeHtml(name.trim())}\n` +
      `<b>Telefon:</b> ${escapeHtml(phone.trim())}\n` +
      `<b>O‘lcham:</b> ${escapeHtml(size.trim())}\n` +
      (note && note.trim() ? `<b>Izoh:</b>\n${escapeHtml(note.trim())}` : '')
  } else {
    const { name, email, message } = req.body ?? {}

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({ error: 'Invalid form data' })
    }

    text =
      `<b>Yangi xabar — portfolio sayt</b>\n\n` +
      `<b>Ism:</b> ${escapeHtml(name.trim())}\n` +
      `<b>Email:</b> ${escapeHtml(email.trim())}\n` +
      `<b>Xabar:</b>\n${escapeHtml(message.trim())}`
  }

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    })

    if (!telegramRes.ok) {
      const errorBody = await telegramRes.text()
      console.error('Telegram API error:', errorBody)
      return res.status(502).json({ error: 'Failed to send message' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('send-telegram error:', err)
    return res.status(500).json({ error: 'Unexpected server error' })
  }
}
