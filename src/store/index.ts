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
      },
      mutations: {
        addNewLoan(state, payload) {
          state.allLoans = [...state.allLoans, payload];
        },
      },
      getters: {},
    },
  },
});
