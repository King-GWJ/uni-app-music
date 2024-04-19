"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref([]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "搜索",
          bgColor: "#EEEEEE"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/Lenovo/Desktop/前端/wx/uni_2/uni-app-music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
