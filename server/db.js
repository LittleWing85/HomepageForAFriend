const spicedPg = require("spiced-pg");

let db;
if (!process.env.DATABASE_URL) {
    const { DATABASE_USER, DATABASE_PASSWORD } = require("./secrets.json");
    const DATABASE_NAME = "protobird3d";
    db = spicedPg(
        `postgres:${DATABASE_USER}:${DATABASE_PASSWORD}@localhost:5432/${DATABASE_NAME}`
    );
} else {
    db = spicedPg(process.env.DATABASE_URL);
}

function getAllProjects() {
    return db.query(`SELECT * FROM projects`).then((result) => result.rows);
}

function getProjectDataById(id) {
    return db
        .query(
            `SELECT *
            FROM projects
            WHERE id=$1`,
            [id]
        )
        .then((result) => result.rows[0]);
}

module.exports = {
    getAllProjects,
    getProjectDataById,
};
