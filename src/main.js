// 导入vue核心包
import Vue from 'vue';

// 导入App.vue的vue对象
import App from './App.vue';

// 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 导入路由规则对应的组件对象
import home from './components/home.vue';
import shopcar from './components/shopcar/shopcar.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';


// 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

//注册mui的css样式
import '../statics/mui/css/mui.css';

import '../statics/css/site.css';

import VueResource from 'vue-resource'
	Vue.use(VueResource);


//定义路由规则
var router = new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'/home',component:home},
		{path:'/shopcar',component:shopcar},
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsinfo/:id',component:newsinfo},
	]
	});

import moment from 'moment';
Vue.filter('datefmt',function (input,fmtstring) {
	return moment(input).format(fmtstring)
})

// 5.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});