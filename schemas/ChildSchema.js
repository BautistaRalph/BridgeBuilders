import mongoose from "mongoose";

const ChildSchema = new mongoose.Schema(
  { 
    program: { type: String }, //HC or CBP
    date: { type: Date },
    caseNo: { type: Number }, //unique id
    pangalan: { type: String },
    edad: { type: Number },
    birthday: { type: String }, //petsa ng kapanganakan
    relihiyon: { type: String },
    antasNgPaaralan: { type: String }, //Kasalukuyan/Naabot na Antas ng Paaralan + list
    palayaw: { type: String },
    kasarian: { type: String },
    lugarNgKapanganakan: { type: String }, 
    hulingPaaralangPinasukan: { type: String }, //huling paaralang pinasukan
    tirahan: { type: String }, //area
    allergy: { type: String },   
    vaccine: [
      {
        name: { type: String },
      },
    ],
    initialNaItsura: [
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
    kategorya: { type: String }, //kategoryang kinapapalooban
    magulang: [
      {
        nanay: { type: String },
        tatay: { type: String },
      },
    ],
    kapatid: [
      { id: { type: String }, },
    ],
    yearAdmitted: { type: Number },
    picture: { type: String },
    status: { type: String },
    goalsAchieved: [
      { type: String }
    ]
  },
  { versionKey: false }
);

const Child = mongoose.model("Child", ChildSchema);
export default mongoose.models.Child || Child;
