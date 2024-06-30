import mongoose from "mongoose";

const labelSchema = new mongoose.Schema({
  label: { type: String, required: true },
  valueKey: { type: Number, default: 0 }
});

const statsSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  goals: {
    General: { type: [labelSchema], default: [] },
    Goal1: { type: [labelSchema], default: [] },
    Goal2: { type: [labelSchema], default: [] },
    Goal3: { type: [labelSchema], default: [] }
  }
});

export const Stats = mongoose.model("Stats", statsSchema);