
const limitLarge = 1024;
const limitMedium = 768;

export const isLarge = (window) => {
  console.log(window.innerWidth)
  if (window.innerWidth >= limitLarge) {
    return true
  }
  return false
}

export const isMedium = (window) => {
  if (window.innerWidth >= limitMedium && window.innerWidth < limitLarge) {
    return true
  }
  return false
}

export const isSmall = (window) => {
  console.log(window.innerWidth)
  if (window.innerWidth < limitMedium) {
    return true
  }
  return false
}
