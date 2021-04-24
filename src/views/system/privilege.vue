<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-form ref="form" :model="formState" :rules="rules" label-position="left" label-width="auto" label-suffix=":">
        <el-form-item label="" prop="type">
          <el-radio-group v-model="formState.type">
            <el-radio-button :label="1">
              目录
            </el-radio-button>
            <el-radio-button :label="2">
              菜单
            </el-radio-button>
            <el-radio-button :label="3">
              按钮
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item key="parentId" label="上级目录" prop="parentId">
          <el-cascader v-model="formState.parentId" :options="catalogs" :props="{ emitPath: false, label: 'title', value: 'id', checkStrictly: true }" />
        </el-form-item>
        <el-form-item key="title" label="标题" prop="title">
          <el-input v-model="formState.title" />
        </el-form-item>
        <el-form-item key="icon" label="图标" prop="icon">
          <el-input v-model="formState.icon" />
        </el-form-item>
        <el-form-item key="url" label="路由地址" prop="url">
          <el-input v-model="formState.url" />
        </el-form-item>
        <el-form-item key="path" label="文件地址" prop="path">
<!--          <el-input v-model="formState.path" />-->
          <el-cascader v-model="formState.path" :options="files" :props="{ emitPath: false, label: 'label', value: 'label' }" />
        </el-form-item>
        <el-form-item key="hidden" label="是否隐藏" prop="hidden">
          <el-checkbox v-model="formState.hidden" />
        </el-form-item>
        <el-form-item key="footer">
          <el-button @click="handleReset">
            重置
          </el-button>
          <el-button type="primary" @click="handleSubmit">
            确定
          </el-button>
        </el-form-item>
      </el-form>
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

    const catalogs = computed(() => [{ title: '~Root', id: 0 }, ...arrayToTree(data?.value)]);
    const treeData = computed(() => arrayToTree(data?.value));
    // console.log('#catalogs', catalogs);
    const files = ref(filesToTree(viewModules));
    console.log('#files', filesToTree(viewModules));

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

    const handleEdit = row => {
      console.log('#handleEdit', Object.keys(formState));
      Object.keys(formState).forEach(k => (formState[k] = row[k]));
    };

    const handleRemove = row => {
      data.value = row?.id;
    };

    return {
      form,
      formState,
      rules,
      treeData,
      catalogs,
      files,

      handleReset,
      handleSubmit,
      handleEdit,
      handleRemove,
    };
  },
};
</script>

<style scoped>

</style>
