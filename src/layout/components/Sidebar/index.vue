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
      <sidebar-item v-for="(route, index) in permission_routes" :key="index" :item="route" :base-path="route.path"/>
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
$menuHover: mix(#fff, #409EFF, 90%) !default;
$menuActive: mix(#fff, #409EFF, 90%) !default;
$subMenuHover: mix(#fff, #409EFF, 90%) !default;

$sideBarWidth: 210px;
// sidebar
$menuHeight: 40px;
$menuText: #303133; // rgba(255, 255, 255, 0.85);
$menuActiveText: #409EFF; // rgba(255, 255, 255, 0.85);
$subMenuActiveText: #409EFF; // rgba(255, 255, 255, 0.85); //https://github.com/ElemeFE/element/issues/12951

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
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

  // reset element-ui css
  ::v-deep(.el-menu) {
    border: none;
    height: 100%;
    width: 100%;

    // set height ✅
    .el-menu-item, .el-submenu__title {
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;

      [class^="el-icon-"] {}

      .el-submenu__icon-arrow {
        color: inherit !important;
        font-size: 14px;
      }
    }

    // menu active ✅
    .el-menu-item.is-active,
    .el-submenu .el-menu-item.is-active,
    .el-submenu.is-active > .el-submenu__title {
      color: #409EFF !important;
      background-color: $menuHover !important;
      //background-color: $menuActive !important;

      [class^="el-icon-"] {
        color: inherit;
      }
    }

    // menu hover ✅
    .el-menu-item,
    .el-submenu .el-menu-item,
    .el-submenu > .el-submenu__title {
      &:hover {
        background-color: $menuHover !important;
      }
    }
  }

  // 收起效果
  &.collapse {
    width: 64px !important;
  }

  &.mobile {
    transition: transform .28s;
    width: $sideBarWidth !important;
  }

  &.mobile.collapse {
    pointer-events: none;
    transition-duration: 0.3s;
    transform: translate3d(-$sideBarWidth, 0, 0);
  }
}

// when menu collapsed
// doesn't work
//.submenu-wrapper.el-menu--vertical {
//  & > .el-menu {
//    .el-menu-item, .el-submenu__title {
//      height: $menuHeight !important;
//      line-height: $menuHeight !important;
//    }
//
//    [class^="el-icon-"], svg {
//      margin-right: 18px;
//    }
//  }
//
//  .nest-menu .el-submenu > .el-submenu__title,
//  .el-menu-item {
//    &:hover {
//      // you can use $subMenuHover
//      background-color: $menuHover !important;
//    }
//  }
//
//  // the scroll bar appears when the subMenu is too long
//  > .el-menu--popup {
//    padding: 0 !important;
//    max-height: 100vh;
//    overflow-y: auto;
//
//    //@include scrollBar;
//  }
//}
</style>
