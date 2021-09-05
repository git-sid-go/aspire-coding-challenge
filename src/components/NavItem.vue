<template>
  <div
    :class="
      `flex flex-col xl:flex-row items-center xl:my-16 ${
        SCREEN_WIDTH < 1280 ? 'justify-between' : ''
      }`
    "
  >
    <img class="w-6" :src="icon" :alt="name" />
    <div class="text-xxs xl:text-base xl:text-white xl:ml-4">{{ name }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useWindowSize from "@/composables/useWindowSize";

export default defineComponent({
  name: "NavItem",
  props: {
    name: String,
    icon: String,
  },
  setup() {
    const { width: SCREEN_WIDTH } = useWindowSize();

    return { SCREEN_WIDTH };
  },
});
</script>
