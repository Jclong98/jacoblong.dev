// Set color scheme function found in https://github.com/antfu/vitesse/blob/main/index.html
function setColorScheme() {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const currentSetting = localStorage.getItem('color-scheme') || 'auto'

  if (currentSetting === 'dark' || (prefersDark && currentSetting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
}

setColorScheme()
