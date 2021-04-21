<template>
  <div v-if="mobile&&expanded" class="drawer-bg" @click="handleClickOutside"></div>
  <sidebar :style="sidebarStyle" :collapse="collapse" :mobile="mobile" />
  <major :style="majorStyle" :collapse="collapse" :mobile="mobile">
    <template #navbar>
      <navbar />
    </template>
  </major>
</template>

<script>
import { mapGetters } from 'vuex';
import { Major, Navbar, Sidebar } from './components';
import ResizeMixin from './mixin/ResizeHandler';

export default {
  name: 'Layout',
  components: { Major, Navbar, Sidebar },
  mixins: [ResizeMixin],
  props: {
    width: {
      type: String,
      default: '210px'
    },
    miniWidth: {
      type: String,
      default: '64px'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device'
    ]),
    // 是否移动端
    mobile () {
      return this.device === 'mobile';
    },
    // 是否折叠
    collapse () {
      return !this.sidebar.opened;
    },
    // 是否展开
    expanded () {
      return this.sidebar.opened;
    },
    sidebarStyle () {
      return {
        width: (this.mobile || this.expanded) ? this.width : this.miniWidth,
        transform: (this.mobile && this.collapse) ? `translate3d(-${this.width}, 0, 0)` : 'translate3d(0, 0, 0)',
        transition: this.mobile ? 'transform .28s' : 'width .28s',
      };
    },
    majorStyle () {
      return {
        marginLeft: this.mobile ? 0 : (this.expanded ? this.width : this.miniWidth),
      };
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
