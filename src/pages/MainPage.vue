<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { PreferredLanguage, UrlLocale } from '@/i18n/locales';

const route = useRoute();
const { locale } = useI18n({ useScope: 'global' });

if (route.query.lang === UrlLocale.Ukraine) {
  locale.value = PreferredLanguage.Ukraine;
}

</script>

<template>
  <h2>Main</h2>
</template>

<style scoped lang="scss">
</style>
