
import RadioGroup from './src/radio-group.vue';
console.log('RadioGroup.name', RadioGroup.name);
RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;
