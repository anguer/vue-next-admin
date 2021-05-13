<template>
  <el-form :model="formModal">
    <el-row :gutter="20">
      <template v-for="schema in schemas" :key="schema.field">
        <vn-form-item v-model:value="formModal[schema.field]" :schema="schema" />
      </template>

      <el-col :span="24">
        <el-form-item>
          <el-button tyoe="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { defineComponent } from 'vue';
import { formSchema } from '../data.test';
import VnFormItem from './VnFormItem.vue';

function initFormModal (schemas = []) {
  const modal = {};
  schemas.forEach(({ field, defaultValue }) => {
    // if (defaultValue !== null && defaultValue !== undefined) {
    //   modal[field] = defaultValue;
    // } else {
    //   modal[field] = undefined;
    // }
    modal[field] = defaultValue;
  });
  return modal;
}

export default defineComponent({
  name: 'VnForm',
  components: { VnFormItem },
  props: {
    schemas: {
      type: Array,
      default: () => formSchema
    }
  },
  data () {
    return {
      formModal: initFormModal(this.schemas)
    };
  },

  methods: {
    handleSubmit () {
      console.log('#handleSubmit', this.formModal);
    }
  }
});
</script>

<style scoped>

</style>
