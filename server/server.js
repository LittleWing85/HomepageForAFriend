const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const { getAllProjects, getProjectDataById } = require("./db");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/api/allProjects", async (request, response) => {
    const allProjects = await getAllProjects();
    response.json(allProjects);
});
app.get("/api/project/:id", (request, response) => {
    getProjectDataById(request.params.id).then((result) =>
        response.json(result)
    );
    /* .then((data) => console.log(data)); */
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
