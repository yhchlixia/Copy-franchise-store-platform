import HelloWorld from "./components/HelloWorld";
import Computed from "./components/computed";
import TextInput from "./components/text";
import SlotComponent from "./components/slot.component";
import Header from "./components/header.component";
import Aside from "./components/aside-left";
import ContentMain from "./components/content-main";
import TableButton from "./components/table-button";
import SelectComponent from "./components/select.component";

function custom(Vue) {
  if (custom.installed) {
    return;
  }
  Vue.component("HelloWorld", HelloWorld);
  Vue.component("Computed", Computed);
  Vue.component("TextInput", TextInput);
  Vue.component("SlotComponent", SlotComponent);
  Vue.component("Header", Header);
  Vue.component("Aside", Aside);
  Vue.component("ContentMain", ContentMain);
  Vue.component("TableButton", TableButton);
  Vue.component("SelectComponent", SelectComponent);
}

export default custom;
