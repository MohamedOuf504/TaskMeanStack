const mysql = require("mysql2");
exports.connection = mysql.createConnection({
    host: "localhost",
    database: "products",
    user: "root",
    password: "admin",
});

