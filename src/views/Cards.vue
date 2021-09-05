<template>
  <div class="cards-root bg-app-primary flex-1 pb-14">
    <div class="sticky top-0">
      <div class="p-6">
        <div class="flex justify-end">
          <AppLogo />
        </div>
        <div class="flex justify-between">
          <AccountBalance :amount="`3,000`" />
          <AddNewButton />
        </div>
      </div>
      <CardTabs />
      <CardsCarousel />
    </div>

    <div class="bg-white rounded-tl-3xl rounded-tr-3xl">
      <q-card class="pb-6">
        <CardActions />
        <div class="bg-white px-6">
          <CardDetails />
          <RecentTransactions />
        </div>
      </q-card>
    </div>

    <BottomTabNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BottomTabNav from "@/components/BottomTabNav.vue";
import AccountBalance from "@/components/AccountBalance.vue";
import CardsCarousel from "@/components/CardsCarousel.vue";
import CardActions from "@/components/CardActions.vue";
import RecentTransactions from "@/components/RecentTransactions.vue";
import CardDetails from "@/components/CardDetails.vue";
import CardTabs from "@/components/CardTabs.vue";
import AppLogo from "@/legos/AppLogo.vue";
import AddNewButton from "@/legos/AddNewButton.vue";

export default defineComponent({
  name: "Cards",
  components: {
    BottomTabNav,
    AppLogo,
    AccountBalance,
    AddNewButton,
    CardsCarousel,
    CardActions,
    RecentTransactions,
    CardDetails,
    CardTabs,
  },
});
</script>
