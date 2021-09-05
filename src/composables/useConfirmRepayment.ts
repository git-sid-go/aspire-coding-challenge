import { reactive, toRefs } from "vue";

export const useConfirmRepayment = () => {
  const state = reactive({
    showConfirmDialog: false,
    repayAmount: 0,
    repayMonth: "",
    repayForLoan: "",
  });

  const initiateRepayment = ({ amount, month, loanId }) => {
    state.repayAmount = amount;
    state.repayMonth = month;
    state.repayForLoan = loanId;
    state.showConfirmDialog = true;
  };

  return {
    ...toRefs(state),
    initiateRepayment,
  };
};
