<template>
  <div>
    <div
      class="text-sm text-app-white leading-4 font-semibold xl:text-app-black"
    >
      Account Balance
    </div>
    <div class="flex text-app-white font-bold mt-4">
      <DollarIcon />
      <p class="text-2xl text-app-white leading-4 ml-2.5 xl:text-app-black">
        {{ amount }}
      </p>
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
