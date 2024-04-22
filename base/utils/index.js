//工具类 一些公共方法

//跳转页面（保留当前页面）
export const navigateTo = (url) => {
    if (!url) {
        return
    }
    uni.navigateTo({
        url
    })
}

//跳转页面（关闭当前页面）
export const redirectTo = (url) => {
    if (!url) {
        return
    }
    uni.redirectTo({
        url
    })
}

//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
export const switchTab = (url) => {
    if (!url) {
        return
    }
    uni.switchTab({
        url
    })
}

