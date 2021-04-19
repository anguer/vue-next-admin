<template>
  <div>
    <i class="hamburger el-icon-s-fold" :class="{'is-active':isActive}" @click="toggleClick"></i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
};
</script>

<style scoped>
  .hamburger {
    display: inline-block;
    cursor: pointer;
    font-size: 20px;
    vertical-align: middle;
    transform: rotate(180deg);
    transition: .38s;
    transform-origin: 50% 50%;
  }

  .hamburger.is-active {
    transform: rotate(0deg);
  }
</style>
