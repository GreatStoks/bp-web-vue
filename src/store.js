/* eslint-disable */
import { createStore } from 'vuex';

export default createStore({
  state: {
    authenticated: false,
    role: false,
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.authenticated = isAuthenticated;
      
    },
    setRole(state, role) {
        state.role = role;
    },

  },

  getters: {
    // Геттер для получения состояния аутентификации
    isAuthenticated(state) {
      return state.authenticated;
    },
    role(state) {
        return state.role;
      },
  },
});