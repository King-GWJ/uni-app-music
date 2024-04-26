import App from './App'
import {createSSRApp} from 'vue'
import * as Pinia from 'pinia';
import * as Vconsole from "vconsole";

export function createApp() {
    const app = createSSRApp(App)
    const vConsole = new Vconsole()
    app.use(Pinia.createPinia())
    app.use(vConsole)
    return {
        app,
        Pinia,
        vConsole
    }
}