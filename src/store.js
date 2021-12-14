import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    token: null,
    user: null,
    gym: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeGym(state, gym) {
      state.gym = gym;
    },
  },
  actions: {
    getGym({ commit }) {
      axios.get("/gym").then((aResponse) => {
        console.log("response in /gym", aResponse);
        commit("storeGym", aResponse.data);
      });
    },
  },
});
