<template>
  <div class="border border-grey my-6 rounded-lg">
    <q-expansion-item
      expand-separator
      expand-icon="img:/img/icons/down-arrow.svg"
      header-class="bg-app-bluish-grey rounded-tl-lg rounded-tr-lg"
    >
      <template v-slot:header>
        <div class="flex-1">
          <div
            class="flex items-center text-app-primary font-semibold flex-1 xl:px-2 xl:py-4"
          >
            <img :src="transactionIcon" />
            <div class="ml-3 font-semibold flex items-center">
              {{ loanId }}
              <div class="flex items-center font-bold text-white ml-4">
                <DollarIcon />
                <span class="text-app-black text-lg ml-1">{{
                  loanAmount
                }}</span>
              </div>
            </div>
          </div>
          <div
            class="font-semibold text-app-black text-md text-left mx-1 my-2 mt-3"
          >
            Status:
            <span
              v-if="isLoanRepaid"
              class="bg-app-tertiary rounded-md px-2 py-1 text-sm text-white font-bold"
            >
              Loan Repaid
            </span>
            <span
              v-else
              class="bg-app-primary rounded-md px-2 py-1 text-sm text-white font-bold"
            >
              Pending Repayment
            </span>
          </div>
        </div>
      </template>
      <div class="bg-white">
        <template :key="term.month" v-for="term in terms">
          <LoanTermItem
            :month="term.month"
            :amount="term.amount"
            :isRepayed="term.isRepayed"
            :loanId="loanId"
          />
        </template>
      </div>
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoanTermItem from "@/components/LoanTermItem.vue";
import DollarIcon from "@/legos/DollarIcon.vue";
import { CommonIcons } from "@/assets/assets";

export default defineComponent({
  name: "LoanItem",
  props: {
    loanId: String,
    terms: Array,
    loanAmount: String,
  },
  computed: {
    isLoanRepaid() {
      if (this.terms) {
        return this.terms.every((term: any) => term.isRepayed);
      }
      return false;
    },
  },
  components: { LoanTermItem, DollarIcon },
  setup() {
    return { transactionIcon: CommonIcons.transaction };
  },
});
</script>
