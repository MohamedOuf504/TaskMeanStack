const dotenv = require("dotenv");
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");
const { connection } = require("./config/db.config");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

 connection.connect((err, res) => {
  if (err) throw err;
  else {
      console.log('db is Connecting')
  }
});

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection", err.message);
  server.close(() => {
    process.exit(1);
  });
});
