<template>
  <el-select v-bind="{ ...$attrs, ...$props }">
    <template v-for="(option, index) in options" :key="`__select_key_${index}`">
      <el-option :value="option.value" :label="option.label"></el-option>
    </template>
  </el-select>
</template>

<script>
export default {
  name: 'Select',
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
