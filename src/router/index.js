import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // 路由重定向
  {
    path: '/',
    redirect:'/mytencent'
  },
  {
    path: '/menuList',
    name:"menuList",
    component:()=>import('../views/menuList')
  },
    // 首页
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
        // 我的公众号
      {
        path: 'mytencent',
        name:'mytencent',
        component:()=>import('../components/myTencent')
      },
        // 授权公众号
      {
        path: 'addTencent',
        name:'addTencent',
        component:()=>import('../components/addTencent')
      }
    ]
  },
  // 功能管理
  {
    path: '/manage',
    name: 'manage',
    component:()=>import('../views/manage'),
    children:[
        // 功能列表
      {
        path: 'functionList',
        name: 'functionList',
        component: () => import('../components/functionList')
      },
        // 模板消息群发
      {
        path: 'templateMessaging',
        name: 'templateMessaging',
        component:()=>import('../components/templateMessaging'),
        children:[
            // 模板消息
          {
            path:'msgList',
            name:'msgList',
            component:()=>import('../components/msgList')
          },
            // 创建模板消息
          {
            path: 'createMsg',
            name: 'createMsg',
            component:() =>import('../components/createMsg')
          }
        ]
      },
        // 渠道二维码生成
      {
        path: 'channelCode',
        name: 'channelCode',
        component:()=>import('../components/channelCode'),
        children:[
            // 渠道二维码生成
          {
            path:'createCode',
            name:'createCode',
            component:()=>import('../components/createCode')
          },
          // 渠道数据查询
          {
            path:'getCode',
            name:'getCode',
            component:()=>import('../components/getCode')
          },
          // 全部渠道数据下载
          {
            path:'allCodeDown',
            name:'allCodeDown',
            component:()=>import('../components/allCodeDown')
          },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
