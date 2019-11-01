import SlotComponent from "./components/slot.component";
import ContentMain from "./components/content-main";
import SelectComponent from "./components/select.component";

function custom(Vue) {
  if (custom.installed) {
    return;
  }
  Vue.component("SlotComponent", SlotComponent);
  Vue.component("ContentMain", ContentMain);
  Vue.component("SelectComponent", SelectComponent);
}

export default custom;
