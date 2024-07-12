import mongoose from "mongoose";

const ChildSchema = new mongoose.Schema(
  {
    program: { type: String }, //HC or CBP
    date: { type: Date },
    caseNo: { type: Number }, //unique id
    pangalan: { type: String },
    edad: { type: Number },
    kaarawan: { type: Date }, //petsa ng kapanganakan
    relihiyon: { type: String },
    edukasyon: { type: String }, //Kasalukuyan/Naabot na Antas ng Paaralan + list
    palayaw: { type: String },
    kasarian: { type: String }, //male or female
    birthplace: { type: String }, //lugar ng kapanganakan
    paaralan: { type: String }, //huling paaralang pinasukan
    tirahan: { type: String }, //area
    allergy: { type: String },
    vaccine: [
      {
        name: { type: String },
      },
    ],
    itsura: [
      {
        madumiPunit: { type: Boolean },
        payat: { type: Boolean },
        maguloBuhok: { type: Boolean },
        siraNgipin: { type: Boolean },
        amoy: { type: Boolean },
        sugat: { type: Boolean },
        madumiKuko: { type: Boolean },
        yapak: { type: Boolean },
        iba: { type: Boolean },
      },
    ],
    kk: { type: String }, //kategoryang kinapapalooban
    magulang: [
      {
        nanay: { type: String },
        tatay: { type: String },
      },
    ],
    kapatid: [
      {
        id: { type: String },
      },
    ],
  },
  { versionKey: false }
);

const Child = mongoose.model("Child", ChildSchema);
export default mongoose.models.Child || Child;
