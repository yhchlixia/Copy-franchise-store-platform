import * as trade from "./trade";

const apiObj = {
  trade
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
