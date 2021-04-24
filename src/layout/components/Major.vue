<template>
  <div class="major-container" :class="{ collapse, mobile }">
    <el-affix position="top" :offset="0"><slot name="navbar" /></el-affix>
    <el-scrollbar class="app-main">
      <router-view />
    </el-scrollbar>
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
  //margin-left: 210px;
  position: relative;
}

.app-main {
  /* navbar = 50px */
  min-height: calc(100vh - 50px - 80px);
  position: relative;
  overflow: hidden;
  padding: 20px;
  //background: #F2F4F9;
  border: solid 20px #F2F4F9;
}

</style>
