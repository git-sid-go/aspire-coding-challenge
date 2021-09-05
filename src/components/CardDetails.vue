<template>
  <BaseExpansionItem headerTitle="Card Details" :icon="cardIcon">
    <div class="bg-white px-6 py-4 text-center font-bold">
      🚧 Card Details go here!
    </div>
  </BaseExpansionItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseExpansionItem from "@/legos/BaseExpansionItem.vue";
import { CommonIcons } from "@/assets/assets";

export default defineComponent({
  name: "CardDetails",
  components: { BaseExpansionItem },
  setup() {
    return {
      cardIcon: CommonIcons.card,
    };
  },
});
</script>
