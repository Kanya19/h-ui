
import Tabs from './src/tabs.vue';
import TabPane from './src/tab-pane.vue';

Tabs.install = function (Vue) {
    Vue.component(Tabs.name, Tabs);
};
TabPane.install = function (Vue) {
    Vue.component(TabPane.name, TabPane);
};

export {
    Tabs,
    TabPane
};
