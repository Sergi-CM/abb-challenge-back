import { model, Schema } from "mongoose";

export const partSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  features: [
    {
      featureName: String,

      measurements: [
        {
          control: String,
          expected: Number,
          deviation: Number,
          devOutTol: Number,
        },
      ],
    },
  ],
});

export const Part = model("Part", partSchema, "parts");
