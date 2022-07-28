import Vue from 'vue'
import Router from 'vue-router'

const PageHome = () => import('@/pages/PageHome').then((m) => m.default || m)

const PageArticles = () =>
  import('@/pages/PageArticles').then((m) => m.default || m)

const PageContacts = () =>
  import('@/pages/PageContacts').then((m) => m.default || m)

const PageWorks = () => import('@/pages/PageWorks').then((m) => m.default || m)

const PageAbout = () => import('@/pages/PageAbout').then((m) => m.default || m)

const PagePets = () => import('@/pages/PagePets').then((m) => m.default || m)

const PageWishlist = () =>
  import('~/pages/PageWishlist').then((m) => m.default || m)

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home-page',
        component: PageHome
      },
      {
        path: '/articles',
        name: 'articles',
        component: PageArticles
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: PageContacts
      },
      {
        path: '/works',
        name: 'works',
        component: PageWorks
      },
      {
        path: '/about',
        name: 'about',
        component: PageAbout
      },
      {
        path: '/pets',
        name: 'pets',
        component: PagePets
      },
      {
        path: '/wishlist',
        name: 'wishlist',
        component: PageWishlist
      }
    ],
    scrollBehavior(to, from, savedPosition) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 500)
      })
    }
  })
}
