<template>
  <div class="cards-root bg-white flex-1 flex pl-88">
    <DesktopSideNav />
    <div class="p-15 flex-1 max-w-6xl m-auto">
      <div class="flex w-full justify-between items-center">
        <AccountBalance :amount="`3,000`" />
        <AddNewButton label="New Card" />
      </div>
      <div class="mt-8">
        <CardTabs />
      </div>
      <div
        class="shadow-desktopcontainer w-full flex pb-8 px-8 pt-4 mt-4 rounded-lg"
      >
        <div class="flex-1">
          <CardsCarousel />
          <CardActions />
        </div>
        <div class="flex-1 pl-7 mt-2">
          <CardDetails />
          <RecentTransactions />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountBalance from "@/components/AccountBalance.vue";
import CardsCarousel from "@/components/CardsCarousel.vue";
import CardActions from "@/components/CardActions.vue";
import RecentTransactions from "@/components/RecentTransactions.vue";
import CardDetails from "@/components/CardDetails.vue";
import CardTabs from "@/components/CardTabs.vue";
import AddNewButton from "@/legos/AddNewButton.vue";
import DesktopSideNav from "@/components/DesktopSideNav.vue";

export default defineComponent({
  name: "CardsDesktopView",
  components: {
    AccountBalance,
    AddNewButton,
    CardsCarousel,
    CardActions,
    RecentTransactions,
    CardDetails,
    CardTabs,
    DesktopSideNav,
  },
});
</script>
