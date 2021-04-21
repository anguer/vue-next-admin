<template>
  <el-scrollbar class="sidebar-container" :class="{ collapse, mobile }">
    <el-affix position="top" :offset="0">
      <div class="sidebar-logo">LG</div>
    </el-affix>
    <el-menu
      :default-active="$route.path"
      background-color="#fff"
      text-color="#303133"
      active-text-color="#409EFF"
      :collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="false"
      mode="vertical"
      router
    >
      <sidebar-item v-for="(route, index) in permission_routes" :key="index" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar',
    ]),
    isCollapse () {
      return !this.sidebar.opened;
    },
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped >
.sidebar-container {
  transition: width 0.28s;
  //width: 210px !important;
  background-color: #fff;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;

  .sidebar-logo {
    position: relative;
    z-index: 10;
    //width: 100%;
    height: 50px;
    padding: 0 20px;
    color: #303133;
    background-color: #fff;
    //box-shadow: 0 -5px 10px 2px #272727;
    overflow: hidden;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
}
</style>

