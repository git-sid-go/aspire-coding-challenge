<template>
  <div class="border border-grey my-6 rounded-lg">
    <q-expansion-item
      expand-separator
      expand-icon="img:/img/icons/down-arrow.svg"
      header-class="bg-app-bluish-grey rounded-lg"
    >
      <template v-slot:header>
        <div class="flex items-center text-app-primary font-semibold flex-1">
          <img :src="transactionIcon" />
          <div class="ml-3">Recent Transactions</div>
        </div>
      </template>
      <div class="bg-white px-6">
        <template :key="item.name" v-for="item in recent_transactions_list">
          <TransactionItem
            :name="item.name"
            :amount="item.amount"
            :type="item.type"
            :date="item.date"
            :transactionType="item.transactionType"
            :icon="item.icon"
            :bgColor="item.color"
          />
        </template>
      </div>
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TransactionItem from "@/components/TransactionItem.vue";
import { CommonIcons } from "@/assets/assets";
import { RECENT_TRANSACTIONS } from "@/composables/useRecentTransactions";

export default defineComponent({
  name: "RecentTransactions",
  components: { TransactionItem },
  setup() {
    return {
      transactionIcon: CommonIcons.transaction,
      recent_transactions_list: RECENT_TRANSACTIONS,
    };
  },
});
</script>
