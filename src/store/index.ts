import { createStore } from "vuex";

interface ITerm {
  month: string;
  amount: number;
  isRepayed: boolean;
}
interface ILoan {
  loanId: string;
  terms: ITerm[];
  amount: number;
  numOfTerms: number;
}

export default createStore({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    auth: {
      namespaced: true,
      state: {
        user: null,
        isRegisteringUser: false,
      },
      actions: {
        registerUser({ commit }, { name, email }) {
          commit("toggleIsRegistering");
          return new Promise((resolve) => {
            setTimeout(() => {
              commit("updateUser", {
                name,
                email,
              });
              resolve("user created");
              commit("toggleIsRegistering");
            }, 2000);
          });
        },
        logOut({ commit }) {
          commit("updateUser", null);
        },
      },
      mutations: {
        toggleIsRegistering(state) {
          state.isRegisteringUser = !state.isRegisteringUser;
        },
        updateUser(state, payload) {
          state.user = payload;
        },
      },
      getters: {
        isLoggedIn(state) {
          return !!state.user;
        },
      },
    },
    loans: {
      namespaced: true,
      state: {
        allLoans: [],
        showConfirmationModal: false,
        repayAmount: 0,
        repayMonth: "",
        repayLoanId: "",
        isRepaying: false,
      },
      actions: {
        addNewLoan({ commit }, { loanId, amount, numOfTerms, terms }) {
          return new Promise((resolve) => {
            commit("toggleRepaying");
            setTimeout(() => {
              commit("addNewLoan", {
                loanId,
                amount,
                numOfTerms,
                terms,
              });
              resolve("Loan created");
              commit("toggleRepaying");
            }, 500);
          });
        },
        initiateRepayTerm(
          { commit },
          { repayLoanId, repayAmount, repayMonth }
        ) {
          return new Promise((resolve) => {
            commit("toggleRepaying");
            setTimeout(() => {
              commit("repayTerm", {
                repayLoanId,
                repayAmount,
                repayMonth,
              });
              resolve("Term Repaid");
              commit("toggleRepaying");
            }, 2000);
          });
        },
      },
      mutations: {
        addNewLoan(state, payload) {
          state.allLoans = [...state.allLoans, payload];
        },
        toggleRepaying(state) {
          state.isRepaying = !state.isRepaying;
        },
        repayTerm(state, payload) {
          const { repayLoanId, repayMonth } = payload;

          const repayedLoan = state.allLoans.find(
            (loan: ILoan) => loan.loanId === repayLoanId
          );

          const repayedTerm = repayedLoan.terms.find(
            (term: ITerm) => term.month === repayMonth
          );

          const updatedLoan = {
            ...repayedLoan,
            terms: [
              ...repayedLoan.terms.filter(
                (term: ITerm) => term.month !== repayMonth
              ),
              { ...repayedTerm, isRepayed: true },
            ],
          };

          state.allLoans = [
            ...state.allLoans.filter(
              (loan: ILoan) => loan.loanId !== repayLoanId
            ),
            updatedLoan,
          ];
        },
      },
      getters: {},
    },
  },
});
