import HomeComponent from './views/HomeComponent.vue'
import ArticleComponent from './views/ArticleComponent.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: HomeComponent, meta: { title: 'Home' }},
  { path: '/article', component: ArticleComponent, meta: { title: 'Article' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
