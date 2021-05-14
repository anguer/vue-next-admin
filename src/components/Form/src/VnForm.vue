<template>
  <el-form ref="formEl" :model="formModel" label-position="top">
    <el-row :gutter="20">
      <template v-for="schema in schemas" :key="schema.field">
        <vn-form-item
          v-model:value="formModel[schema.field]"
          :schema="schema"
          :form-props="getProps"
          :form-model="formModel"
        >
          <template v-for="item in Object.keys($slots)" #[item]="data">
            <slot :name="item" v-bind="data"></slot>
          </template>
        </vn-form-item>
      </template>

      <el-col :span="24">
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
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
  const model = {};
  schemas.forEach(({ field, defaultValue }) => {
    // if (defaultValue !== null && defaultValue !== undefined) {
    //   model[field] = defaultValue;
    // } else {
    //   model[field] = undefined;
    // }
    model[field] = defaultValue;
  });
  return model;
}

export default defineComponent({
  name: 'VnForm',
  components: { VnFormItem },
  props: {
    schemas: {
      type: Array,
      default: () => formSchema
    },
    baseColProps: {
      type: Object,
      default: () => {
        return { lg: 12, md: 24 };
      }
    }
  },
  data () {
    return {
      formModel: initFormModal(this.schemas)
    };
  },
  computed: {
    getProps () {
      return { ...this.$props };
    }
  },

  methods: {
    handleSubmit () {
      console.log('#handleSubmit', this.formModel, this.$refs.formEl);

      // this.$refs.formEl?.validateField('menuName', error => {
      //   console.log('validateField', error);
      // });

      this.$refs.formEl?.validate((valid) => {
        if (valid) {
          console.log('success');
        } else {
          console.log('failed');
        }
      });
    }
  }
});
</script>

<style scoped>

</style>
