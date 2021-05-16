<script lang="jsx">
import { defineComponent } from 'vue';
import { ElFormItem, ElTooltip } from 'element-plus';
import { componentMap } from './componentMap';
import { upperFirst } from 'lodash-es';

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
    setFormModel: {
      type: Function,
      required: true
    },
    validateField: {
      type: Function,
      required: true
    }
  },

  computed: {
    value () {
      const { formModel, schema } = this.$props;
      return formModel[schema.field];
    },

    getValues () {
      const { formModel, schema, formProps } = this.$props;
      const { asyncData } = formProps;
      return {
        field: schema.field,
        model: formModel,
        values: {
          ...asyncData,
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
        isShow = show({ ...this.getValues });
      }
      if (typeof ifShow === 'function') {
        isIfShow = ifShow({ ...this.getValues });
      }

      return { isShow, isIfShow };
    },

    getRules () {
      const { rules = [], asyncRules, required, field } = this.schema;
      const { isShow } = this.getShow;

      if (typeof asyncRules === 'function') {
        return asyncRules({ ...this.getValues });
      }

      if (!Array.isArray(rules)) {
        console.error(`#${field} rules is not an array`);
      }

      if (!rules.length && required) {
        rules.unshift({ required: isShow, trigger: 'change' });
      }

      return rules;
    },
  },

  watch: {
    value: {
      handler (val) {
        // console.log(`#watch ${this.schema.field} change`, val);
        this.validateField([this.schema.field]);
      },
    }
  },

  render (ctx) {
    // console.log('#render', ctx);
    const {
      schema,
      getCompProps,
      getShow,
      getRules,
      getValues,
      formModel,
      setFormModel,
    } = ctx;

    const renderLabelHelpMessage = () => {
      const { label, helpMessage, helpComponentProps, subLabel } = schema;
      const renderLabel = subLabel
        ? (<span>{label} <span class={'text-secondary'}>{subLabel}</span></span>)
        : (label);
      if (!helpMessage || (Array.isArray(helpMessage) && helpMessage.length === 0)) {
        return renderLabel;
      }
      return (
        <span>
          {renderLabel}
          <ElTooltip placement={'top'} content={helpMessage} {...helpComponentProps}>
            <i class={'el-icon-warning el-icon--right'} />
          </ElTooltip>
        </span>
      );
    };

    const renderComp = () => {
      const { component, componentSlot, placeholder, changeEvent = 'change', field } = schema;
      const propsData = {
        placeholder,
        ...getCompProps,
        field,
        formValues: getValues,
      };

      const eventKey = `on${upperFirst(changeEvent)}`;
      const on = {
        [eventKey]: (e) => {
          // console.log(`#${eventKey}`, e);
          if (getCompProps[eventKey]) {
            getCompProps[eventKey](e);
          }

          const target = e ? e.target : null;

          const value = target ? target.value : e;
          setFormModel(field, value);
        },

        // TODO 待优化 `element input` 组件未处理input事件
        onInput: e => {
          const target = e ? e.target : null;

          const value = target ? target.value : e;
          setFormModel(field, value);
        }
      };

      const bindValue = {
        value: formModel[field],
        modelValue: formModel[field],
      };

      const compAttr = {
        ...propsData,
        ...on,
        ...bindValue,
      };
      // console.log('#compAttr', compAttr, formModel[field]);

      const comp = componentMap.get(component);
      if (!comp) {
        console.error('no match component.');
        return (<></>);
      }

      if (!componentSlot) {
        return (<comp { ...compAttr } />);
      }

      const compSlot = typeof componentSlot === 'function'
        ? { ...componentSlot({ ...getValues }) }
        : { default: () => componentSlot };

      return (<comp { ...compAttr } >{compSlot}</comp>);
    };

    const getContent = () => {
      const { $slots } = ctx;
      const { slot } = schema;

      return slot ? getSlot($slots, slot, { ...getValues }) : renderComp();
    };

    const getColProps = () => {
      const { baseColProps = {} } = ctx.formProps;
      const { colProps = {} } = schema;
      return { ...baseColProps, ...colProps };
    };

    const getItemProps = () => {
      const { field } = schema;
      return {
        prop: field,
        key: field,
        rules: getRules
      };
    };

    const { isIfShow, isShow } = getShow;

    return isIfShow && (
      <el-col { ...getColProps() } v-show={isShow}>
        <ElFormItem { ...getItemProps() } v-slots={{ label: () => renderLabelHelpMessage() }}>
          <>
            { getContent() }
          </>
        </ElFormItem>
      </el-col>
    );
  }
});
</script>

<style scoped>

</style>
