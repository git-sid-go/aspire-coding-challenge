<template>
  <div>
    <div class="text-sm text-white leading-4 font-semibold">
      Account Balance
    </div>
    <div class="flex text-white font-bold mt-4">
      <DollarIcon />
      <p class="text-2xl text-white leading-4 ml-2.5">{{ amount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DollarIcon from "@/legos/DollarIcon.vue";

export default defineComponent({
  name: "AccountBalance",
  props: {
    amount: String,
  },
  components: { DollarIcon },
});
</script>
