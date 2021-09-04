<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      height="auto"
      class="bg-transparent"
    >
      <template :key="item.nameOnCard" v-for="item in cards_list">
        <q-carousel-slide :name="item.nameOnCard">
          <div class="q-mt-md text-center">
            <CardItem
              :name="item.nameOnCard"
              :cardColor="item.color"
              :cardNumber="item.number"
              :validThrough="item.validThrough"
              :cvv="item.cvv"
            />
          </div>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </div>
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
