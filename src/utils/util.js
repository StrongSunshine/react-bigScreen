export function debounce(fun, delay) {
  let timer
  return function (...args) {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = setTimeout(() => fun.apply(this, args), delay)
  }
}

export function moment(timestaps = null) {
  const d = timestaps
    ? new Date(timestaps)
    : new Date()
  const [year, mounth, day, hour, minute, second] = [
    d.getFullYear(),
    (d.getMonth() + 1).toString().padStart(2, '0'),
    d.getDate().toString().padStart(2, '0'),
    d.getHours().toString().padStart(2, '0'),
    d.getMinutes().toString().padStart(2, '0'),
    d.getSeconds().toString().padStart(2, '0'),
  ]

  return {
    format(patterns = 'yyyy-MM-DD hh:mm:ss') {
      return patterns
        .replace(/yyyy/g, year)
        .replace(/MM/g, mounth)
        .replace(/DD/g, day)
        .replace(/hh/g, hour)
        .replace(/mm/g, minute)
        .replace(/ss/g, second)
    }
  }
}