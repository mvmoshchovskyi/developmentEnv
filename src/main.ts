import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI/index.ts';
import router from '@/router/router.ts';
import directives from '@/directives/index.ts';
import i18n from './i18n';
import EnvironmentPlugin from '@/plugin/environment.plugin.ts';
// import './styles/main.scss';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name ?? 'CustomComponent', component);
});

directives.forEach(directive => {
  app.directive(directive.name, directive);
});

app
  .use(EnvironmentPlugin)
  .use(router)
  .use(i18n)
  .mount('#app');
