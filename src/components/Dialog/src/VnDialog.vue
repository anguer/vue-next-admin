<template>
  <el-dialog v-model="isShow"
             :width="width"
             center
             append-to-body
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             show-close
             @open="handleOpen"
             @close="handleClose"
  >
    <template #title>
      <div class="title">
        {{ title }}
      </div>
    </template>

    <slot />

    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'VnDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '500px'
    }
  },
  emits: ['update:visible', 'open', 'close'],
  computed: {
    // 控制Dialog显示/隐藏
    isShow: {
      get () {
        return this.visible;
      },
      set (val) {
        this.$emit('update:visible', val);
      }
    }
  },
  methods: {
    /**
     * Dialog打开回调
     */
    handleOpen () {
      this.$emit('open');
    },

    /**
     * Dialog关闭回调
     */
    handleClose () {
      // do something
      this.$emit('close');
    },
  }
};
</script>

<style scoped>

</style>
