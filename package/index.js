
import Button from './button/index.js';
import collapseTransition from './collapse-transition/collapse-transition.js';
import Message from './message/index.js';
import Carousel from './carousel/index.js';
import CarouselItem from './carousel-item/index.js';
import Input from './input/index.js';
import Checkbox from './checkbox/index.js';
import Radio from './radio/index.js';
import Select from './select/index.js';
import Option from './option/index.js';


const components = [
  Button,
  collapseTransition,
  Carousel,
  CarouselItem,
  Input,
  Checkbox,
  Radio,
  Select,
  Option,
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  Radio,
  Select,
  Option,
  Input,
  install,
  Button,
  Message,
  collapseTransition,
  Carousel,
  CarouselItem,
}
