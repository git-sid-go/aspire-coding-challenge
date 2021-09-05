<template>
  <div
    class="flex py-6 border-b border-grey2 px-6 text-app-primary justify-between items-center"
  >
    <div>
      <div class="font-semibold text-app-black text-sm mb-3">
        {{ month }}
      </div>
      <div class="font-bold text-app-white flex items-center">
        <DollarIcon />
        <span class="ml-1 text-app-black text-lg">{{ amount }}</span>
      </div>
    </div>
    <div>
      <div
        v-if="isRepayed"
        class="bg-app-tertiary rounded-md px-2 py-1 text-sm text-white font-bold"
      >
        Repaid
      </div>
      <button
        v-else
        type="button"
        @click="repayTerm"
        class="text-white bg-app-primary px-2 py-1 text-sm font-bold rounded-md"
      >
        Repay
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import DollarIcon from "@/legos/DollarIcon.vue";

export default defineComponent({
  name: "LoanTermItem",
  props: {
    loanId: String,
    month: String,
    amount: String,
    isRepayed: Boolean,
  },
  components: { DollarIcon },
  methods: {
    ...mapActions({
      initiateRepayTermAction: "loans/initiateRepayTerm",
    }),
    repayTerm() {
      this.initiateRepayTermAction({
        repayLoanId: this.loanId,
        repayAmount: this.amount,
        repayMonth: this.month,
      });
    },
  },
});
</script>
