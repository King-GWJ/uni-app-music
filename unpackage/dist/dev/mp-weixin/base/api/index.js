"use strict";
const common_vendor = require("../../common/vendor.js");
const baseUrl = "http://zyxcl.xyz/music_api";
const request = ({ url, method = "GET", data = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      method,
      data: {
        cookie: common_vendor.index.getStorageSync("curCookie") || "",
        ...data
      },
      header,
      withCredentials: true,
      // 跨域请求携带 cookie
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
const searchApi = (val) => {
  return request({ url: "/search/suggest", data: { keywords: val } });
};
exports.searchApi = searchApi;
