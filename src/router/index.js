import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import  City from '@/page/city/city'
import Shop from '@/page/shop/shop'

// 测试better-scroll

import good2 from '@/page/shop/good2'
import comment from '@/page/shop/commet'
import shopdetail from '@/page/shop/children/shopdetail'
//个人中心
import personal from '@/page/personal/person'
//表单验证
import formLogin from '@/components/com/form'
//图片上传裁剪
import upimage from '@/page/upimage/up'

//过渡动画组件
import animate from '@/components/animate/animate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/shop/:id?',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/shopdetail',
      component : shopdetail,
    },
    {
      path: '/shop',
      component : Shop,
    },
    // 个人中心
     {
      path: '/personal',
      component : personal,
    },
    {
      path: '/login',
      component: formLogin
    },
    //图片上传插件
    {
      path: '/upimage',
      component: upimage
    },
    {
      path: '/animate',
      component: animate
    }
    
  ]
})
