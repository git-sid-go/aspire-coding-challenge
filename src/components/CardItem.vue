<template>
  <div class="relative">
    <div class="absolute right-0 -top-6 bg-white rounded-tl-md rounded-tr-md">
      <div class="text-xs font-semibold pt-1 pb-4 px-2.5 flex items-center">
        <img :src="eyeIcon" alt="toggle visibility" class="mr-1.5" />
        <div :class="textColor">Show card number</div>
      </div>
    </div>
    <div :class="`rounded-xl relative ${cardColor}`">
      <div class="flex flex-col p-6 text-left z-10">
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
    textColor: String,
    cardColor: String,
    cardNumber: String,
    validThrough: String,
    cvv: String,
    index: Number,
  },
  components: {
    CardNumber,
  },
  setup(props) {
    let eyeIcon = CardIcons.eyeGreen;
    if (props.index) {
      switch (props.index) {
        case 0:
          eyeIcon = CardIcons.eyeGreen;
          break;
        case 1:
          eyeIcon = CardIcons.eyeBlue;
          break;
        case 2:
          eyeIcon = CardIcons.eyeYellow;
          break;
        default:
          eyeIcon = CardIcons.eyeGreen;
          break;
      }
    }
    return {
      appNameLogo: CommonIcons.appNameLogo,
      visa: CardIcons.visa,
      eyeBlue: CardIcons.eyeBlue,
      eyeIcon,
    };
  },
});
</script>
