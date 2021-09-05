<template>
  <div class="loans-root bg-app-primary h-screen py-6 text-white">
    <div class="flex w-full justify-start px-6">
      <AppLogo />
    </div>
    <div class="px-4 pb-10 mt-4 bg-app-primary">
      <h6 class="font-bold mt-2">Hi Siddharth!</h6>
      <p class="font-semibold" v-if="allLoans.length === 0">
        You currently do not have any active loans. Tap on "Apply Now" to apply
        for a new loan.
      </p>
      <template :key="index" v-for="(item, index) in allLoans">
        <BaseExpansionItem
          :headerTitle="`Loan #${index + 1}`"
          :icon="transactionIcon"
        >
          <div class="bg-white">
            <template :key="term.month" v-for="term in item.terms">
              <LoanTermItem
                :month="term.month"
                :amount="term.amount"
                :isRepayed="term.isRepayed"
                :loanId="term.loanId"
              />
            </template>
          </div>
        </BaseExpansionItem>
      </template>
      <div class="text-center my-10">
        <router-link
          to="/apply-and-manage-loans/new-loan"
          class="bg-app-tertiary px-4 py-2 font-bold text-white text-lg mt-5 rounded-md"
        >
          Apply Now</router-link
        >
      </div>
    </div>
    <ConfirmRepayment />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import LoanTermItem from "@/components/LoanTermItem.vue";
import ConfirmRepayment from "@/components/ConfirmRepayment.vue";
import BaseExpansionItem from "@/legos/BaseExpansionItem.vue";
import AppLogo from "@/legos/AppLogo.vue";
import { CommonIcons } from "@/assets/assets";

export default defineComponent({
  name: "Loans",
  components: { AppLogo, BaseExpansionItem, LoanTermItem, ConfirmRepayment },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.user,
      allLoans: (state) => state.loans.allLoans,
    }),
  },
  setup() {
    return { transactionIcon: CommonIcons.transaction };
  },
});
</script>
