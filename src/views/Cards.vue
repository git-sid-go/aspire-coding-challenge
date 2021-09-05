<template>
  <template v-if="SCREEN_WIDTH < 1280"><CardsMobileView /></template>
  <template v-else><CardsDesktopView /></template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useWindowSize from "@/composables/useWindowSize";
import CardsMobileView from "@/components/CardsMobileView.vue";
import CardsDesktopView from "@/components/CardsDesktopView.vue";

export default defineComponent({
  name: "Cards",
  components: {
    CardsMobileView,
    CardsDesktopView,
  },
  setup() {
    const { width: SCREEN_WIDTH } = useWindowSize();

    return { SCREEN_WIDTH };
  },
});
</script>
