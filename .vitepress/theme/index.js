import Layout from './Layout.vue'

import { Icon } from '@iconify/vue'

import './style.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Icon', Icon)
  },
}
