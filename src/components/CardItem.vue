<template>
  <div :class="`rounded-xl ${cardColor}`">
    <div class="flex flex-col p-6 text-left">
      <img :src="appNameLogo" alt="aspire logo" class="self-end" />
      <div class="text-xxl text-white font-bold mb-7">
        {{ name }}
      </div>
      <CardNumber :number="cardNumber" />
      <div class="flex text-xsm text-white font-bold mt-2">
        <div>Thru: {{ validThrough }}</div>
        <div class="ml-7">CVV: ****</div>
      </div>
      <img :src="visa" alt="visa" class="self-end" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CommonIcons, CardIcons } from "@/assets/assets";
import CardNumber from "@/legos/CardNumber.vue";

export default defineComponent({
  name: "CardItem",
  props: {
    name: String,
    cardColor: String,
    cardNumber: String,
    validThrough: String,
    cvv: String,
  },
  components: {
    CardNumber,
  },
  setup() {
    return {
      appNameLogo: CommonIcons.appNameLogo,
      visa: CardIcons.visa,
    };
  },
});
</script>
