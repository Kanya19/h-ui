
import Radio from './src/radio.vue';
import RadioGroup from './src/radio-group.vue';

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio);
};
RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};

export {
  Radio,
  RadioGroup
};
