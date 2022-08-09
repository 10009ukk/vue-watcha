import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContentInfo from '../components/content/ContentInfo.vue'
import RelatedContent from '../components/content/RelatedContent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contents/:id',
    name: 'contents',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContentsView.vue'),
    children: [
      {
        path: 'content_info',
        name: 'content_info',
        component: ContentInfo
      },
      {
        path: 'related_content',
        name: 'related_content',
        component: RelatedContent
      }
    ]
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
