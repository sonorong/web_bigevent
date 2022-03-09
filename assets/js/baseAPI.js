$.ajaxPrefilter(function(options) {
    options.url = 'http://www.liulongbin.top:3007' + options.url

    //出现/my/需要权限
    //indexof(字符串)结果为-1则表示没有出现
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    // 全局挂载complete回调函数
    options.complete = function(res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
    }

})