import mongoose from "mongoose";

const StatsSchema = new mongoose.Schema({
  username: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
  },
  goals: {
    General: {
      type: [{
        label: { type: String, required: true },
        valueKey: { type: Number, default: 0 }
      }],
      default: [
        { label: "Clients served today", valueKey: 0 },
        { label: "Total clients served", valueKey: 0 }
      ]
    },
    Goal1: {
      type: [{
        label: { type: String, required: true },
        valueKey: { type: Number, default: 0 }
      }],
      default: [
        { label: "Goal 1 statistic 1", valueKey: 0 },
        { label: "Goal 1 statistic 2", valueKey: 0 }
      ]
    },
    Goal2: {
      type: [{
        label: { type: String, required: true },
        valueKey: { type: Number, default: 0 }
      }],
      default: [
        { label: "Goal 2 statistic 1", valueKey: 0 },
        { label: "Goal 2 statistic 2", valueKey: 0 }
      ]
    },
    Goal3: {
      type: [{
        label: { type: String, required: true },
        valueKey: { type: Number, default: 0 }
      }],
      default: [
        { label: "Goal 3 statistic 1", valueKey: 0 },
        { label: "Goal 3 statistic 2", valueKey: 0 }
      ]
    }
  }
});

export const Stats = mongoose.model("Stats", StatsSchema);
