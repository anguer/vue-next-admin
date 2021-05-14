/**
 * @author yangyue
 */
function isButton (type) {
  return type === '2';
}
// function isMenu () {}
// function isDir () {}

export const formSchema = [
  {
    field: 'type',
    label: '菜单类型',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '目录', value: '0' },
        { label: '菜单', value: '1' },
        { label: '按钮', value: '2' },
      ],
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'menuName',
    label: '菜单名称',
    placeholder: '菜单名称',
    defaultValue: '',
    component: 'Input',
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
  // {
  //   field: 'orderNo',
  //   label: '排序',
  //   slot: 'order',
  //   defaultValue: 'hello',
  //   rules: [{ required: true, message: '必填项', trigger: 'change' }],
  // },
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
    component: 'Input',
    required: true,
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
