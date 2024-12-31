const { spawn } = require('child_process');

const detectMigraine = async(req, res) => {
    console.log("Request body: ", req.body);

    const { age, frequency, character, nausea, phonophobia, visual, dysphasia, vertigo, hypoacusis, defect, conscience, DPF, paresthesia, ataxia, diplopia, tinnitus, dysarthria, sensory, vomit, intensity, location, duration, photophobia } = req.body;

    if ( !age || !frequency || !character || !nausea || !phonophobia || !visual || !dysphasia || !vertigo || !hypoacusis || !defect || !conscience || !DPF || !paresthesia || !ataxia || !diplopia || !tinnitus || !dysarthria || !sensory || !vomit || !intensity || !location || !duration || !photophobia) return res.status(400).json({ 'message': 'All fields are to be filled. '});

    try {
        const userInput = req.body;
        console.log("userInput received.");
        console.log(typeof(userInput));

        var result = [];
        for (var i in userInput) {
            result.push(userInput[i]);
        }

        console.log(result);
        const pythonProcess = spawn("python", ["main.py", ...result]);

        pythonProcess.stdout.on("data", (data) => {
            const prediction = data.toString().trim();
            console.log("prediction made.");
            console.log(prediction);
            res.json({ prediction });
        }); 

        pythonProcess.stderr.on("data", (data) => {
            console.error("Error:", data.toString());
            res.status(500).send("Prediction error.");
        })
    } catch (error) {
        console.error(error);
    } 

}

module.exports = { detectMigraine }