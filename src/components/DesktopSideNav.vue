<template>
  <div class="w-full max-w-xsm fixed left-0 top-0 bottom-0 bg-app-primary p-12">
    <router-link to="/">
      <img :src="appLogoGreen" />
    </router-link>
    <p class="text-smbase text-white opacity-30 mt-5">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </p>
    <div class="mt-24">
      <template :key="item.path" v-for="item in nav_items_list">
        <NavItem
          :name="item.name"
          :icon="item.icon"
          :isActive="item.isActive"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CommonIcons } from "@/assets/assets";
import { NAV_LIST } from "@/composables/useBottomNavConfig";
import NavItem from "@/components/NavItem.vue";

export default defineComponent({
  name: "DesktopSideNav",
  components: { NavItem },
  setup() {
    return {
      appLogoGreen: CommonIcons.appNameLogoGreen,
      nav_items_list: NAV_LIST,
    };
  },
});
</script>
