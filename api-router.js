const db = require("./models");

module.exports = function(app) {
    
    // GET workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            const returnData = [];
            data.forEach(doc => {
                const tempData = {
                    _id: doc.get("id"),
                    day: doc.get("day"),
                    exercises: doc.exercises,
                    totalDuration: doc.exercises.reduce((total, exercise) => total + exercise.duration, 0)
                }
                returnData.push(tempData);
            });
            res.json(returnData)
        }).catch(err => console.log(`ERROR: ${err.message}`));
    });

    // PUT workouts
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOne({_id: req.params.id}).then(workout => {
            workout.exercises.push(req.body);
            workout.save();
            console.log("Workout added");
            console.log(workout);
        }).catch(err => console.log(err.message));
    });

    // POST workouts
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({
            day: new Date(new Date().getDate()).toISOString(),
            exercises: []
        }).then(entry => res.json(entry)).catch(err => console.log(err.message));;
    });

    // GET range
    app.get(`/api/workouts/range`, (req, res) => {
        db.Workout.find({}).then(data => {
            const returnData = [];
            data.forEach(doc => {
                const tempData = {
                    _id: doc.get("id"),
                    day: doc.get("day"),
                    exercises: doc.exercises,
                    totalDuration: doc.exercises.reduce((total, exercise) => total + exercise.duration, 0)
                }
                returnData.push(tempData);
            });
            res.json(returnData)
        }).catch(err => console.log(`ERROR: ${err.message}`));
    });
}

