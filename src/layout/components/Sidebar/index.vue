<template>
  <div wrap-class="scrollbar-wrapper">
    <div style="line-height: 50px; font-size: 20px; text-align: center;">LG</div>
    <el-menu
      :default-active="$route.path"
      background-color="#fff"
      text-color="#303133"
      active-text-color="#409EFF"
      :collapse="isCollapse"
      :collapse-transition="false"
      unique-opened
      mode="vertical"
    >
      <sidebar-item v-for="(route, index) in permission_routes" :key="index" :item="route" :base-path="route.path"/>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'Sidebar',
  components: { SidebarItem },
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
