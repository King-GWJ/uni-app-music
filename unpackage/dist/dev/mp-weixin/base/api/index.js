"use strict";
const common_vendor = require("../../common/vendor.js");
const baseUrl = "http://zyxcl.xyz";
const searchApi = (val) => {
  common_vendor.index.request({
    url: baseUrl + "/music_api/search/suggest",
    data: {
      keywords: val
    },
    success: (res) => {
      return res;
    },
    fail: (res) => {
      return res;
    }
  });
};
exports.baseUrl = baseUrl;
exports.searchApi = searchApi;
