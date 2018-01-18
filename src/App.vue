<template>
  <div id="app" class="container-fluid">
    <app-navigation class="navigation" v-if="showNavigation"></app-navigation>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import Slider from "@/views/Slider";
import api from "./api";
import axios from "axios";

export default {
  name: "app",
  components: { "app-navigation": Slider },

  computed: {
    showNavigation() {
      return this.$route.path !== "/login";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
}

.container-fluid {
  padding: 0px;
}

ul {
  list-style: none;
  padding: 0px;
}

.navigation {
  display: flex;
  flex: 0 0 304px;
  background-color: #1987ff;
  height: 100vh;
}

.content-container {
  padding: 16px;
  flex-grow: 1;
  height: 100vh;
  overflow-y: scroll;
}
</style>