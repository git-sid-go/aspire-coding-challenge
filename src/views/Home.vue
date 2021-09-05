<template>
  <div class="home">
    <div id="nav" class="flex justify-center items-center w-screen h-screen">
      <div class="text-center">
        <router-link class="w-12" to="/register">
          <h6 class="font-bold border-b border-black mb-12">
            Code Challenge 💻
          </h6>
        </router-link>
        <router-link class="w-12" to="/cards">
          <h6 class="font-bold border-b border-black">
            CSS Challenge 🚀
          </h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
