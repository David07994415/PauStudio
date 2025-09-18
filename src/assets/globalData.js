// 全域陣列
export const TopProducts = [
    "uIatCAvom6Q",
    "cbtqPhIQXLg",
    "pC2isw9fxXE",
    "ypjRJWYOKUg",
    "UMB0sR_m8e0",
    "9C_U02GYv98",
    "mak0U1g6708",
    "tdgSLSaztTc",
    "B7m675DPbEA",
    "rUgL7fdnpgk",
    "o8m7D_rj17g",
    "1qtx-oOWijA",
]

export const Categories = [
    "Commercial",
    "Corporate",
    "Brand",
    "Event",
    "Portrait",
    "Animation",
]



// 全域設定
export const config = {
    theme: 'dark',
    language: 'zh-TW'
}

// 全域工具函式
export function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}