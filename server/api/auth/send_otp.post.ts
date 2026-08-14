import { otpMap } from '#imports';

export default defineEventHandler(async (event) => {
  const { phone } = await readBody(event);

  if (!phone) {
    throw createError({ statusCode: 400, statusMessage: 'Номер телефона обязателен' });
  }

  const otp = Math.floor(1000 + Math.random() * 9000).toString(); 
  
  otpMap.set(phone, otp);

  return { success: true, message: 'Код отправлен', code: otp };
});