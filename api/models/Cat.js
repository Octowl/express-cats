const { model, Schema } = require("mongoose");

const CatSchema = new Schema(
  {
    name: { type: String, required: [true, "Where da name??!"] },
    age: { type: Number, required: true },
    breed: { type: String },
    color: { type: String },
    adopted: { type: Boolean, required: true, default: false },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

module.exports = model("Cat", CatSchema);
