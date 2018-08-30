// 移动端双击事件
npm install fastclick
import fastclick from 'fastclick'
fastclick.attach(document.body)

// 路由别名配制  webpack.base.conf.js
resolve: {
	alias: {
		'common': resolve('src/common')
	}
}

// 路由页面(index.js)配制默认显示页面
routes: [
	{
		path: '/',
		redirect: '/recommend' //默认显示的页面路径
	}
]