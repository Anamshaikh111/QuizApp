const express = require("express");

const router = express.Router();

const {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployeeByld,
    getDepartmentWiseEmployee,
    getJoiningMonthWiseEmployee,
    getThisMonthBirthdayEmployee
} = require("../controllers/employeeController")

    router.get("/",getEmployees);
    router.post("/",createEmployee);
    router.patch("/:id",updateEmployee);
    router.delete("/:id",deleteEmployee);
    router.get("/:id",getEmployeeByld);
    router.get("/department/search",getDepartmentWiseEmployee);
    router.get("/joining/month",getJoiningMonthWiseEmployee);
    router.get("/birthday/cuurrent-month",getThisMonthBirthdayEmployee);

    module.exports=router;
