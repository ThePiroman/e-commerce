export const useAuth = () => {
  const token = useCookie('auth_token', { 
    maxAge: 60 * 60 * 24 * 7, 
    path: '/' 
  })

  const userName = useCookie('auth_name', {maxAge: 60 * 60 * 24 * 7, path: '/'}) // lazy
  
  const user = useState<{ name: string; timeCreated: string; id: string; } | null>('auth_user', () => null)

  const isAuthenticated = computed(() => !!token.value)

  

  const logout = () => {
    token.value = null
    user.value = null
    userName.value = null
    navigateTo('/')
  }

  return { token, userName, user, isAuthenticated, logout }
}