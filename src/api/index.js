import * as trade from "./trade";
import * as user from "./user";
import * as componentService from "./component.services";

const apiObj = {
  trade,
  user,
  componentService
};

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiObj;
      }
    }
  });
};
export default {
  install
};
