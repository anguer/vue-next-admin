<template>
  <div class="major-container" :class="{ collapse, mobile }">
    <slot name="navbar" />
    <router-view class="app-main" />
  </div>
</template>

<script>
export default {
  name: 'Major',
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
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.major-container {
  //@include scrollBar;
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: 210px;
  position: relative;

  &.collapse {
    margin-left: 54px;
  }

  &.mobile {
    margin-left: 0px;
  }
}

.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px - 40px);
  position: relative;
  overflow: hidden;
  padding: 20px;
  background: #F2F4F9;
  //border: solid 20px #F2F4F9;
  //background: #fff;
}

</style>
