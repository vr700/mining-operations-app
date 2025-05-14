<template>
  <pv-card>
    <template #title>
      {{ $t('app.operations.title') }}
    </template>
    <template #content>
      <pv-data-table :value="operations" table-style="min-width: 50rem">
        <pv-column field="title" :header="$t('app.operations.table.title')"></pv-column>
        <pv-column field="type" :header="$t('app.operations.table.type')">
          <template #body="{data}">
            {{ $t(`app.operations.form.types.${data.type}`) }}
          </template>
        </pv-column>
        <pv-column field="date" :header="$t('app.operations.table.date')">
          <template #body="{data}">
            {{ new Date(data.date).toLocaleDateString() }}
          </template>
        </pv-column>
        <pv-column :header="$t('app.operations.table.actions')">
          <template #body="{data}">
            <pv-button
                @click="deleteOperation(data.id)"
                severity="danger"
                :label="$t('app.operations.table.delete')" />
          </template>
        </pv-column>
      </pv-data-table>
    </template>
  </pv-card>
</template>

<script>
import {MiningOperationService} from "@/MiningOperations/Application/mining-operations-api.service.js";

export default {
  name: "mining-operation-list",
  data() {
    return {
      operations: [],
      operationService: new MiningOperationService()
    }
  },
  async created() {
    await this.loadOperations();
  },
  methods: {
    async loadOperations() {
      const response = await this.operationService.getAll();
      this.operations = response.data;
    },
    async deleteOperation(id) {
      await this.operationService.delete(id);
      await this.loadOperations();
    }
  }
}
</script>