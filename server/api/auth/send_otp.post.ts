import { otpMap } from '#imports'

export default defineEventHandler(async (event) => {
  const { phone } = await readBody(event)

  if (!phone) {
    throw createError({ statusCode: 400, statusMessage: 'Номер телефона обязателен' })
  }

  // Генерируем простой код для тестов (или статичный '0000', если лень вводить)
  const otp = Math.floor(1000 + Math.random() * 9000).toString() 
  
  // Сохраняем в память
  otpMap.set(phone, otp)

  // ЭМУЛЯЦИЯ ОТПРАВКИ SMS: Выводим в консоль разработчика
  console.log(`\n=============================`)
  console.log(`[MOCK SMS] Номер: ${phone} | Код: ${otp}`)
  console.log(`=============================\n`)

  return { success: true, message: 'Код отправлен (смотри терминал Nuxt)' }
})