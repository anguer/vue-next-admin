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

</style>
