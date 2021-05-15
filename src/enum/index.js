import Enum from './enum';

export const PRIVILEGE = new Enum({
  DIRECTORY: [1, '目录'],
  MENU: [2, '菜单'],
  BUTTON: [3, '按钮'],
});

// export const FORM = new Enum({ key: 'Input', value: 1, label: '输入框' }, { value: 2, label: '选择框' });

console.log('#PRIVILEGE', PRIVILEGE);
