const express = require("require");

const app = express();

app.use(express.json());

const employeeRoute = require("./routes/employeeRoutes");

app.use("/embployees", employeeRoute);

app.llisten(5000, () => {
    console.log("Server Running on Port 5000");
});