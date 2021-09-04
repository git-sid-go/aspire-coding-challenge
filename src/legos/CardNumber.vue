<template>
  <div class="flex">
    <template :key="item" v-for="(item, index) in cardDigitsArray">
      <CardFourDigits :index="index" :number="item" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardFourDigits from "@/legos/CardFourDigits.vue";

export default defineComponent({
  name: "CardNumber",
  props: {
    number: String,
  },
  components: {
    CardFourDigits,
  },
  setup(props) {
    if (props.number) {
      const cardDigitsArray = props.number.split(" ");
      return { cardDigitsArray };
    }
    return { cardDigitsArray: ["", "", "", ""] };
  },
});
</script>
