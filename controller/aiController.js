const { spawn } = require('child_process');

export const getAiPage = (req, res) => {
	return res.render("ai");
};

export const postAiPage = (req, res) => {
	const { answer } = req.body;

	const result = spawn('python', ['C:/facerecog/face_recognition/examples/ImageHandCatcher.py']);

	result.stdout.on('data', function (data) {
		console.log(data.toString());
	})
	result.stderr.on('data', function (data) {
		console.log(data.toString())
	})

	return res.render("ai");
}

