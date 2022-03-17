const { spawn } = require('child_process');

export const getAiPage = (req, res) => {
	return res.render("ai");
};

export const postAiPage = (req, res) => {
	const { answer } = req.body;

	return res.render("ai");
}

