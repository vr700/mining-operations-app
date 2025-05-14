<template>
  <tr>
    <td>{{ operation.title }}</td>
    <td>{{ $t(`app.operations.form.types.${operation.type}`) }}</td>
    <td>{{ formattedDate }}</td>
    <td>
      <pv-button
          @click="$emit('delete', operation.id)"
          severity="danger"
          :label="$t('app.operations.table.delete')" />
    </td>
  </tr>
</template>

<script>
import {MiningOperation} from "@/MiningOperations/Domain/mining-operation.entity.js";

export default {
  name: "mining-operation-item",
  props: {
    operation: {
      type: MiningOperation,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return new Date(this.operation.date).toLocaleDateString();
    }
  }
}
</script>