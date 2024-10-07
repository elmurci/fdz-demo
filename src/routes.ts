import Home from './views/Home.vue'
import Article from './views/Article.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/article', component: Article, meta: { title: 'Article' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
