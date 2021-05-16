<template>
  <el-checkbox-group v-bind="{ ...$attrs, ...$props }">
    <template v-for="(option, index) in options" :key="`__checkbox_key_${index}`">
      <el-checkbox :label="option.value">{{ option.label }}</el-checkbox>
    </template>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'CheckBoxGroup',
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
