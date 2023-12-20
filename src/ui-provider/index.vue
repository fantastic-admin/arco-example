<script setup lang="ts">
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()

watch(() => settingsStore.settings.app.colorScheme, (colorScheme) => {
  if (colorScheme === '') {
    colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  switch (colorScheme) {
    case 'light':
      document.body.removeAttribute('arco-theme')
      break
    case 'dark':
      document.body.setAttribute('arco-theme', 'dark')
      break
  }
}, {
  immediate: true,
})
</script>

<template>
  <AConfigProvider :locale="zhCN">
    <slot />
  </AConfigProvider>
</template>
