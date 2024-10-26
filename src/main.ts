import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI/index.ts';
import './styles/main.scss';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name ?? 'CustomComponent', component);
});

app.mount('#app');
