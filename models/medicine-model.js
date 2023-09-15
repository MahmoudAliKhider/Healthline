const mongoose = require("mongoose");
const joi = require("joi");
const Schema = mongoose.Schema;

const Medicines = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      _id: false,
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    audio: {
      _id: false,
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: [
      {
        _id: false,
        type: String,
        required: true,
      },
    ],
    weakly: [
      {
        _id: false,
        type: String,
        required: true,
      },
    ],
    lastUpdatedUserID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const medicineSchema = mongoose.model("Medicines", Medicines);

function medicineValidation(medicine) {
  const schema = joi.object({
    name: joi.string().trim().max(255).required(),
    type: joi
      .string()
      .trim()
      .lowercase()
      .valid("pills", "injection", "drink", "other")
      .required(),
    description: joi.string().trim().max(255).required(),
    time: joi.any(),
    weakly: joi.any(),
  });

  return schema.validate(medicine);
}

exports.validate = medicineValidation;
exports.Medicine = medicineSchema;
