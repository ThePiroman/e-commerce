import { otpMap } from '#imports'

export default defineEventHandler(async (event) => {
  const { phone } = await readBody(event)

  if (!phone) {
    throw createError({ statusCode: 400, statusMessage: 'Номер телефона обязателен' })
  }

  const otp = Math.floor(1000 + Math.random() * 9000).toString() 
  
  otpMap.set(phone, otp)

  console.log(`\n=============================`)
  console.log(`[MOCK SMS] Номер: ${phone} | Код: ${otp}`)
  console.log(`=============================\n`)

  return { success: true, message: 'Код отправлен (смотри терминал Nuxt)' }
})