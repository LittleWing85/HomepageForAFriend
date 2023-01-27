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
    getProjectDataById(request.params.id).then((result) => {
        response.json(result);
        console.log(Array.isArray(result.gallery_pictures));
        console.log(result.gallery_pictures[0]);
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
