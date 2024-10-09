import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faHouse, faPhone, ...Object.values(fab))

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useResumeStore } from './stores/resume'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())

const resumeStore = useResumeStore()
await resumeStore.setStylesData(`/styles.json`)
await resumeStore.setResumeData(`/resume.json`)

document.title = resumeStore.getHeader.firstName + ' ' + resumeStore.getHeader.lastName + ' - CV '

app.mount('#app')
