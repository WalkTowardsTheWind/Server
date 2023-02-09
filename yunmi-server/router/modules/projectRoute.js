const project = require("../../src/project/service");
module.exports = {
  path: "/project",
  name: "project模块",
  children: [
    {
      path: "/add",
      name: "添加",
      service: project["add"],
      params: {
        projectName: "projectName",
        projectCode: "projectCode",
        projectState: "projectState",
        Department: "Department",
        doctorName: "doctorName",
        
      },
    },
    {
      path: "/all",
      name: "全部列表",
      service: project["all"],
    },
    {
      path: "/list",
      name: "列表分页查询",
      service: project["list"],
      params: {
        pageNum: "当前页",
      },
    },
    {
      path: "/detail",
      name: "详情",
      service: project["detail"],
      params: {
        id: "id",
      },
    },
    {
      path: "/edit",
      name: "修改",
      service: project["edit"],
      params: {
        id: "id",
      },
    },
    {
      path: "/changeStatus",
      name: "修改项目状态",
      service: project["changeStatus"],
      params: {
        id: "id",
        projectState: '状态: 01表示上架,02表示下架'
      }
    },
    {
      path: "/del",
      name: "删除",
      service: project["del"],
      params: {
        id: "id",
      },
    },
  ],
};
