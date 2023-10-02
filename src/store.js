/* eslint-disable */
import { createStore } from 'vuex';

export default createStore({
  state: {
    authenticated: false,
    role: false,
    cookie: null,
    adus: 'root',
    adpa: 'root',
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.authenticated = isAuthenticated;
      
    },
    setRole(state, role) {
        state.role = role;
    },
    setCookie(state, newCookies) {
      state.cookie = newCookies;
    },
    setAdUs(state, adus) {
      state.adus = adus;
    },
    setAdPa(state, adpa) {
      state.adpa = adpa;
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
      newCookies(state) {
        return state.cookie;
      },
      getAdUs: (state) => state.adus,
      getAdPa: (state) => state.adpa,
  },
});