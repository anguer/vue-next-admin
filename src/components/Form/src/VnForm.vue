<template>
  <el-form v-bind="{ ...$attrs, ...$props }" ref="rawFormEl" class="vna-form" :model="formModel" label-position="top">
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
      default: () => []
    },
    baseColProps: {
      type: Object,
      default: () => {
        return { lg: 12, md: 24 };
      }
    }
  },
  emits: ['submit'],
  data () {
    return {
      formModel: {},
      defaultValues: {},
    };
  },
  computed: {
    getProps () {
      return { ...this.$props };
    },

    getSchemas () {
      return [...this.schemas];
    },

    fields () {
      return this.getSchemas.map(t => t.field).filter(t => !!t);
    }
  },

  watch: {
    getSchemas: {
      handler (schemas) {
        if (schemas?.length) {
          this.formModel = initFormModal(schemas);
          this.defaultValues = initFormModal(schemas);
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

    setFieldsValue (record) {
      this.fields.forEach(field => {
        this.setFormModel(field, record[field]);
      });
    },

    handleReset () {
      this.fields.forEach(field => {
        this.setFormModel(field, this.defaultValues[field]);
      });
      this.$nextTick(() => {
        this.$refs.rawFormEl?.clearValidate(this.fields);
      });
    },

    handleSubmit () {
      // console.log('#handleSubmit', this.formModel, this.$refs.rawFormEl);

      // this.$refs.rawFormEl?.validateField('menuName', error => {
      //   console.log('validateField', error);
      // });

      this.$refs.rawFormEl?.validate((valid) => {
        if (valid) {
          this.$emit('submit', { ...this.formModel });
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
