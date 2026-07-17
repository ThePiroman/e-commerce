export const useAuth = () => {
  const token = useCookie('auth_token', { 
    maxAge: 60 * 60 * 24 * 7, 
    path: '/' 
  })
  
  const user = useState('auth_user', () => null)
  const isAuthenticated = computed(() => !!token.value)

  // НОВЫЙ МЕТОД: Загрузка пользователя
  const fetchUser = async () => {
    // Если токена нет, делать запрос нет смысла
    if (!token.value) return

    // Если пользователь уже загружен в стейт, не делаем лишний запрос
    if (user.value) return

    // Делаем запрос к нашему API. useRequestHeaders пробрасывает куки при SSR
    const { data, error } = await useFetch('/api/auth/me', {
      headers: useRequestHeaders(['cookie']) as HeadersInit
    })

    if (data.value && data.value.user) {
      user.value = data.value.user
    } else if (error.value) {

      console.error(error.value)
      const status = error.value.statusCode
      if (status === 401 || status === 404) {
        token.value = null
        user.value = null
      }
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    navigateTo('/')
  }

  return { token, user, isAuthenticated, fetchUser, logout }
}