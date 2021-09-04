<template>
  <div class="cards-root bg-primary">
    <BottomTabNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BottomTabNav from "@/components/BottomTabNav.vue";

export default defineComponent({
  name: "Cards",
  components: {
    BottomTabNav,
  },
});
</script>
