<template>
  <div class="grid">
    <div class="col-12">
      <mining-operation-form @created="loadOperations" />
    </div>
    <div class="col-12">
      <mining-operation-list ref="operationList" />
    </div>
  </div>
</template>

<script>
import MiningOperationForm from "@/MiningOperations/Presentation/mining-operation-form.component.vue";
import MiningOperationList from "@/MiningOperations/Presentation/mining-operation-list.component.vue";

export default {
  name: "mining-operations-view",
  components: {
    MiningOperationForm,
    MiningOperationList
  },
  methods: {
    loadOperations() {
      this.$refs.operationList.loadOperations();
    }
  }
}
</script>