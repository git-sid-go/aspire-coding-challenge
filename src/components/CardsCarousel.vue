<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    navigation
    height="auto"
    class="bg-transparent mt-4 xl:mt-0"
  >
    <template v-slot:navigation-icon="slotProps">
      <div
        v-if="slotProps.active"
        class="w-4	h-2 bg-white mx-0.5 rounded-lg mb-2"
      />
      <div v-else class="w-2 h-2 bg-white mx-0.5 rounded-lg opacity-10 mb-2" />
    </template>
    <template :key="item.nameOnCard" v-for="(item, index) in cards_list">
      <q-carousel-slide :name="item.nameOnCard">
        <div class="q-mt-md text-center">
          <CardItem
            :name="item.nameOnCard"
            :textColor="item.textColor"
            :cardColor="item.color"
            :cardNumber="item.number"
            :validThrough="item.validThrough"
            :cvv="item.cvv"
            :index="index"
          />
        </div>
      </q-carousel-slide>
    </template>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CardItem from "@/components/CardItem.vue";
import { CARDS_LIST } from "@/composables/useCardsCarousel";

export default defineComponent({
  name: "CardsCarousel",
  components: {
    CardItem,
  },
  setup() {
    return {
      cards_list: CARDS_LIST,
      slide: ref(`${CARDS_LIST[0].nameOnCard}`),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
});
</script>
