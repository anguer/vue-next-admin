<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <vn-form ref="form" :schemas="schemas" :async-data="asyncData" @submit="handleSubmit">
        <template #parentId="{ model, field }">
          <el-cascader v-model="model[field]" :options="catalogs" :props="{ emitPath: false, label: 'title', value: 'id', checkStrictly: true }" />
        </template>
        <template #path="{ model, field }">
          <el-cascader v-model="model[field]" :options="files" :props="{ emitPath: true, label: 'label', value: 'label' }" />
        </template>

        <template #footer="{ submit, reset }">
          <el-button @click="reset">自定义重置</el-button>
          <el-button type="primary" @click="submit">自定义提交</el-button>
          <el-button type="primary" @click="visible = true">Dialog</el-button>
        </template>
      </vn-form>
    </el-col>
    <el-col :span="18">
      <el-table :data="treeData" row-key="id">
        <el-table-column label="标题" prop="title" />
        <el-table-column label="图标" prop="icon" />
        <el-table-column label="路由地址" prop="url" />
        <el-table-column label="组件路径" prop="path" />
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
  <vn-dialog v-model="visible">
    <div>This is aDialog</div>
  </vn-dialog>
</template>

<script>
import { reactive, ref, computed } from 'vue';
import { toJson, arrayToTree, filesToTree } from '@/helper';
import { v4 as uuidv4 } from 'uuid';
import { getStorage, setStorage, PrivilegeKey } from '@/helper/storage';
import { viewModules } from '@/router';
import { PRIVILEGE } from '@/enum';
import { VnForm } from '@/components/Form';
import { VnDialog } from '@/components/Dialog';
import { formSchema } from './privilege.data';

export default {
  components: { VnForm, VnDialog },
  setup () {
    const form = ref(null);

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
      ...arrayToTree(data?.value.filter(t => t.type !== PRIVILEGE.BUTTON.value && (t.type <= form.value?.values.type)))
    ]);
    const treeData = computed(() => arrayToTree(data?.value));
    // console.log('#catalogs', catalogs);
    const files = ref(filesToTree(viewModules));
    // console.log('#files', filesToTree(viewModules));

    const asyncData = computed(() => {
      return { data };
    });

    const handleRemove = row => {
      data.value = row?.id;
    };

    const schemas = reactive(formSchema);

    const handleSubmit = ({ path = [], ...form }) => {
      console.log('#handleSubmit', path, form);
      data.value = { ...form, path: path.join('/') };
      // form?.value?.reset();
    };

    const handleEdit = ({ path, ...row }) => {
      console.log('#handleEdit', row, path);
      form?.value?.setFieldsValue({ ...row, path: path && path.split('/') });
    };

    const visible = ref(false);

    return {
      treeData,
      catalogs,
      files,

      PRIVILEGE,

      handleEdit,
      handleRemove,

      form,
      schemas,
      handleSubmit,

      visible,
      asyncData,
    };
  },
};
</script>

<style scoped>

</style>
