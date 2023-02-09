const patient = require("../../src/patient/service");
module.exports = {
  path: "/patient",
  name: "patient模块",
  children: [
    {
      path: "/add",
      name: "添加",
      service: patient["add"],
      params: {
        diagnosis: "diagnosis",
        NumberOfTreatments: "NumberOfTreatments",
        TreatmentNo: "TreatmentNo",
        patientName: "patientName",
        patientAge: "patientAge",
        InfectiousIndex:"InfectiousIndex",
        timeOfAppointment: "timeOfAppointment",
        
      },
    },
    {
      path: "/all",
      name: "全部列表",
      service: patient["all"],
    },
    {
      path: "/list",
      name: "列表分页查询",
      service: patient["list"],
      params: {
        pageNum: "当前页",
      },
    },
    {
      path: "/detail",
      name: "详情",
      service: patient["detail"],
      params: {
        id: "id",
      },
    },
    {
      path: "/edit",
      name: "修改",
      service: patient["edit"],
      params: {
        id: "id",
      },
    },
    {
      path: "/changeTimeOfAppointment",
      name: "修改预约时间",
      service: patient["changeTimeOfAppointment"],
      params: {
        id: "id",
        timeOfAppointment: '预约时间'
      }
    },
    {
      path: "/del",
      name: "删除",
      service: patient["del"],
      params: {
        id: "id",
      },
    },
  ],
};
