import { onMounted, ref } from 'vue'

export type IAppTheme = 'dark' | 'light' | 'default'

export const useAppTheme = () => {
  const appTheme = ref<IAppTheme>('default')

  onMounted(() => {
    const localStorageTheme = localStorage.getItem('appTheme')
    if (localStorageTheme) appTheme.value = localStorageTheme as IAppTheme

    switch (appTheme.value) {
      case 'dark':
        setDarkTheme()
        break
      case 'light':
        setLightTheme()
        break
      default:
        setDefaultTheme()
        break
    }
  })

  const setLightTheme = () => {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    localStorage.setItem('appTheme', 'light')
    appTheme.value = 'light'
  }

  const setDarkTheme = () => {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    localStorage.setItem('appTheme', 'dark')
    appTheme.value = 'dark'
  }

  const setDefaultTheme = () => {
    const prefersDarkMode =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    if (prefersDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
    localStorage.setItem('appTheme', 'default')
    appTheme.value = 'default'
  }

  return {
    appTheme,
    setLightTheme,
    setDarkTheme,
    setDefaultTheme
  }
}
