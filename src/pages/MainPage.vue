<script setup lang="ts">
import { inject } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { PreferredLanguage, UrlLocale } from '@/i18n/locales';
import { EnvironmentManager } from '@/plugin/environment.plugin.ts';

const env = inject<EnvironmentManager>('$env');

const route = useRoute();
const { locale } = useI18n({ useScope: 'global' });

if (route.query.lang === UrlLocale.Ukraine) {
  locale.value = PreferredLanguage.Ukraine;
}

function logEnvironment() {
  if (env) {
    console.log(`Running in ${env.isProduction ? 'Production' : 'Development'} mode.`);
  }
}

logEnvironment();

</script>

<template>
  <h2>Main</h2>
</template>

<style scoped lang="scss">
</style>
