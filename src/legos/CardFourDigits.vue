<template>
  <div
    v-if="isCardNumberVisible || index === 3"
    class="font-bold text-app-white text-sm mr-4 w-12 tracking-widest"
  >
    {{ number }}
  </div>
  <div v-else class="text-white font-bold text-xs mr-4 w-12">
    &#9679; &#9679; &#9679; &#9679;
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardFourDigits",
  props: {
    number: String,
    index: Number,
    isCardNumberVisible: Boolean,
  },
});
</script>
