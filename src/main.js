import DefaultLayout from '~/layouts/Default.vue'
import Fragment from 'vue-fragment'
import '~/assets/styles.css'
import './prism-dracula.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Fragment.Plugin);
}
