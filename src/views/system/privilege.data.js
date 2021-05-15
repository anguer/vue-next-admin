/**
 * @author yangyue
 */
import { PRIVILEGE } from '@/enum';

export const formSchema = [
  {
    field: 'id',
    ifShow: false,
  },
  {
    field: 'type',
    label: '菜单类型',
    component: 'RadioButtonGroup',
    defaultValue: PRIVILEGE.DIRECTORY.value,
    componentProps: {
      options: PRIVILEGE.flatValues,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'parentId',
    label: '上级目录',
    placeholder: '上级目录',
    slot: 'parentId',
    required: true,
  },
  {
    field: 'title',
    label: '菜单名称',
    placeholder: '菜单名称',
    defaultValue: '',
    component: 'Input',
    required: true,
  },
  {
    field: 'icon',
    label: '图标',
    placeholder: '图标',
    defaultValue: '',
    component: 'Input',
    componentProps: {
      prefixIcon: 'el-icon-menu'
    },
    required: true,
  },
  {
    field: 'url',
    label: '路由地址',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => PRIVILEGE.BUTTON.value !== values.type,
  },
  {
    field: 'path',
    label: '组件路径',
    // component: 'Input',
    slot: 'path',
    required: true,
    ifShow: ({ values }) => PRIVILEGE.MENU.value === values.type,
  },
  {
    field: 'hidden',
    label: '是否隐藏',
    component: 'RadioButtonGroup',
    defaultValue: false,
    componentProps: {
      options: [
        { label: '否', value: false },
        { label: '是', value: true },
      ],
    },
    ifShow: ({ values }) => PRIVILEGE.BUTTON.value !== values.type,
  },
  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    componentProps: {
      controlsPosition: 'right'
    },
    defaultValue: 0,
    rules: [{ required: true, message: '必填项', trigger: 'change' }],
  },
];
