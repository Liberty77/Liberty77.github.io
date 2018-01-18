<template>
  <div role="slider">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="slider-left column">
            <nav class="nav flex-column">
              <a class="nav-link" href="#"><img src="../assets/logo_white.svg" class="p-1"></a>
              <a class="nav-link" href="#">
                <app-search-icon />
              </a>
              <a class="nav-link" href="#">
                <app-add-icon/> </a>
            </nav>
  
          </div>
        </div>
        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-9">
          <div class="slider-menu">
            <h2>微公学</h2>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#" @click="$router.push('/test')">Test</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="$router.push('/chat')">Chat</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img class="float-left" src="../assets/news.svg" alt="ddd"> 新闻
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img class="float-left" src="../assets/news.svg" alt="ddd"> 新闻
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchIcon from "@/components/SearchIcon";
  import AddIcon from "@/components/AddIcon";
  import MenuItem from "@/components/MenuItem";
  
  export default {
    data: () => ({
      showMemu: false,
      calzzItems: [{
          index: 1,
          iconPath: imgPath,
          title: title
        },
        {
          index: 1,
          iconPath: imgPath1,
          title: title
        },
  
      ]
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
