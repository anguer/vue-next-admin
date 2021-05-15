/**
 * @author yangyue
 */
import { PRIVILEGE } from '@/enum';

function isButton (type) {
  return type === PRIVILEGE.BUTTON.value;
}
// function isMenu () {}
// function isDir () {}

export const formSchema = [
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
    field: 'menuName',
    label: '菜单名称',
    placeholder: '菜单名称',
    defaultValue: '',
    helpMessage: '这是一个文本提示',
    component: 'Input',
    componentProps: {
      prefixIcon: 'el-icon-menu'
    },
    componentSlot: () => {
      return {
        suffix: () => 'suffix',
      };
    },
    required: true,
  },

  {
    field: 'parentMenu',
    label: '上级菜单',
    component: 'Select',
    componentProps: {
      options: [
        { label: '一级菜单', value: '0' },
        { label: '二级菜单', value: '1' },
        { label: '三级菜单', value: '2' },
      ],
    },
    rules: [{ required: true, message: '必填项', trigger: 'change' }],
  },
  // {
  //   field: 'parentMenu',
  //   label: '上级菜单',
  //   component: 'TreeSelect',
  //   componentProps: {
  //     replaceFields: {
  //       title: 'menuName',
  //       key: 'id',
  //       value: 'id',
  //     },
  //     getPopupContainer: () => document.body,
  //   },
  // },
  //
  {
    field: 'orderNo',
    label: '排序',
    slot: 'order',
    defaultValue: '',
    rules: [{ required: true, message: '必填项', trigger: 'change' }],
  },
  // {
  //   field: 'icon',
  //   label: '图标',
  //   component: 'IconPicker',
  //   required: true,
  //   show: ({ values }) => !isButton(values.type),
  // },
  //
  {
    field: 'routePath',
    label: '路由地址',
    subLabel: '(可选)',
    component: 'Input',
    // required: true,
    show: ({ values }) => !isButton(values.type),
  },
  // {
  //   field: 'component',
  //   label: '组件路径',
  //   component: 'Input',
  //   show: ({ values }) => isMenu(values.type),
  // },
  // {
  //   field: 'permission',
  //   label: '权限标识',
  //   component: 'Input',
  //   show: ({ values }) => !isDir(values.type),
  // },
  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'RadioButtonGroup',
  //   defaultValue: '0',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '0' },
  //       { label: '禁用', value: '1' },
  //     ],
  //   },
  // },
  // {
  //   field: 'isExt',
  //   label: '是否外链',
  //   component: 'RadioButtonGroup',
  //   defaultValue: '0',
  //   componentProps: {
  //     options: [
  //       { label: '否', value: '0' },
  //       { label: '是', value: '1' },
  //     ],
  //   },
  //   show: ({ values }) => !isButton(values.type),
  // },
  //
  // {
  //   field: 'keepalive',
  //   label: '是否缓存',
  //   component: 'RadioButtonGroup',
  //   defaultValue: '0',
  //   componentProps: {
  //     options: [
  //       { label: '否', value: '0' },
  //       { label: '是', value: '1' },
  //     ],
  //   },
  //   show: ({ values }) => isMenu(values.type),
  // },
  //
  // {
  //   field: 'show',
  //   label: '是否显示',
  //   component: 'RadioButtonGroup',
  //   defaultValue: '0',
  //   componentProps: {
  //     options: [
  //       { label: '是', value: '0' },
  //       { label: '否', value: '1' },
  //     ],
  //   },
  //   show: ({ values }) => !isButton(values.type),
  // },
];
