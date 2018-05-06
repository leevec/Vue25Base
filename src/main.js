import createApp from './create-app'
import bus from './util/bus'
import './assets/lib/iconfont'
import 'vue2-animate/dist/vue2-animate.min.css'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

bus.$on('auth', _ => {
  router.push('/login')
})

router.onReady(_ => {
  app.$mount('#root')
})
