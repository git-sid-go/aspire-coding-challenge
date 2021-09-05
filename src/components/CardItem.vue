<template>
  <div class="relative">
    <div
      class="absolute right-0 -top-6 bg-white rounded-tl-md rounded-tr-md cursor-pointer"
      @click="toggleVisibility"
    >
      <div class="text-xs font-semibold pt-1 pb-4 px-2.5 flex items-center">
        <img :src="eyeIcon" alt="toggle visibility" class="mr-1.5" />
        <div :class="textColor">
          {{ isCardNumberVisible ? "Hide card number" : "Show card number" }}
        </div>
      </div>
    </div>
    <div :class="`rounded-xl relative xl:h-60 ${cardColor}`">
      <div
        class="flex flex-col p-6 text-left z-10 h-full xl:p-7 xl:justify-between"
      >
        <img :src="appNameLogo" alt="aspire logo" class="self-end" />
        <div class="text-xxl text-white font-bold mb-7">
          {{ name }}
        </div>
        <CardNumber
          :isCardNumberVisible="isCardNumberVisible"
          :number="cardNumber"
        />
        <div class="flex text-xsm text-white font-bold mt-2">
          <div>Thru: {{ validThrough }}</div>
          <div class="ml-7 font-bold tracking-widest">
            CVV: {{ isCardNumberVisible ? cvv : "***" }}
          </div>
        </div>
        <img :src="visa" alt="visa" class="self-end" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
    const isCardNumberVisible = ref(false);

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
          eyeIcon = CardIcons.eyePurple;
          break;
        default:
          eyeIcon = CardIcons.eyeGreen;
          break;
      }
    }

    const toggleVisibility = () => {
      isCardNumberVisible.value = !isCardNumberVisible.value;
    };

    return {
      appNameLogo: CommonIcons.appNameLogo,
      visa: CardIcons.visa,
      eyeBlue: CardIcons.eyeBlue,
      eyeIcon,
      isCardNumberVisible,
      toggleVisibility,
    };
  },
});
</script>
