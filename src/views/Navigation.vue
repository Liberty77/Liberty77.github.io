<template>
  <nav class="nav pt-4">
  <div class="nav-left">
    <div class="nav-left-top">
      <img src="../assets/logo_white.svg" class="p-1">
      <app-search-icon />
      <app-add-icon/>
    </div>
    <div class="nav-left-bottom">
      <div class="nav-item-profile p-2 mb-2" @click="showMemu = !showMemu">
        <img :src="avatarUrl" :alt="name" class="rounded-circle border border-white">
      </div>
    </div>
  </div>
  <div class="nav-right px-5">
      <h2 class="clazz-brand" @click="$router.push('/')">微公学</h2>
      <!-- <a class="dropdown-item" @click="$router.push('/test')">Test</a>
      <a class="dropdown-item" @click="$router.push('/chat')">Chat</a>
      <a class="dropdown-item">Moments</a>
      <a class="dropdown-item">Schedule</a>  -->
      <!-- <nav class="nav flex-column">
      <a class="nav-link" href="#">新闻</a>
      <a class="nav-link active" href="#" @click="$router.push('/test')">Test</a>
      <a class="nav-link" href="#" @click="$router.push('/chat')">Chat</a>
      <a class="nav-link" href="#">Schedule</a>
      <a class="nav-link" href="#">Moments</a>
    </nav> -->
   <ul class="nav flex-column">
    <li class="">
      <!-- <button class="btn btn-default"> -->
        <app-menu-item />
      <!-- </button> -->
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#" @click="$router.push('/test')">Test</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="$router.push('/chat')">Chat</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Schedule</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Moments</a>
    </li>
  </ul>
  </div>
  
  <div class="profile-menu" v-if="showMemu">
    <ul>
      <li>{{name}}</li>
      <li>Profile</li>
      <li>Setting</li>
      <li>Feedback</li>
      <li @click="logout">Logout</li>
    </ul>
  </div>
</nav>

</template>

<script>
import SearchIcon from "@/components/SearchIcon";
import AddIcon from "@/components/AddIcon";
import MenuItem from "@/components/MenuItem";


export default {
  data: () => ({
    showMemu: false
  }),
  components: {
    "app-search-icon": SearchIcon,
    "app-add-icon": AddIcon,
    "app-menu-item": MenuItem
  },
  computed: {
    avatarUrl() {
      return (
        this.$store.state.user && this.$store.state.user.profile.avatar_url
      );
    },
    name() {
      return this.$store.state.user && this.$store.state.user.profile.name;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  position: relative;
}

h2.clazz-brand {
  color: #fff;
}

/* .nav-item {
  float: none;
  display: inline-block;
  horizontal-align: middle;
} */

.nav-link {
  color: #fff;
}

/* a.news {
  margin-top: -10px;
  margin-left: 12px;
} */

.profile-menu {
  position: absolute;
  left: 64px;
  bottom: 32px;
  color: black;
  background-color: white;
}

.nav-left {
  display: flex;
  flex-direction: column;
  width: 72px;
  flex: 1;
  flex-grow: 0;
}

.nav-right {
  color: lightcyan;
  flex-grow: 1;
}

.nav-left-top {
  flex-grow: 1;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
}

img {
  margin-left: 10px;
  height: 36px;
  width: 36px;
}

svg {
  margin-top: 0.5em;
}
</style>
