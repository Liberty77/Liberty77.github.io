import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    user: getUser()
  },
  actions,
  mutations,
  strict: debug
});

function getUser() {
  return JSON.parse(localStorage.getItem("cl-user"));
}
