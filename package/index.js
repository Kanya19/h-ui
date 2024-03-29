
import Button from './button/index.js';
import collapseTransition from './collapse-transition/collapse-transition.js';
import Message from './message/index.js';
import Carousel from './carousel/index.js';
import CarouselItem from './carousel-item/index.js';
import Input from './input/index.js';
import { Checkbox, CheckboxGroup } from './checkbox/index.js';
import { Radio, RadioGroup } from './radio/index.js';
import Select from './select/index.js';
import Option from './option/index.js';
import Cascader from './cascader/index.js';
import DatePicker from './date-picker/index.js';
import Tooltip from './tooltip/index.js';
import Badge from './badge/index.js';
import { Tabs, TabPane } from './tabs/index.js';


const components = [
  Button,
  collapseTransition,
  Carousel,
  CarouselItem,
  Input,
  Checkbox,
  Radio,
  Select,
  CheckboxGroup,
  Option,
  Cascader,
  RadioGroup,
  DatePicker,
  Tooltip,
  Tabs,
  TabPane,
  Badge
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  Radio,
  RadioGroup,
  Select,
  Option,
  Input,
  install,
  Button,
  Message,
  collapseTransition,
  Carousel,
  CarouselItem,
  Cascader,
}
