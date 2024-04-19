"use strict";
const base_api_index = require("../../base/api/index.js");
const common_vendor = require("../../common/vendor.js");
console.log(base_api_index.baseUrl);
const _sfc_main = {
  data() {
    return {
      title: "Hello123"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Lenovo/Desktop/前端/wx/uni_2/uni-app-music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
