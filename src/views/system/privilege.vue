<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-form ref="form" :model="formState" :rules="rules" label-position="left" label-width="auto" label-suffix=":">
        <el-form-item label="" prop="type">
          <el-radio-group v-model="formState.type">
            <el-radio-button :label="1">目录</el-radio-button>
            <el-radio-button :label="2">菜单</el-radio-button>
            <el-radio-button :label="3">按钮</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="上级目录" prop="parentId" key="parentId">
          <el-cascader v-model="formState.parentId" :options="catalogs" :props="{ emitPath: false, label: 'title', value: 'id', checkStrictly: true }"></el-cascader>
        </el-form-item>
        <el-form-item label="标题" prop="title" key="title">
          <el-input v-model="formState.title"></el-input>
        </el-form-item>
        <el-form-item label="图标" prop="icon" key="icon">
          <el-input v-model="formState.icon"></el-input>
        </el-form-item>
        <el-form-item label="路由地址" prop="url" key="url">
          <el-input v-model="formState.url"></el-input>
        </el-form-item>
        <el-form-item label="文件地址" prop="path" key="path">
          <el-input v-model="formState.path"></el-input>
        </el-form-item>
        <el-form-item label="是否隐藏" prop="hidden" key="hidden">
          <el-checkbox v-model="formState.hidden"></el-checkbox>
        </el-form-item>
        <el-form-item key="footer">
          <el-button @click="handleReset">重置</el-button>
          <el-button type="primary" @click="handleSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="18">
      <el-table :data="treeData" row-key="id">
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="图标" prop="icon"></el-table-column>
        <el-table-column label="路由地址" prop="url"></el-table-column>
        <el-table-column label="文件地址" prop="path"></el-table-column>
        <el-table-column label="是否隐藏" prop="hidden"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template #default="{row}">
<!--            <el-button type="text" @click="handleEdit(row)">编辑</el-button>-->
<!--            <el-button type="text" @click="handleRemove(row)">删除</el-button>-->
            <el-link type="primary" @click.prevent="handleEdit(row)" :underline="false">编辑</el-link>
            <el-link type="danger" @click.prevent="handleRemove(row)" :underline="false">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { reactive, ref, computed } from 'vue';
import { toJson, arrayToTree } from '@/helper';
import { v5 as uuidv5 } from 'uuid';

export default {
  setup () {
    const form = ref(null);

    const formState = reactive({
      id: 0,
      parentId: 0,
      type: 1,
      title: '',
      icon: '',
      url: '',
      path: '',
      hidden: false,
    });

    const rules = reactive({
      type: [{ required: true, message: '必填字段', trigger: 'blur' }],
      title: [{ required: true, message: '必填字段', trigger: 'blur' }],
      icon: [{ required: true, message: '必填字段', trigger: 'blur' }],
      url: [{ required: true, message: '必填字段', trigger: 'blur' }],
      path: [{ required: true, message: '必填字段', trigger: 'blur' }],
    });

    const _data_ = ref(toJson(localStorage.getItem('__VNA_PRIVILEGE__'), []));
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
          const id = val.id || uuidv5();
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
        localStorage.setItem('__VNA_PRIVILEGE__', JSON.stringify(_data_?.value));
      }
    });

    const catalogs = computed(() => [{ title: '~Root', id: 0 }, ...arrayToTree(data?.value)]);
    const treeData = computed(() => arrayToTree(data?.value));
    // console.log('#catalogs', catalogs);

    const handleReset = () => {
      form?.value?.resetFields();
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
