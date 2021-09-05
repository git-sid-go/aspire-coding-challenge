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
            }, 2000);
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
  },
});
