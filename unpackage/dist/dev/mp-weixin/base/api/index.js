"use strict";
const common_vendor = require("../../common/vendor.js");
const baseUrl = "http://zyxcl.xyz/music_api";
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
exports.searchApi = searchApi;
