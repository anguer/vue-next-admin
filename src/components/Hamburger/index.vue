<template>
  <div class="hamburger-container">
    <i class="hamburger el-icon-s-fold" :class="{'is-active':isActive}" @click="toggleClick"/>
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

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 10px;
  font-size: 0;
  color: inherit;

  .hamburger {
    display: inline-block;
    cursor: pointer;
    font-size: 20px;
    color: inherit;
    transform: rotate(180deg);
    transition: .38s;
    transform-origin: 50% 50%;
  }

  .hamburger.is-active {
    transform: rotate(0deg);
  }
}
</style>
