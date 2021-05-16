<template>
  <el-radio-group v-bind="{ ...$attrs, ...$props }">
    <template v-for="(option, index) in options" :key="`__radio_key_${index}`">
      <el-radio-button :label="option.value">{{ option.label }}</el-radio-button>
    </template>
  </el-radio-group>
</template>

<script>
export default {
  name: 'RadioButtonGroup',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>

</style>
