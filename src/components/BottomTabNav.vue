<template>
  <div
    class="bottom-tab-nav-root fixed bottom-0 left-0 right-0 shadow-bottomnav bg-white"
  >
    <div class="flex justify-between px-7 py-2">
      <template :key="item.path" v-for="item in nav_items_list">
        <NavItem :name="item.name" :icon="item.icon" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "./NavItem.vue";
import { NAV_LIST } from "@/composables/useBottomNavConfig";

export default defineComponent({
  name: "BottomTabNav",
  components: {
    NavItem,
  },
  setup() {
    return { nav_items_list: NAV_LIST };
  },
});
</script>
