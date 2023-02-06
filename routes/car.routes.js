const { Router } = require("express");
const { getCar, PostCar, updateCar, deleteCar, getCarOne } = require("../controllers/car.controller");
const router = Router();

router.route("/").get(getCar).post(PostCar)
router.route("/:id").get(getCarOne).put(updateCar).delete(deleteCar);

module.exports = router;
