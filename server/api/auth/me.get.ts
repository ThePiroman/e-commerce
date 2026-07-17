export default defineEventHandler(async (event) => {
  // В Nuxt Nitro мы можем прочитать куку прямо из заголовков запроса
  const token = getCookie(event, 'auth_token')

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Не авторизован' })
  }

  // Разбираем наш фейковый токен: test_token_[base64Phone]_[timestamp]
  const parts = token.split('_')
  if (parts.length < 4) {
    throw createError({ statusCode: 401, statusMessage: 'Неверный токен' })
  }

  // Декодируем телефон из Base64 обратно в строку
  const base64Phone = parts[2]
  const phone = Buffer.from(base64Phone, 'base64').toString('utf-8')

  // Идем в json-server за данными пользователя
  try {
    const users = await $fetch(`http://localhost:3001/users?phone=${encodeURIComponent(phone)}`)
    
    if (users && users.length > 0) {
      return { user: users[0] } // Возвращаем найденного пользователя
    }
    
    throw createError({ statusCode: 404, statusMessage: 'Пользователь не найден' })
  } catch (error) {

    throw createError({ statusCode: 500, statusMessage: 'Ошибка сервера' })
  }
})