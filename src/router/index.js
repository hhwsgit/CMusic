import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/index/login'
import Navigation from '@/components/index/navigation'

import LastNew from '@/components/page/lastNew'
import Recommended from '@/components/page/recommended'
import Search from '@/components/page/search'
import My from '@/components/page/my'

import MyCollect from '@/components/my/myCollect'
import SwitchTheme from '@/components/my/switchTheme'
import AuthorMessage from'@/components/my/authorMessage'

import PlaySongIndex from '@/components/playSong/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'首页',
      component:Login
    },
    {
      path: '/navigation',
      name: '导航条',
      component: Navigation,
      children:[
        {path:'lastNew',name:'最新',component:LastNew},
        {path:'recommended',name:'推荐',component:Recommended},
        {path:'search',name:'搜索',component:Search},
        {path:'my',name:'我的',component:My},

      ],
    },
    {
      path:'/playSongIndex',
      name: '播放音乐',
      component: PlaySongIndex,
    },
    {
      path:'/myCollect',
      name: '我的收藏',
      component: MyCollect,
    },
    {
      path:'/switchTheme',
      name: '切换主题',
      component: SwitchTheme,
    },
    {
      path:'/authorMessage',
      name:'作者信息',
      component:AuthorMessage,
    }

  ]
})
