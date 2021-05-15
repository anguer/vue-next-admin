/**
 * Component list, register here to setting it in the form
 */
import {
  ElInput,
  ElInputNumber,
  // ElSelect,
} from 'element-plus';

import { RadioButtonGroup } from '@/components/RadioButtonGroup';
import { CheckBoxGroup } from '@/components/CheckBoxGroup';
import { Select } from '@/components/Select';

const componentMap = new Map();

componentMap.set('Input', ElInput);
componentMap.set('InputNumber', ElInputNumber);

// componentMap.set('Select', ElSelect);

componentMap.set('RadioButtonGroup', RadioButtonGroup);
componentMap.set('CheckBoxGroup', CheckBoxGroup);
componentMap.set('Select', Select);

export { componentMap };
