<template>
  <pv-card>
    <template #title>
      {{ $t('app.operations.create') }}
    </template>
    <template #content>
      <div class="p-fluid grid">
        <div class="field col-12">
          <label for="title">{{ $t('app.operations.form.title') }}</label>
          <pv-input-text id="title" v-model="operation.title" />
        </div>
        <div class="field col-12">
          <label for="type">{{ $t('app.operations.form.type') }}</label>
          <pv-dropdown
              id="type"
              v-model="operation.type"
              :options="operationTypes"
              option-label="label"
              option-value="value" />
        </div>
        <div class="field col-12">
          <label for="date">{{ $t('app.operations.form.date') }}</label>
          <pv-calendar id="date" v-model="operation.date" date-format="dd/mm/yy" />
        </div>
        <div class="field col-12">
          <pv-button
              @click="submitOperation"
              :label="$t('app.operations.form.submit')" />
        </div>
      </div>
    </template>
  </pv-card>
</template>

<script>
import {MiningOperationService} from "@/MiningOperations/Application/mining-operations-api.service.js";
import {MiningOperation} from "@/MiningOperations/Domain/mining-operation.entity.js";

export default {
  name: "mining-operation-form",
  data() {
    return {
      operation: new MiningOperation({
        title: "",
        type: "",
        date: null
      }),
      operationService: new MiningOperationService(),
      operationTypes: [
        {label: this.$t('app.operations.form.types.extraction'), value: "extraction"},
        {label: this.$t('app.operations.form.types.transport'), value: "transport"},
        {label: this.$t('app.operations.form.types.processing'), value: "processing"},
        {label: this.$t('app.operations.form.types.maintenance'), value: "maintenance"}
      ]
    }
  },
  methods: {
    async submitOperation() {
      // Validación mejorada
      if (!this.operation.title.trim()) {
        this.showToast('error', this.$t('validation.required'), this.$t('validation.required'));
        return;
      }

      if (!this.operation.type) {
        this.showToast('error', this.$t('validation.required'), this.$t('app.operations.form.type') + ' ' + this.$t('validation.required'));
        return;
      }

      if (!this.operation.date) {
        this.showToast('error', this.$t('validation.required'), this.$t('app.operations.form.date') + ' ' + this.$t('validation.required'));
        return;
      }

      try {
        // Convertir fecha a formato ISO si es necesario
        const operationToSend = {
          ...this.operation,
          date: new Date(this.operation.date).toISOString()
        };

        await this.operationService.create(operationToSend);
        this.$emit('created');
        this.resetForm();
        this.showToast('success', this.$t('messages.success'), '');
      } catch (error) {
        console.error('Error creating operation:', error);
        this.showToast('error', this.$t('messages.error'), error.message || '');
      }
    },
    methods: {
      resetForm() {
        this.operation = new MiningOperation({
          title: "",
          type: "",
          date: null
        });
      },
      showToast(severity, summary, detail) {
        this.$toast.add({
          severity,
          summary,
          detail,
          life: 3000
        });
      }
    }
  }
}
</script>