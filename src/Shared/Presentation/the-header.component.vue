<template>
  <header>
    <pv-toolbar>
      <template #start>
        <pv-button
            :label="$t('app.header.home')"
            @click="$router.push('/')"
            text />
        <pv-button
            :label="$t('app.header.operations')"
            @click="$router.push('/operations')"
            text />
      </template>
      <template #end>
        <language-switcher />
      </template>
    </pv-toolbar>
  </header>
</template>

<script>
import LanguageSwitcher from "@/Shared/Presentation/language-switcher.component.vue";

export default {
  name: "the-header",
  components: {
    LanguageSwitcher
  }
}
</script>