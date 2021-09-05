<template>
  <router-link to="/">
    <img :src="logo" alt="aspire logo" />
  </router-link>
</template>

<script lang="ts">
import { CommonIcons } from "@/assets/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppLogo",
  setup() {
    return { logo: CommonIcons.appLogo };
  },
});
</script>
