<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <vn-form ref="vnform" :schemas="schemas" @submit="handleSubmit2">
        <template #path="{ model, field }">
          <el-cascader v-model="model[field]" :options="files" :props="{ emitPath: false, label: 'label', value: 'label' }" />
        </template>
        <template #parentId="{ model, field }">
          <el-cascader v-model="model[field]" :options="catalogs" :props="{ emitPath: false, label: 'title', value: 'id', checkStrictly: true }" />
        </template>
      </vn-form>
    </el-col>
    <el-col :span="18">
      <el-table :data="treeData" row-key="id">
        <el-table-column label="标题" prop="title" />
        <el-table-column label="图标" prop="icon" />
        <el-table-column label="路由地址" prop="url" />
        <el-table-column label="文件地址" prop="path" />
        <el-table-column label="是否隐藏" prop="hidden" />
        <el-table-column fixed="right" label="操作" width="100">
          <template #default="{row}">
            <!--            <el-button type="text" @click="handleEdit(row)">编辑</el-button>-->
            <!--            <el-button type="text" @click="handleRemove(row)">删除</el-button>-->
            <el-link type="primary" :underline="false" @click.prevent="handleEdit(row)">
              编辑
            </el-link>
            <el-link type="danger" :underline="false" @click.prevent="handleRemove(row)">
              删除
            </el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { reactive, ref, computed } from 'vue';
import { toJson, arrayToTree, filesToTree } from '@/helper';
import { v4 as uuidv4 } from 'uuid';
import { getStorage, setStorage, PrivilegeKey } from '@/helper/storage';
import { viewModules } from '@/router';
import { PRIVILEGE } from '@/enum';
import { VnForm } from '@/components/Form';
import { formSchema } from './privilege.data';

const defaultSchema = () => {
  return {
    id: null,
    parentId: 0,
    type: 1,
    title: '',
    icon: '',
    url: '',
    path: '',
    hidden: false,
  };
};

export default {
  components: { VnForm },
  setup () {
    const form = ref(null);

    const formState = reactive(defaultSchema());

    const rules = reactive({
      type: [{ required: true, message: '必填字段', trigger: 'change' }],
      title: [{ required: true, message: '必填字段', trigger: 'change' }],
      icon: [{ required: true, message: '必填字段', trigger: 'change' }],
      url: [{ required: true, message: '必填字段', trigger: 'change' }],
      path: [{ required: true, message: '必填字段', trigger: 'change' }],
    });

    const _data_ = ref(toJson(getStorage(PrivilegeKey), []));
    const data = computed({
      get () {
        return _data_.value;
      },
      set (val) {
        // [[[ create mock data
        if (typeof val !== 'object') {
          const id = val;
          const index = _data_?.value.findIndex(t => id === t.id);
          _data_?.value.splice(index, 1);
        } else {
          const id = val.id || uuidv4();
          const index = _data_?.value.findIndex(t => id === t.id);
          const parentId = val.parentId || 0;
          // console.log('#set', index, val.id, id);
          if (index !== -1) {
            _data_?.value.splice(index, 1, { ...val, id, parentId });
          } else {
            _data_?.value.push({ ...val, id, parentId });
          }
        }
        // ]]]
        setStorage(PrivilegeKey, JSON.stringify(_data_?.value));
      }
    });

    const catalogs = computed(() => [
      { title: '~Root', id: 0 },
      ...arrayToTree(data?.value.filter(t => t.type !== PRIVILEGE.BUTTON.value && (t.type <= formState.type)))
    ]);
    const treeData = computed(() => arrayToTree(data?.value));
    // console.log('#catalogs', catalogs);
    const files = ref(filesToTree(viewModules));
    // console.log('#files', filesToTree(viewModules));

    const handleReset = () => {
      form?.value?.resetFields();
      const schema = defaultSchema();
      Object.keys(formState).forEach(k => (formState[k] = schema[k]));
      console.log('#handleReset', formState);
    };

    const handleSubmit = () => {
      console.log('#handleSubmit', formState);
      form?.value?.validate(valid => {
        if (valid) {
          // data?.value?.push({ ...formState });
          data.value = { ...formState };
          handleReset();
        } else {
          console.log('error submit!!');
        }
      });
    };

    const handleRemove = row => {
      data.value = row?.id;
    };

    const vnform = ref(null);
    const schemas = reactive(formSchema);

    const handleSubmit2 = (form) => {
      console.log('#handleSubmit2', form);
      data.value = { ...form };
      // vnform?.value?.reset();
    };

    const handleEdit = row => {
      console.log('#handleEdit', Object.keys(formState));
      // Object.keys(formState).forEach(k => (formState[k] = row[k]));
      vnform?.value?.setFieldsValue(row);
    };

    return {
      form,
      formState,
      rules,
      treeData,
      catalogs,
      files,

      PRIVILEGE,

      handleReset,
      handleSubmit,
      handleEdit,
      handleRemove,

      vnform,
      schemas,
      handleSubmit2,
    };
  },
};
</script>

<style scoped>

</style>
