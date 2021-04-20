<template>
  <el-menu class="navbar" mode="horizontal" unique-opened>
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
  </el-menu>
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
  line-height: 50px;
  border-radius: 0 !important;
  color: #303133;
  background-color: #fff;
  border: none !important;
  //box-shadow: 0px -5px 10px 2px #272727;
  display: flex;

  .hamburger-container {
    line-height: 50px;
    height: 50px;
    float: left;
    padding: 0 10px;
    font-size: 0;
  }

  .breadcrumb-container {
    float: left;
  }

  .left-menu {
    height: inherit;
    display: inline-block;
    float: left;
    font-size: 0;
    flex: 1;
  }

  .right-menu {
    float: right;
    height: 100%;
    font-size: 0;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      position: relative;
      //display: inline-block;
      display: inline-flex;
      align-items: center;
      margin: 0 10px;
      height: 100%;
      font-size: 20px;
      color: inherit;
      vertical-align: middle;
      transition: all .3ms linear;

      &:hover {
        //color: ;
        opacity: .6;
        cursor: pointer;
      }
    }

    .right-menu-dropdown {
      height: inherit;
      vertical-align: middle;
    }

    .avatar-container {
      height: 50px;
      margin-right: 20px;
      //margin-left: 10px;
      vertical-align: middle;

      .avatar-wrapper {
        //margin-top: 8px;
        position: relative;
        font-size: 0;
        cursor: pointer;

        line-height: 50px;
        height: inherit;
        //padding: 10px 0;

        .user-avatar {
          cursor: pointer;
          //width: 40px;
          //height: 40px;
          //border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
