<template>
  <div class="text-white text-xs mr-4">&#9679; &#9679; &#9679; &#9679;</div>
  <!-- <div>{{ number }}</div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardFourDigits",
  props: {
    number: String,
    index: Number,
  },
});
</script>
