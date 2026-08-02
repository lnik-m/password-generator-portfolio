import { ViteSSG } from 'vite-ssg/single-page'
import './styles/app.css'
import App from './App.vue'

export const createApp = ViteSSG(App)
