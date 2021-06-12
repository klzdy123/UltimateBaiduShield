//获取来源地址
let s = document.referrer;

if (s.indexOf("baidu") > 0) {
    window.location.reload();
}
