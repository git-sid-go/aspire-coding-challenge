<template>
  <div class="loans-root bg-app-primary h-screen py-6 text-white">
    <div class="bg-app-primary">
      <div class="w-full max-w-2xl text-center m-auto">
        <div class="flex w-full justify-start px-6">
          <router-link to="/">
            <AppLogo />
          </router-link>
        </div>
        <div class="px-4 pb-10 mt-4 bg-app-primary">
          <h6 class="font-bold mt-2">Hi {{ currentUser.name }}!</h6>
          <p class="font-semibold" v-if="allLoans.length === 0">
            You currently do not have any active loans. Tap on "Apply Now" to
            apply for a new loan.
          </p>
          <div class="text-center my-10">
            <router-link
              to="/apply-and-manage-loans/new-loan"
              class="bg-app-tertiary px-4 py-2 font-bold text-white text-md mt-5 rounded-md"
            >
              {{
                allLoans.length === 0 ? "Apply Now" : "Apply For A New Loan"
              }}</router-link
            >
          </div>
          <template :key="index" v-for="(item, index) in allLoans">
            <LoanItem
              :loanId="item.loanId"
              :terms="item.terms"
              :loanAmount="item.amount"
            />
          </template>
        </div>
      </div>
    </div>
    <FullPageLoader v-show="isRepaying || isRegisteringUser" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import LoanItem from "@/components/LoanItem.vue";
import AppLogo from "@/legos/AppLogo.vue";
import FullPageLoader from "@/legos/FullPageLoader.vue";

export default defineComponent({
  name: "Loans",
  components: { AppLogo, LoanItem, FullPageLoader },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.user,
      isRegisteringUser: (state) => state.auth.isRegisteringUser,
      allLoans: (state) => state.loans.allLoans,
      isRepaying: (state) => state.loans.isRepaying,
    }),
  },
});
</script>
