import App from './App'
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia';
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	Pinia
  }
}
