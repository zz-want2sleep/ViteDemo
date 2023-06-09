// 导入第三方js插件
function loadJs(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = () => reject()
        document.body.appendChild(script)
    })
}
export default loadJs;