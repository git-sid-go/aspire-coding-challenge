<template>
  <BaseExpansionItem
    headerTitle="Recent Transactions"
    :icon="transactionIcon"
    isOpenByDefault
  >
    <div class="bg-white">
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
      <div class="py-4 text-center bg-app-green">
        <a type="button" class="text-app-green font-semibold text-xsm">
          View all card transactions
        </a>
      </div>
    </div>
  </BaseExpansionItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TransactionItem from "@/components/TransactionItem.vue";
import BaseExpansionItem from "@/legos/BaseExpansionItem.vue";
import { CommonIcons } from "@/assets/assets";
import { RECENT_TRANSACTIONS } from "@/composables/useRecentTransactions";

export default defineComponent({
  name: "RecentTransactions",
  components: { TransactionItem, BaseExpansionItem },
  setup() {
    return {
      transactionIcon: CommonIcons.transaction,
      recent_transactions_list: RECENT_TRANSACTIONS,
    };
  },
});
</script>
