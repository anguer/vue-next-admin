<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" />

    <div class="left-menu"></div>

    <div class="right-menu">
      <span class="right-menu-item">
        <i class="el-icon-full-screen"></i>
      </span>
      <span class="right-menu-item">
        <el-badge is-dot type="danger">
          <i class="el-icon-bell"></i>
        </el-badge>
      </span>
      <span class="right-menu-item">
        <i class="el-icon-setting"></i>
      </span>
      <span class="right-menu-item">
        <el-avatar size="medium" :src="`https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`"></el-avatar>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from '@/components/Hamburger/index.vue';

export default {
  name: 'Navbar',
  components: {
    Hamburger,
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar');
    },
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: relative;
  z-index: 10;
  height: 50px;
  border-radius: 0 !important;
  color: #303133;
  background-color: #fff;
  border: none !important;
  //box-shadow: 0px -5px 10px 2px #272727;
  display: flex;
  align-items: center;

  .left-menu {
    height: inherit;
    display: inline-block;
    font-size: 0;
    flex: 1;
  }

  .right-menu {
    display: flex;
    align-items: center;
    font-size: 0;

    .right-menu-item {
      position: relative;
      display: inline-block;
      margin: 0 10px;
      color: inherit;
      transition: all .3ms linear;
      cursor: pointer;

      i[class^="el-icon-"] {
        font-size: 20px;
      }

      &:hover {
        opacity: .6;
      }

      &, * {
        vertical-align: inherit !important;
      }
    }
  }
}
</style>
