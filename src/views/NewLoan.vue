<template>
  <div
    class="new-loan-root flex flex-col items-center bg-app-primary h-screen py-6"
  >
    <div class="flex w-full justify-start px-6">
      <AppLogo />
    </div>
    <p class="text-white font-bold text-lg mt-10 mb-4">
      Let's apply for a new loan!
    </p>
    <Form
      @submit="onSubmit"
      class="w-full max-w-xl flex flex-col items-center mx-auto"
    >
      <div class="w-10/12 flex justify-center relative">
        <Field
          name="amount"
          type="number"
          placeholder="Enter loan amount"
          class="w-full border font-semibold py-2 px-4 mb-9 rounded-md text-app-primary"
          :rules="isValidAmount"
        />
        <ErrorMessage
          class="absolute left-0 bottom-4 text-xs text-red-400"
          name="amount"
        />
      </div>

      <div class="w-10/12 flex justify-center relative">
        <Field
          name="numOfTerms"
          type="number"
          placeholder="Enter no. of repayment terms (in months)"
          class="w-full border font-semibold py-2 px-4 mb-9 rounded-md text-app-primary"
          :rules="isValidTermLength"
        />
        <ErrorMessage
          class="absolute left-0 bottom-4 text-xs text-red-400"
          name="numOfTerms"
        />
      </div>
      <button
        class="bg-app-tertiary px-4 py-2 font-bold text-white text-lg mt-5 rounded-md"
        type="submit"
      >
        Apply
      </button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import { addMonths, eachMonthOfInterval, format } from "date-fns";
import AppLogo from "@/legos/AppLogo.vue";

export default defineComponent({
  name: "NewLoan",
  components: {
    Form,
    Field,
    ErrorMessage,
    AppLogo,
  },
  computed: {
    ...mapState({
      allLoans: (state: any) => state.loans.allLoans,
    }),
  },
  methods: {
    ...mapActions({
      addNewLoanAction: "loans/addNewLoan",
    }),
    onSubmit(values: { amount: number; numOfTerms: number }) {
      const { amount, numOfTerms } = values;
      const startMonth = addMonths(new Date(), 1);
      const endMonth = addMonths(new Date(), numOfTerms);
      const result = eachMonthOfInterval({
        start: startMonth,
        end: endMonth,
      });
      const amountPerTerm = (amount / numOfTerms).toFixed(2);
      const termsList = result.map((term) => {
        return {
          month: format(term, "MMMM, yyyy"),
          amount: amountPerTerm,
          isRepayed: false,
        };
      });
      this.addNewLoanAction({
        loanId: `Loan#${this.allLoans.length + 1}`,
        amount,
        numOfTerms,
        terms: termsList,
      }).then(() => {
        this.$router.push("/apply-and-manage-loans");
      });
    },
    isValidAmount(value: string) {
      if (!value) {
        return "This field is required";
      }
      if (Number(value) <= 0) {
        return "Please enter a valid amount";
      }
      if (Number(value) > 10000000) {
        return "Cannot be more than S$ 10 million";
      }
      return true;
    },
    isValidTermLength(value: string) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      if (Number(value) <= 0) {
        return "Please enter a valid number";
      }
      if (Number(value) > 60) {
        return "Cannot be longer than 5 years";
      }
      return true;
    },
  },
});
</script>
