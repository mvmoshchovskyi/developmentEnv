import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI/index.ts';
import './styles/main.scss';
import router from '@/router/router.ts';
import directives from '@/directives/index.ts';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name ?? 'CustomComponent', component);
});

directives.forEach(directive => {
  app.directive(directive.name, directive);
});

app
  .use(router)
  .mount('#app');
