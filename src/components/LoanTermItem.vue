<template>
  <div
    class="flex py-4 border-b border-grey2 px-6 text-app-primary justify-between"
  >
    <div>
      <div class="font-semibold text-app-black text-sm mb-1">
        {{ month }}
      </div>
      <div class="text-app-grey text-xsm">{{ amount }}</div>
    </div>
    <div>
      <button
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

export default defineComponent({
  name: "LoanTermItem",
  props: {
    loanId: String,
    month: String,
    amount: String,
    isRepayed: Boolean,
  },
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
