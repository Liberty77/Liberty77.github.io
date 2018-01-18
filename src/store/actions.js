import api from "@/api";
import Vue from "vue";
import router from "@/router";

export const login = ({ commit }, params) => {
  api.post("/session/create", params).then(resp => {
    const user = resp.data.data.user;
    commit("loadUser", user);
    localStorage.setItem("cl-user", JSON.stringify(user));
    router.push("/");
  });
};

export const logout = ({ commit }) => {
  commit("removeUser");
  localStorage.removeItem("cl-user");
  router.replace("/login");
};
