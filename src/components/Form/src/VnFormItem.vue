<script lang="jsx">
import { defineComponent } from 'vue';
import { componentMap } from './componentMap';

export default defineComponent({
  name: 'VnFormItem',
  props: {
    value: {
      type: [String, Number, Object, Array, Boolean],
      default: 'hello world'
    },
    schema: {
      type: Object,
      required: true
    }
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
    }
  },

  methods: {
    handleInput (e) {
      console.log('#handleInput', e);
      this.inputValue = e;
    }
  },

  render (ctx) {
    const {
      component,
      field,
      label,
    } = ctx.schema;

    const Comp = componentMap.get(component);
    if (!Comp) {
      console.error('no match component.');
    }

    const attr = {
      ...ctx.schema,
    };

    return (
      <el-col lg={24} md={24}>
        <el-form-item label={label} props={field}>
          <Comp v-model={this.inputValue} {...attr} />
        </el-form-item>
      </el-col>
    );
  }
});
</script>

<style scoped>

</style>
