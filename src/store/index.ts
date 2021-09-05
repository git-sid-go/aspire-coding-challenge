import { createStore } from "vuex";

export default createStore({
  state: {
    machine: "hello",
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    auth: {
      namespaced: true,
      state: {
        user: null,
      },
      actions: {
        registerUser({ commit }, { name, email }) {
          return new Promise((resolve) => {
            setTimeout(() => {
              commit("updateUser", {
                name,
                email,
              });
              resolve("user created");
            }, 200);
          });
        },
        logOut({ commit }) {
          commit("updateUser", null);
        },
      },
      mutations: {
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
      },
      actions: {
        addNewLoan({ commit }, { loanId, amount, numOfTerms, terms }) {
          return new Promise((resolve) => {
            setTimeout(() => {
              commit("addNewLoan", {
                loanId,
                amount,
                numOfTerms,
                terms,
              });
              resolve("Loan created");
            }, 200);
          });
        },
        initiateRepayTerm(
          { commit },
          { repayLoanId, repayAmount, repayMonth }
        ) {
          console.log("action");
          commit("showConfirmation", {
            repayLoanId,
            repayAmount,
            repayMonth,
          });
        },
      },
      mutations: {
        addNewLoan(state, payload) {
          state.allLoans = [...state.allLoans, payload];
        },
        showConfirmation(state, payload) {
          console.log("mutation");
          state = { ...state, ...payload, showConfirmationModal: true };
        },
      },
      getters: {},
    },
  },
});
