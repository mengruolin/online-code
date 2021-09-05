import Vue from 'vue'
import VueRouter from 'vue-router'

const NProgress = window.NProgress

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/code-edit'
  },
  {
    path: '/code-edit',
    name: 'codeEdit',
    component: () => import('@views/code-edit/')
  }
]

const router = new VueRouter({
  routes
})

// 初始化进度条配置
NProgress && NProgress.configure({ showSpinner: false })


router.afterEach((to, from) => {
  // 显示加载进度条
  from?.path !== to?.path && NProgress?.start()
})

export default router
