import { App } from 'vue';
import { Environment } from '@/constants/env.ts';

export class EnvironmentManager {
  private readonly env: Environment;

  constructor() {
    this.env = (import.meta.env.MODE as Environment) || Environment.Dev;
  }

  get isProduction(): boolean {
    return this.env === Environment.Prod;
  }

  get isDev(): boolean {
    return this.env === Environment.Dev;
  }
}

const EnvironmentPlugin = {
  install(app: App) {
    const envManager = new EnvironmentManager();

    app.provide('$env', envManager);
    // app.config.globalProperties.$env = envManager;
  },
};

export default EnvironmentPlugin;
