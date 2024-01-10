/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  // something vue-i18n options here ...
})

// Composables
import { createApp } from 'vue'


const app = createApp(App)

registerPlugins(app)

app.use(i18n)
app.mount('#app')
