const express = require("express");

// Database
const db = require("./config/database");

db.authenticate()
   .then(() => console.log("Database Connected..."))
   .catch(err => console.log("Error:" + err));

const app = express();

app.get("/", (req, res) =>
   res.json({ msg: "Welcome to the Hostel Booking API... " })
);

// Define Routes
app.use("/api/admin", require("./routes/admin"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/book", require("./routes/book"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
