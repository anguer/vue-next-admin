<template>
  <el-form v-bind="{ ...$attrs, ...$props }" ref="rawFormEl" class="vna-form" :model="formModel" label-position="top">
    <el-row :gutter="20">
      <template v-for="schema in getSchemas" :key="schema.field">
        <vn-form-item
          :schema="schema"
          :form-props="getProps"
          :form-model="formModel"
          :set-form-model="setFormModel"
          :validate-field="validateField"
        >
          <template v-for="item in Object.keys($slots)" #[item]="data">
            <slot :name="item" v-bind="data"></slot>
          </template>
        </vn-form-item>
      </template>

      <el-col :span="24">
        <el-divider></el-divider>
        <el-form-item>
          <template v-if="!$slots.footer">
            <el-button @click="reset">重置</el-button>
            <el-button type="primary" @click="submit">提交</el-button>
          </template>
          <template v-else>
            <slot name="footer" v-bind="{ submit, reset }" />
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { defineComponent } from 'vue';
import { ElForm, ElFormItem, ElDivider } from 'element-plus';
import VnFormItem from './VnFormItem.vue';

function initFormModel (schemas = []) {
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

const defaultSchema = {
  field: undefined,
  label: undefined,
  subLabel: undefined,
  changeEvent: undefined,
  defaultValue: undefined,
  placeholder: undefined,
  slot: undefined,
  colProps: undefined,
  component: undefined,
  componentProps: undefined,
  componentSlot: undefined,
  helpMessage: undefined,
  helpComponentProps: undefined,
  required: false,
  ifShow: undefined,
  show: undefined,
  rules: undefined,
  asyncRules: undefined,
};

export default defineComponent({
  name: 'VnForm',
  components: { ElForm, ElFormItem, ElDivider, VnFormItem },
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
    },
    asyncData: {
      type: Object,
      default: () => {}
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
      return [...this.schemas.map(t => Object.assign({}, defaultSchema, t))];
    },

    fields () {
      return this.getSchemas.map(t => t.field).filter(t => !!t);
    },

    values: {
      get () {
        return { ...this.formModel };
      }
    }
  },

  watch: {
    getSchemas: {
      handler (val) {
        if (val?.length) {
          const model = initFormModel(val);
          this.formModel = model;
          this.defaultValues = { ...model };
        }
      },
      immediate: true
    },
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

    validateField (fields = []) {
      this.$refs.rawFormEl?.validateField(fields);
    },

    reset () {
      this.fields.forEach(field => {
        this.setFormModel(field, this.defaultValues[field]);
      });
      this.$nextTick(() => {
        this.$refs.rawFormEl?.clearValidate(this.fields);
      });
    },

    submit () {
      // console.log('#submit', this.formModel, this.$refs.rawFormEl);

      // this.$refs.rawFormEl?.validateField('menuName', error => {
      //   console.log('validateField', error);
      // });

      this.$refs.rawFormEl?.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.values);
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
