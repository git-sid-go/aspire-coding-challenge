<template>
  <div
    :class="
      `flex flex-col h-10 xl:flex-row items-center xl:my-16 cursor-pointer ${
        SCREEN_WIDTH < 1280 ? 'justify-between' : ''
      }`
    "
  >
    <img class="w-6" :src="icon" :alt="name" />
    <div class="text-xxs xl:text-base xl:ml-4">
      <span
        :class="
          `${isActive ? 'text-app-green' : 'text-app-black xl:text-white'}`
        "
      >
        {{ name }}
      </span>
    </div>
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
    isActive: Boolean,
  },
  setup() {
    const { width: SCREEN_WIDTH } = useWindowSize();

    return { SCREEN_WIDTH };
  },
});
</script>
