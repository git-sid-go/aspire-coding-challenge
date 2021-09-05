<template>
  <div class="px-6 text-app-white text-xsm flex xl:px-0 xl:text-app-black">
    <div>
      <a class="font-bold leading-5">My debit cards</a>
      <div class="h-0.5 w-full bg-border-blue mt-1.5" />
    </div>
    <a class="opacity-50 ml-8 leading-5">All company cards</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardTabs",
});
</script>
