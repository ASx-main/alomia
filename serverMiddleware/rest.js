import { Telegraf } from 'telegraf'
import axios from 'axios'
require('dotenv').config()
const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

const botToken = process.env.TELEGRAM_BOT_TOKEN
const chatId = process.env.TELEGRAM_CHAT_ID

const bot = new Telegraf(botToken)
bot.launch()

app.post('/telegram/sendMessage', async (req, res) => {
  const { name, phone } = req.body

  await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text: `Заявка\n\nИмя: ${name}\nТелефон: ${phone}`
  })

  res.json({ data: 'Запрос прошел успешно' })
})

module.exports = app
