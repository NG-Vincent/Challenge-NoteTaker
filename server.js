const express = require("express");
const apiRoutes = require("./routes/api.js");
const htmlRoutes = require("./routes/html.js");

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// static files folder
app.use(express.static("public"));
// routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
   console.log(`API server now on port ${PORT}!`);
});
