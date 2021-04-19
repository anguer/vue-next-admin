<template>
  <div class="sidebar-container" :class="{ collapse, mobile }">
    <div style="line-height: 50px; font-size: 20px; text-align: center;">LG</div>
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
  </div>
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

<style rel="stylesheet/scss" lang="scss" scoped>
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
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  //overflow: hidden;

  // reset element-ui css
  ::v-deep(.el-menu) {
    border: none;
    height: 100%;
    width: 100%;

    // set height ✅
    .el-menu-item, .el-submenu__title {
      height: 40px;
      line-height: 40px;

      //[class^="el-icon-"], svg {
      //  margin-right: 16px;
      //}
      //.el-submenu__icon-arrow {
      //  color: inherit !important;
      //}
    }

    // menu active ✅
    .el-menu-item.is-active,
    .el-submenu .el-menu-item.is-active,
    .el-submenu.is-active > .el-submenu__title {
      color: #409EFF !important;
      background-color: $menuHover !important;
      //background-color: $menuActive !important;
    }

    // menu hover ✅
    .el-menu-item,
    .el-submenu .el-menu-item,
    .el-submenu > .el-submenu__title {
      &:hover {
        background-color: $menuHover !important;
      }
    }

    //.is-active > .el-submenu__title {
    //  color: #409EFF !important;
    //}

    //.is-opened > .el-submenu__title {
    //  background-color: #fff !important;
    //}

    // menu hover
    //.submenu-title-noDropdown,
    //.el-submenu__title {
    //  padding-left: 18px !important;
    //  //&:hover {
    //  //  background-color: $menuHover !important;
    //  //}
    //}

    //& .nest-menu .el-submenu > .el-submenu__title,
    //& .el-submenu .el-menu-item {
    //  min-width: $sideBarWidth !important;
    //  background-color: #fff !important;
    //
    //  //&:hover {
    //  //  background-color: $subMenuHover !important;
    //  //}
    //}
  }

  // reset element-ui css
  //.horizontal-collapse-transition {
  //  transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  //}

  //.el-scrollbar__bar.is-vertical {
  //  right: 0px;
  //}

  //.el-scrollbar {
  //  height: 100%;
  //}

  //&.has-logo {
  //  .el-scrollbar {
  //    height: calc(100% - 50px);
  //  }
  //}

  //.is-horizontal {
  //  display: none;
  //}

  //a {
  //  display: inline-block;
  //  width: 100%;
  //  overflow: hidden;
  //  white-space: nowrap;
  //}

  /* TODO 这句好像没有用 */
  //.el-menu--collapse .el-menu .el-submenu {
  //  min-width: $sideBarWidth !important;
  //}

  // 收起效果
  &.collapse {
    width: 54px !important;

    ::v-deep(.el-menu) {
      .submenu-title-noDropdown {
        //padding: 0 !important;
        //position: relative;

        .el-tooltip {
          padding: 0 !important;

          [class^="el-icon-"], svg {
            margin-left: 18px;
          }
        }
      }

      .el-submenu {
        overflow: hidden;

        & > .el-submenu__title {
          padding: 0 !important;

          [class^="el-icon-"], svg {
            margin-left: 18px;
          }
        }
      }

      .el-menu--collapse {
        .el-submenu {
          & > .el-submenu__title {
            & > span {
              height: 0;
              width: 0;
              overflow: hidden;
              visibility: hidden;
              display: inline-block;
            }
          }
        }
      }
    }
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
