<template>
  <div id="app">
    <nav-bar class="nav">
      <div slot="left" class="nav_logo">
        <router-link to="/">
          <img src="~assets/img/cnodejs_light.svg" alt="" />
        </router-link>
      </div>
      <div slot="right">
        <router-link to="/">
          <el-button round>关于</el-button>
        </router-link>
      </div>
    </nav-bar>
    <div class="content">
      <router-view name="main" class="main" />
      <router-view name="sidebar" class="sidebar" />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },

}
</script>

<style lang='less'>
@import 'assets/css/base.less';
.nav {
  background-color: #colors[2nd];
  color: #colors[1st];
  padding: 0 50px;
  a {
    color: #colors[1st];
  }
  // logo垂直居中
  .nav_logo {
    line-height: 50px;
    font-size: 0;
    img {
      vertical-align: middle;
    }
  }
}
.content {
  display: flex;
  justify-content: center;
  padding: 10px 30px;
  .main {
    width: 80%;
  }
  .sidebar {
    flex: 1;
  }
}
</style>
