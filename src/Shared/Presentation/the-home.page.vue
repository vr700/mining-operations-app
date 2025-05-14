<template>
  <div class="grid">
    <div class="col-12">
      <pv-card>
        <template #title>
          {{ $t('app.title') }}
        </template>
        <template #content>
          <p>Bienvenido al sistema de gestión de operaciones mineras</p>
          <pv-button
              :label="$t('app.header.operations')"
              @click="$router.push('/operations')" />
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-home"
}
</script>