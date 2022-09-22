const baseSzie = 100
const baseWidth = 375

const setFontSize = () => {
  const windowWidth = window.innerWidth
  const scale = windowWidth / baseWidth
  const size = baseSzie / 2 * scale
  document.querySelector('html').style.fontSize = size + 'px'
}
setFontSize()
window.addEventListener('resize', () => {
  setFontSize()
}, false)
