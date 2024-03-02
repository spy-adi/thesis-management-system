const router = require("express").Router();
const path = require("path");

router.get("/:file(*)", (req, res) => {
  try {
    res.status(200).download(path.resolve(`./${req.params.file}`));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
