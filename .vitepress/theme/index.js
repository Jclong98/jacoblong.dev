import './style.css'
import { Icon } from '@iconify/vue'

import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Icon', Icon)
  },
}
