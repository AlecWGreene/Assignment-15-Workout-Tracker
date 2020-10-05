module.exports = function(app) {
    app.get("/exercise", (req, res) => {
        res.sendFile("/exercise.html");
    });
    app.get("/index", (req, res) => {
        res.sendFile("/index.html");
    });
    app.get("/stats", (req, res) => {
        res.sendFile("/stats.html");
    });
}