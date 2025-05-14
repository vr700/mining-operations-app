<template>
  <footer class="p-d-flex p-jc-center p-ai-center p-p-3">
    <p>© 2023 Ming Company - {{ $t('app.title') }}</p>
  </footer>
</template>

<script>
export default {
  name: "the-footer"
}
</script>

<style scoped>
footer {
  background-color: var(--surface-ground);
  border-top: 1px solid var(--surface-border);
  margin-top: 2rem;
}
</style>