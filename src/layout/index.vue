<template>
  <div v-if="mobile&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
  <sidebar :collapse="!sidebar.opened" :mobile="mobile" />
  <major :collapse="!sidebar.opened" :mobile="mobile">
    <template #navbar>
      <navbar />
    </template>
  </major>
</template>

<script>
import { Major, Navbar, Sidebar } from './components';
import ResizeMixin from './mixin/ResizeHandler';

export default {
  name: 'Layout',
  components: { Major, Navbar, Sidebar },
  mixins: [ResizeMixin],
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar;
    },
    device () {
      return this.$store.state.app.device;
    },
    mobile () {
      return this.device === 'mobile';
    },
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
