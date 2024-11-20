const { model, Schema } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const CatSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Where da name??!"],
      unique: [true, "We already have a cat with that name"],
    },
    age: { type: Number, required: true },
    breed: { type: String },
    color: { type: String },
    image: { type: String },
    adopted: { type: Boolean, required: true, default: false },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.slug_history;
      },
    },
  }
);

CatSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Cat", CatSchema);
