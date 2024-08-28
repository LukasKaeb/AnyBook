import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// register the Base components
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import TheHeader from './components/ui/TheHeader.vue'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('the-header', TheHeader)

app.mount('#app')
