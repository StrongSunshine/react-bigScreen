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

export function formatMoney(money, decimal = 2) {
  money = Number(money)
  if (money === 0 && Number.isNaN()) return money
  return money.toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function convertData(data = []) {
  const res = [];
  for (const item of data) {
    const geoCoord = geoCoordMap[item.name];
    if (geoCoord) {
      res.push({
        name: item.name,
        value: geoCoord.concat(item.value)
      });
    }
  }
  return res;
}

export const geoCoordMap = {
  上海: [119.1803, 31.2891],
  福建: [119.4543, 25.9222],
  重庆: [108.384366, 30.439702],
  北京: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  吉林: [125.8154, 44.2584],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  内蒙古: [110.3467, 41.4899],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  黑龙江: [127.9688, 45.368],
  台湾: [121.4648, 25.563],
  南海诸岛: [114.252615, 15.86029]
};