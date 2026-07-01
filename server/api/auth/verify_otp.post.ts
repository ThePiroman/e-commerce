import { otpMap } from '#imports'

export default defineEventHandler(async (event) => {
  const { phone, code } = await readBody(event)
  const JSON_SERVER_URL = 'http://localhost:3001/users'

  // 1. Проверяем код из нашего хранилища
  const savedOtp = otpMap.get(phone)
  if (!savedOtp || savedOtp !== code) {
    throw createError({ statusCode: 401, statusMessage: 'Неверный код' })
  }

  // Код подошел, удаляем его из памяти
  otpMap.delete(phone)

  // 2. Идем в json-server и проверяем, есть ли такой юзер
  let user = null;
  try {
    // Ищем пользователя по номеру (json-server поддерживает фильтрацию через ?field=value)
    const users = await $fetch(`${JSON_SERVER_URL}?phone=${encodeURIComponent(phone)}`)
    
    if (users && users.length > 0) {
      user = users[0] // Пользователь найден
    } else {
      // Пользователя нет — создаем нового
      user = await $fetch(JSON_SERVER_URL, {
        method: 'POST',
        body: { 
          phone, 
          createdAt: new Date().toISOString() 
        }
      })
    }
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Ошибка связи с базой данных' })
  }

  // 3. Генерируем фейковый токен для практики
  // В реальном проекте тут был бы jwt.sign(...)
  const fakeToken = `test_token_${Buffer.from(phone).toString('base64')}_${Date.now()}`

  return { 
    success: true, 
    token: fakeToken,
    user
  }
})