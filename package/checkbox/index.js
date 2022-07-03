
import Checkbox from './src/checkbox.vue';
import CheckboxGroup from './src/checkbox-group.vue';

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
};
CheckboxGroup.install = function (Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export {
  Checkbox,
  CheckboxGroup
};
