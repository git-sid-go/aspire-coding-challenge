<template>
  <div class="home">
    <div id="nav">
      <router-link to="/apply-and-manage-loans">Loans</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
