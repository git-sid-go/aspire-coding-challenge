<template>
  <button
    type="button"
    class="flex items-center text-btn-primary font-bold text-xsm h-full xl:bg-app-blue xl:px-3 xl:py-2 rounded xl:text-app-white"
  >
    <img class="mr-1.5" :src="icon" />
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CommonIcons } from "@/assets/assets";
import useWindowSize from "@/composables/useWindowSize";

export default defineComponent({
  name: "AddNewButton",
  props: {
    label: String,
  },
  setup() {
    const { width: SCREEN_WIDTH } = useWindowSize();
    return {
      icon: SCREEN_WIDTH.value < 1280 ? CommonIcons.add : CommonIcons.addWhite,
    };
  },
});
</script>
