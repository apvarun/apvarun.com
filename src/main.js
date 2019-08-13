import DefaultLayout from '~/layouts/Default.vue'
import Fragment from 'vue-fragment'
import '~/assets/styles.css'
import './prism-dracula.css'

function updateMetaTags(head) {
  head.meta.push({
    property: 'og:type',
    content: 'website'
  })
  head.meta.push({
    key: 'og:url',
    property: 'og:url',
    content: 'https://apvarun.com'
  })
  head.meta.push({
    key: 'og:title',
    property: 'og:title',
    content: 'Frontend Developer - Bangalore'
  })
  head.meta.push({
    key: 'og:description',
    property: 'og:description',
    content: 'Frontend JavaScript Developer from Bangalore building things for the web.'
  })
  head.meta.push({
    property: 'og:image',
    content: 'https://apvarun.com/preview.png'
  })
  head.meta.push({
    property: 'twitter:card',
    content: 'summary_large_image'
  })
  head.meta.push({
    key: 'twitter:url',
    property: 'twitter:url',
    content: 'https://apvarun.com'
  })
  head.meta.push({
    key: 'twitter:title',
    property: 'twitter:title',
    content: 'Frontend Developer - Bangalore'
  })
  head.meta.push({
    key: 'twitter:description',
    property: 'twitter:description',
    content: 'Frontend JavaScript Developer from Bangalore building things for the web.'
  })
  head.meta.push({
    property: 'twitter:image',
    content: 'https://apvarun.com/preview.png'
  })
}

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Fragment.Plugin);

  updateMetaTags(head)
}
