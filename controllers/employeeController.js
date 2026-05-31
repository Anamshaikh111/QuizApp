let employees=[
    {
      id:1,
      name:"Rahul Sharma",
      email:"rahul@gmail.com",
      address:"Pune",
      contactNumber:"9876543210",
      dateOfBirth:"1998-05-12",
      joiningDate:"2024-01-15",
      department:"IT"
    },
    {
        id:2,
        name:"priya patil",
        email:"priya@gmail.com",
        address:"Mumbai",
        contactNumber:"9999999999",
        dateOfBirth:"1997-08-20",
        joiningDate:"2024-03-10",
        department:"HR"
    }
];

        const getEmployees=(req,res)=>{

          res.json(empolyees);

        };

        const createEmployee=(req,res)=>{

            const employee=req.body;

            employees.push(employee);

            res.json({
                message:"Emplloyee Added",
                data:employee
            });
        }


    const updateEmployee=(req,res)=>{

        const id=Number(req.params.id);

        const index=empolyees.findIndex((e)=>e.id===id);

        employees[idnex]=req.body;

        res.json({
            message:"Employee Updated",
            date:employees[index]
        });

    };
 
    const deleteEmployee=(req,res)=>{

        const id=Number(req.params.id);

        employees=employees.filter((e)=>e.id!==id);

        res.json({
            message:"Employee Deleted"
        });

    };
    
    const getEmployeeByld=(req,res)=>{

        const id=Number(req.params.id);

        const employee=employees.find((e)=>e.id===id);

        res.json(employee);

    };

    const getDepartmentWiseEmployee=(req,res)=>{

        const departmnet= req.quary.department;

        const result= employees.filter(
            (e)=>
                e.department.toLowerCase()===department.toLowerCase()
        );

        res.json(result);

    };

    const getJoiningMonthWiseEmployee=(req,res)=>{

        const month=req.quary.month;

        const result=employees.filter((e)=>{

            const joiningMonths=
            new Date(e.joiningDate).getMonth()+1;

            return joiningMonth==month;

        });

        res.json(result);

    };

    const getThisMonthBirthdayEnployee=(req,res)=>{

        const currentMonth=new Date().getMonth()+1;

        const result=employees.filter((e) =>{

            const birthMonth=

            new Date(e.dateOfBirth).getMonth()+1;

            return birthMonth===currentMonth;

        });

        res.json(result);

    };

    module.export={
        getEmployees,
        createEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployeeByld,
        getDepartmentWiseEmployee,
        getJoiningMonthWiseEmployee,
        getThisMonthBirthdayEnployee
    };