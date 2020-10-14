const db = require("./models");

function addExercise(err, workout){
    if(err){
        console.log(err.message);
    }

    
}

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
        db.Workout.findByIdAndUpdate(req.params.id, ).exec(addExercise);
    });

    // POST workouts
    app.post("/api/workouts", (req, res) => {

    });

    // GET range
    app.get(`/api/workouts/range`, (req, res) => {

    });
}

