const express = require("express");
const app = express();

app.use("/api/v1/users", require("./api/v1/users"));
app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 3001;
app.listen(port, () =>
   console.log(`server running at http://localhost:${port}`)
);
