<template>
  <el-form v-bind="{ ...$attrs, ...$props }" ref="formEl" class="vna-form" :model="formModel" label-position="top">
    <el-row :gutter="20">
      <template v-for="schema in schemas" :key="schema.field">
        <vn-form-item
          :schema="schema"
          :form-props="getProps"
          :form-model="formModel"
          :set-form-model="setFormModel"
        >
          <template v-for="item in Object.keys($slots)" #[item]="data">
            <slot :name="item" v-bind="data"></slot>
          </template>
        </vn-form-item>
      </template>

      <el-col :span="24">
        <el-form-item>
          <el-button @click="handleReset">重置</el-button>
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
      formModel: {}
    };
  },
  computed: {
    getProps () {
      return { ...this.$props };
    },

    getSchemas () {
      return [...this.schemas];
    }
  },

  watch: {
    getSchemas: {
      handler (schemas) {
        if (schemas?.length) {
          this.formModel = initFormModal(schemas);
        }
      },
      immediate: true
    }
  },

  methods: {
    setFormModel (key, value) {
      // console.log('#setFormModel', key, value);
      this.formModel[key] = value;
    },

    handleReset () {
      this.$refs.formEl?.resetFields();
    },

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

<style lang="scss" scoped>
.vna-form.el-form--label-top {
  ::v-deep(.el-form-item__label) {
    padding-bottom: 0;
  }
}
</style>
