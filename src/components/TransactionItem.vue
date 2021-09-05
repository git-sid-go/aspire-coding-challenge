<template>
  <div class="flex py-4 border-b border-grey2 px-6">
    <div
      :class="
        `w-12 h-12 rounded-full flex justify-center items-center ${bgColor}`
      "
    >
      <img :src="icon" :alt="name" />
    </div>
    <div class="flex-1 ml-3">
      <div class="flex flex-1 justify-between">
        <div>
          <div class="font-semibold text-app-black text-sm mb-1">
            {{ name }}
          </div>
          <div class="text-app-grey text-xsm">{{ date }}</div>
        </div>
        <div
          :class="
            `font-bold text-sm ${
              type === 'credit' ? 'text-app-green' : 'text-app-black'
            }`
          "
        >
          <div class="flex items-center">
            {{ amount }}
            <img class="ml-2.5" :src="caretRight" alt="caret right" />
          </div>
        </div>
      </div>
      <div class="flex items-center mt-3.5">
        <div class="bg-app-blue p-1.5 rounded-2xl">
          <img :src="cardIcon" alt="card" />
        </div>
        <div class="ml-2 text-xs font-semibold text-app-blue">
          {{ transactionType }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TransactionIcons, CommonIcons } from "@/assets/assets";

export default defineComponent({
  name: "TransactionItem",
  props: {
    name: String,
    amount: String,
    type: String,
    date: String,
    transactionType: String,
    icon: String,
    bgColor: String,
  },
  setup() {
    return {
      cardIcon: TransactionIcons.card,
      caretRight: CommonIcons.caretRight,
    };
  },
});
</script>
