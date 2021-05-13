/**
 * Component list, register here to setting it in the form
 */
import {
  ElInput,
  ElSelect,
} from 'element-plus';

const componentMap = new Map();

componentMap.set('Input', ElInput);

componentMap.set('Select', ElSelect);

export { componentMap };
