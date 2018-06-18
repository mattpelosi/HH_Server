const router = require("express").Router()
const colorController = require("./color.controller")

module.exports = router

router.get("/scrape-colors", colorController.colorScraper);
router.get("/colors", colorController.read);
router.get("/return-array", colorController.returnArray);