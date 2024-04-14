<script setup lang="ts">
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
watch(() => settingsStore.settings.app.colorScheme, (colorScheme) => {
  if (colorScheme === '') {
    prefersColorScheme.addEventListener('change', updateTheme)
  }
  else {
    prefersColorScheme.removeEventListener('change', updateTheme)
  }
  nextTick(() => {
    updateTheme()
  })
}, {
  immediate: true,
})
function updateTheme() {
  switch (settingsStore.currentColorScheme) {
    case 'light':
      document.body.removeAttribute('arco-theme')
      break
    case 'dark':
      document.body.setAttribute('arco-theme', 'dark')
      break
  }
}
</script>

<template>
  <AConfigProvider :locale="zhCN">
    <slot />
  </AConfigProvider>
</template>
