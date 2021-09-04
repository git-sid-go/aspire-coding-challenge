<template>
  <div class="bg-app-semi-primary rounded-tl-3xl rounded-tr-3xl">
    <div class="flex justify-between py-5 px-2 rounded-tl-3xl rounded-tr-3xl">
      <template :key="item.actionName" v-for="item in card_actions">
        <div class="flex flex-col items-center w-16">
          <img class="w-8 mb-2" :src="item.icon" />
          <div class="text-xsm text-center leading-4">
            {{ item.actionName }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CARDS_ACTIONS } from "@/composables/useCardActions";

export default defineComponent({
  name: "CardActions",
  setup() {
    return {
      card_actions: CARDS_ACTIONS,
    };
  },
});
</script>
