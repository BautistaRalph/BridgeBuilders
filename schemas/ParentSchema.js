import mongoose from "mongoose";

const ParentSchema = new mongoose.Schema(
  {
    id: { type: Number },
    pangalan: { type: String },
    palayaw: { type: String },
    kasarian: { type: String }, //male or female
    edad: { type: Number },
    kaarawan: { type: Date }, //petsa ng kapanganakan
    birthplace: { type: String }, //lugar ng kapanganakan
    relihiyon: { type: String },
    edukasyon: { type: String }, //Kasalukuyan/Naabot na Antas ng Paaralan + list
    paaralan: { type: String }, //huling paaralang pinasukan
    tirahan: { type: String }, //kasalukuyang tirahan (current address)
    probinsya: { type: String },
    trabaho: { type: String },
    kita: { type: Number },
    skillTraining: { type: String }, //skill training attended
    skills: { type: String },
    //documents
  },
  { versionKey: false }
);

const Parent = mongoose.model("Parent", ParentSchema);
export default mongoose.models.Parent || Parent;
