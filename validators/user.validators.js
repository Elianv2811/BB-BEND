const { body, param } = require("express-validator");
const validators = {};

validators.findUserByIdValidator = [
  param("identifier")
    .notEmpty()
    .withMessage("El id no debe de ir vacío")
    .isMongoId()
    .withMessage("El id debe de ser un id de Mongo válido"),
];

module.exports = validators;
