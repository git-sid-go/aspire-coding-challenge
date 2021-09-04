<template>
  <div class="flex flex-col items-center justify-between">
    <img class="w-6" :src="icon" :alt="name" />
    <div class="text-xxs">{{ name }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavItem",
  props: {
    name: String,
    icon: String,
  },
});
</script>
