// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    userAddress: {
      firstName: '',
      lastName: '',
      country: '',
      townCity: '',
      streetAddress: '',
      state: '',
      zip: '',
      email: '',
      phoneNumber: '',
    },
  },
  mutations: {
    updateForm(state, { field, value }) {
      state.userAddress[field] = value;
    },
    clearForm(state) {
      state.userAddress.firstName = '';
      state.userAddress.lastName = '';
      state.userAddress.country = '';
      state.userAddress.townCity = '';
      state.userAddress.streetAddress = '';
      state.userAddress.state = '';
      state.userAddress.zip = '';
      state.userAddress.email = '';
      state.userAddress.phoneNumber = '';
      state.userAddress.phoneCode = '';
    },
  },
  actions: {},
  getters: {
    getUserAddress: (state) => state.userAddress,
  },
});
