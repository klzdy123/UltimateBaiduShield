# UltimateBaiduShield

背景：公司需要进行落地页的投放，当用户通过浏览器搜索引擎搜索（baidu）到落地页后，打开页面，但其中的正常触发下载的 js 被莫名屏蔽，而购买了（baidu）公司广告保障的页面能正常触发下载。

落地页中的下载操作并非自动触发，而是通过用户手动点击"立即下载"按钮后触发，但是（baidu）公司出于个人利益原因对其进行屏蔽

此 js 用于对（baidu）跳转过的网页重加载，加载后页面的 js 将不受（baidu）的限制

## 用法
将该 js 拷贝至项目落地页的 head 中
