//工具类 一些公共方法

//跳转页面
export const link = (url) => {
    if (!url) {
        return
    }
    uni.navigateTo({
        url
    })
}