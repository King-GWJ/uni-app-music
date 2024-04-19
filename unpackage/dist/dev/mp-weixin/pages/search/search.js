"use strict";
const common_vendor = require("../../common/vendor.js");
const base_api_index = require("../../base/api/index.js");
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const searchVal = common_vendor.ref("");
    const suggestList = common_vendor.ref([]);
    const clear = () => {
      searchVal.value = "";
    };
    let timer = null;
    const search = () => {
      if (timer)
        clearTimeout(timer);
      timer = setTimeout(async () => {
        const res = await base_api_index.searchApi(searchVal.value);
        console.log(res.result.songs);
        suggestList.value = res.result.songs;
      }, 10);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o([($event) => searchVal.value = $event.detail.value, search]),
        b: searchVal.value,
        c: searchVal.value.length > 0
      }, searchVal.value.length > 0 ? {
        d: common_vendor.o(clear)
      } : {}, {
        e: searchVal.value.length > 0
      }, searchVal.value.length > 0 ? {
        f: common_vendor.f(suggestList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "C:/Users/Lenovo/Desktop/前端/wx/uni_2/uni-app-music/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
