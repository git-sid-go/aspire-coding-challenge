<template>
  <button
    type="button"
    class="flex items-center text-btn-primary font-bold text-xsm"
  >
    <img class="mr-1.5" :src="icon" />
    New Card
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CommonIcons } from "@/assets/assets";

export default defineComponent({
  name: "AddNewButton",
  setup() {
    return { icon: CommonIcons.add };
  },
});
</script>
