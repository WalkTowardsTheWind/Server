
const BookingManagement = require("../../src/BookingManagement/service");
module.exports = {
  path: "/BookingManagement",
  name: "BookingManagement模块",
  children: [
    {
      path: "/add",
      name: "添加",
      service: BookingManagement["add"],
      params: {
        name: "BookingManagement"
      }
    },
    {
      path: "/all",
      name: "全部列表",
      service: BookingManagement["all"]
    },
     {
       path: "/list",
       name: "列表分页查询",
       service: BookingManagement["list"],
       params: {
         pageNum: "当前页"
       }
     },
       {
       path: "/detail",
       name: "详情",
       service: BookingManagement["detail"],
       params: {
         id: "id"
       }
     },
     {
       path: "/edit",
       name: "修改",
       service: BookingManagement["edit"],
       params: {
         id: "id"
       }
     },
     {
       path: "/del",
       name: "删除",
       service: BookingManagement["del"],
       params: {
         id: "id"
       }
     }
  ]
};
