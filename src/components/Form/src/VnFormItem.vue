<script lang="jsx">
import { defineComponent } from 'vue';
import { componentMap } from './componentMap';

function getSlot (slots, slot = 'default', data) {
  // console.log('#getSlot', slots, slot, data);
  if (!slots || !slots[slot]) {
    return null;
  }
  if (typeof slots[slot] !== 'function') {
    console.error(`${slot} is not a function!`, slots[slot]);
    return null;
  }
  const slotFn = slots[slot];
  return slotFn(data);
}

export default defineComponent({
  name: 'VnFormItem',
  props: {
    value: {
      type: [String, Number, Object, Array, Boolean],
      default: ''
    },
    schema: {
      type: Object,
      required: true
    },
    formProps: {
      type: Object,
      required: true
    },
    formModel: {
      type: Object,
      required: true
    },
  },

  emits: ['update:value'],
  computed: {
    inputValue: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('update:value', val);
      }
    },

    getValues () {
      const { formModel, schema } = this.$props;
      return {
        field: schema.field,
        model: formModel,
        values: {
          ...formModel,
        },
        schema,
      };
    },

    getCompProps () {
      const { schema, tableAction, formModel, formActionType } = this.$props;
      const { componentProps = {} } = schema;
      if (typeof componentProps !== 'function') {
        return componentProps;
      }
      return componentProps({ schema, tableAction, formModel, formActionType }) ?? {};
    },

    getShow () {
      const { show, ifShow } = this.schema;

      let isShow = true;
      let isIfShow = true;

      if (typeof show === 'boolean') {
        isShow = show;
      }
      if (typeof ifShow === 'boolean') {
        isIfShow = ifShow;
      }
      if (typeof show === 'function') {
        isShow = show(this.getValues);
      }
      if (typeof ifShow === 'function') {
        isIfShow = ifShow(this.getValues);
      }

      return { isShow, isIfShow };
    },

    getRules () {
      const { rules = [], asyncRules } = this.schema;

      if (typeof asyncRules === 'function') {
        return asyncRules(this.getValues);
      }

      return rules;
    },
  },

  render (ctx) {
    console.log('#render', ctx);
    const self = this;
    const {
      schema,
      getCompProps,
      getShow,
      getRules,
      getValues,
      $slots,
    } = ctx;
    const {
      component,
      field,
      label,
      required,
      colProps = {},
      placeholder,
    } = schema;

    // 布局属性
    const { baseColProps = {} } = ctx.formProps;
    const realColProps = { ...baseColProps, ...colProps };

    function renderComp () {
      const attr = {
        placeholder,
        ...getCompProps,
      };

      const comp = componentMap.get(component);
      if (!comp) {
        console.error('no match component.');
      }

      return (<comp v-model={self.inputValue} { ...attr } />);
    }

    function getContent () {
      const { slot } = schema;

      return slot ? getSlot($slots, slot, getValues) : renderComp();
    }

    const { isIfShow, isShow } = getShow;

    return isIfShow && (
      <el-col { ...realColProps } v-show={isShow}>
        <el-form-item label={label} prop={field} key={field} required={required} rules={getRules}>
          <>{ getContent() }</>
        </el-form-item>
      </el-col>
    );
  }
});
</script>

<style scoped>

</style>
