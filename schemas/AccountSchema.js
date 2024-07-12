import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema(
  {
    username: { type: String },
    password: { type: String },
    userType: { type: String }, //superUser, homeCare, community
  },
  { versionKey: false }
);

const Account = mongoose.model("Account", AccountSchema);
export default mongoose.models.Account || Account;
