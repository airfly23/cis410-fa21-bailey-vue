import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

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
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getGym({ commit }) {
      axios.get("/gym").then((aResponse) => {
        console.log("response in /gym", aResponse);
        commit("storeGym", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/GymMember/logout", null, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
