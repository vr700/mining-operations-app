<template>
  <div>
    <pv-button
        @click="changeLanguage('en')"
        :label="'EN'"
        :severity="currentLanguage === 'en' ? 'primary' : 'secondary'"
        text />
    <pv-button
        @click="changeLanguage('es')"
        :label="'ES'"
        :severity="currentLanguage === 'es' ? 'primary' : 'secondary'"
        text />
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n';

export default {
  name: "language-switcher",
  setup() {
    const {locale} = useI18n();
    return {locale};
  },
  computed: {
    currentLanguage() {
      return this.locale;
    }
  },
  methods: {
    changeLanguage(lang) {
      this.locale = lang;
      localStorage.setItem('userLanguage', lang);
    }
  },
  mounted() {
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang) {
      this.locale = savedLang;
    }
  }
}
</script>