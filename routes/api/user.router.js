const Express = require("express");
const router = Express.Router();

const userController = require("../../controllers/user.controller");
const runValidation = require("../../validators/index.middleware");
const { userValidator } = require("../../validators/user.validators");

router.get(
  "/:identifier",
  userValidators.findUserByIdValidator,
  runValidations,
  UserController.findOneByID
);
