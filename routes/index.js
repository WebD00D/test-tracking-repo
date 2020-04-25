const path = require("path");
const router = require("express").Router();
const classRoutes = require("./classRoutes");

router.use("/", loginRoutes)
router.use("/dashboard", classRoutes);

// // If no API routes are hit, send the React app
router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
