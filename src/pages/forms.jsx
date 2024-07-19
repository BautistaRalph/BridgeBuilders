import PangunahingImpormasyon from "@/components/intakeForm/Form1";
import PamilyaProblema from "@/components/intakeForm/Form2";
import Nanay from "@/components/intakeForm/Form3";
import Tatay from "@/components/intakeForm/Form4";
import Kapatid from "@/components/intakeForm/Form5";
import Dokumento from "@/components/intakeForm/Form6";
import IbangImpormasyon from "@/components/intakeForm/Form7";
import Appbar from "@/components/ui/Appbar";
import { PanelTop } from "lucide-react";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import axios from "../axiosInstance.js";
const initialUser = {
  caseNo: 1,
  pangalan: "",
  program: "",
  palayaw: "",
  edad: "",
  kasarian: "",
  birthday: "",
  yearAdmitted: "",
  relihiyon: "",
  antas: "",
  lugarNgKapanganakan: "",
  problema: [],
  hulingPaaralan: "",
  tirahan: "",
  allergies: [],
  vaccines: [],
  kategorya: {
    pangalan: "",
    ngo: "",
    lgu: "",
  },
  initialItsura: [],
  problema: [],
  nanay: {
    pangalan: "",
    palayaw: "",
    kasarian: "",
    edad: "",
    birthday: "",
    lugarNgKapanganakan: "",
    relihiyon:"",
    edukasyon: "",
    hulingPaaralan: "",
    tirahan: "",
    probinsya: "",
    trabaho: "",
    kita: "",
    skillTraining: "",
    skills: "",
    dokumento: [],
  },
  tatay: {
    pangalan: "",
    palayaw: "",
    kasarian: "",
    edad: "",
    birthday: "",
    lugarNgKapanganakan: "",
    relihiyon:"",
    edukasyon: "",
    hulingPaaralan: "",
    tirahan: "",
    probinsya: "",
    trabaho: "",
    kita: "",
    skillTraining: "",
    skills: "",
    dokumento: [],
  },
  kapatid: [],
  dokumento: [],
  formIntake: "",
  schoolCount: 0,
  baon: 0,
  baonExpense: "",
  extracurriculars: "",
  familyIllnesses: [],
  familyPlanning: "",
  waterSource: "",
  laundryPlace: "",
  crPlace: "",
  eatPerDay: 0,
  showerPerDay: 0,
  ipon: false,
  utang:false,
  dswd:false,
  eatBeforeSchool: false,
  attendedALS: false,
  healthCenterCheckup: false,
  goalsAchieved: ["Tutorial", "Assignment Help", "WASH", "Health Assistance"],
};

const sections = [
  "Pangunahing Impormasyon",
  "Problemang Inihain ng Pamilya",
  "Nanay",
  "Tatay",
  "Kapatid",
  "Dokumento/Requirements",
  "Ibang Impormasyon",
];

const Forms = () => {
  const [childData, setChildData] = useState(initialUser);
  const [sectionActive, setSectionActive] = useState("s1");

  const navigateSection = (event) => {
    const targetDiv = event.currentTarget.id.split("-")[0];
    const targetElement = document.getElementById(targetDiv);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleParent = async (parent) =>{
    try{
      console.log("this is parent :",parent);
      const id =  1;
      const parents = parent;
      const response = await axios.post("/api/intakeParent",{
        id: id, // EDIT
        pangalan: parents.pangalan,
        palayaw: parents.palayaw,
        kasarian: parents.kasarian,
        edad: parents.edad,
        birthday: parents.birthday,
        lugarNgKapanganakan: parents.lugarNgKapanganakan,
        relihiyon: parents.relihiyon,
        edukasyon: parents.edukasyon,
        hulingPaaralan: parents.hulingPaaralan,
        tirahan:parents.tirahan,
        probinsya:parents.probinsya,
        trabaho: parents.trabaho,
        kita: parents.kita,
        skillTraining: parents.skillTraining,
        skills: parents.skills,
        dokumento : parents.dokumento
      });
      console.log(response.data);
      alert("Parent created successfully");
    }catch(error){
      console.error("Error signing up:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        alert(
          `Error adding parent: ${
            error.response.data.error || error.response.data.message
          }`
        );
      } else if (error.request) {
        console.error("Error request data:", error.request);
        alert("Error adding parent: No response from server");
      } else {
        console.error("Error message:", error.message);
        alert(`Error adding parent: ${error.message}`);
      }
    }
  }; 

  const handlePangunahingImpormasyon = async (child) => {
    try{
      
      const id =  1;
      const childInfo = { 
        program: child.program, // program input status missing
        date: new Date().toLocaleDateString(),
        caseNo: child.caseNo, // no input for case number yet
        pangalan: child.pangalan,
        edad: child.edad,
        birthday: child.birthday,
        relihiyon: child.relihiyon,
        antasNgPaaralan: child.antas,
        palayaw: child.palayaw,
        kasarian: child.kasarian,
        problema: child.problema,
        lugarNgKapanganakan: child.lugarNgKapanganakan, 
        hulingPaaralangPinasukan: child.hulingPaaralan,
        tirahan: child.tirahan, 
        allergy: child.allergies,   
        vaccine: child.vaccines,
        initialNaItsura: child.initialItsura,
        kategorya: child.kategorya,
        dokumento: child.dokumento,
        magulang: [
          {
            nanay: child.nanay.pangalan,
            tatay: child.tatay.pangalan,
          },
        ],
        kapatid: child.kapatid, // not sure how to implement the id array, kindly change accordingly
        yearAdmitted: new Date().getFullYear(),
        picture: null, // initially 
        status: "", //unknown value
        goalsAchieved: child.goalsAchieved};

        console.log("this is child info :",childInfo);

      const response = await axios.post("/api/intakeChild",{
        childInfo
      });
      console.log(response.data);
      alert("Child created successfully");
    }catch(error){
      console.error("Error Child created:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        alert(
          `Error adding child: ${
            error.response.data.error || error.response.data.message
          }`
        );
      } else if (error.request) {
        console.error("Error request data:", error.request);
        alert("Error adding child: No response from server");
      } else {
        console.error("Error message:", error.message);
        alert(`Error adding child: ${error.message}`);
      }
    }
  };

  const handleIbangImpormasyon = async (family) => {
    try{
      
      const id =  1;
      const familyInfo = {
        bata: [
          {
            caseNo: family.caseNo,
          },
        ],
        //education
        ilanNagaaral: family.schoolCount,
        ilanBaon: family.baon,
        saanGastosBaon: family.baonExpense,
        schoolActivity: family.extracurriculars,
        kainPasok: family.eatBeforeSchool, 
        alsAttend: family.attendedALS,
        //health
        checkup: family.healthCenterCheckup,
        familyPlanningMethod: family.familyPlanning,
        saanTubig: family.waterSource,
        saanLaba: family.laundryPlace,
        saanCR: family.crPlace,
        sakit: family.familyIllnesses,
        ilanKain: family.eatPerDay, 
        ilanLigo: family.showerPerDay,
        //socio-economic
        ipon: family.ipon,
        utang: family.utang, 
        dswd: family.dswd,
        gastosKita: [
          {
            //multiple input
            name: "", // missing
          },
        ],
        tirahan: family.tirahan, //list of options
        reason:"",
      };

        console.log("this is family info :",familyInfo);

      const response = await axios.post("/api/intakeFamilyInfo",{
        otherInfo
      });
      console.log(response.data);
      alert("family info created successfully");
    }catch(error){
      console.error("Error family info:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        alert(
          `Error adding family info: ${
            error.response.data.error || error.response.data.message
          }`
        );
      } else if (error.request) {
        console.error("Error request data:", error.request);
        alert("Error adding family info: No response from server");
      } else {
        console.error("Error message:", error.message);
        alert(`Error adding family info: ${error.message}`);
      }
    }
  };

  const handleIntakeForm = async () => {
    if(true){ // check for invalid inputs handling not yet implemented
      handlePangunahingImpormasyon(childData);
      handleParent(childData.nanay);
      handleParent(childData.tatay);
      handleIbangImpormasyon(childData);
    }else{

    }
  };
  console.log(childData);

  return (
    <>
      <Appbar />
      <div className="flex h-[calc(100vh-7rem)]">
        <div className="md:w-1/3 lg:w-1/4 bg-bb-purple p-4 space-y-8 overflow-auto">
          <h1 className="text-6xl mb-16">Intake Form</h1>

          {sections.map((section, index) => (
            <div
              key={section}
              id={`s${index + 1}-nav`}
              className={`transition-colors duration-200 cursor-pointer flex items-center p-4 rounded-lg ${
                sectionActive === `s${index + 1}`
                  ? "bg-bb-violet text-bb-white"
                  : "bg-bb-white text-bb-violet"
              }`}
              onClick={navigateSection}
            >
              <h2 className="text-2xl">{section}</h2>
            </div>
          ))}

          <button className="flex items-center justify-center p-4 bg-bb-violet text-bb-white w-full rounded-lg transition-colors duration-200 hover:bg-bb-white hover:text-bb-violet"
            onClick={handleIntakeForm}>
            <span className="material-symbols-outlined text-3xl mr-2">
              save_as
            </span>
            <h1 className="text-2xl">Save</h1>
          </button>
        </div>

        <div className="flex-grow p-8 overflow-y-auto text-bb-violet">
          {sections.map((sectionTitle, index) => (
            <Waypoint
              key={index}
              onEnter={() => setSectionActive(`s${index + 1}`)}
              topOffset={"25%"}
              bottomOffset={"25%"}
            >
              <div
                id={`s${index + 1}`}
                className="mb-32 max-h-screen overflow-auto"
              >
                <h1 className="text-4xl mb-4">{sectionTitle}</h1>
                <div className="mt-4 space-y-4">
                  {index === 0 && (
                    <PangunahingImpormasyon
                      childData={childData}
                      setChildData={setChildData}
                    />
                  )}
                  {index === 1 && (
                    <PamilyaProblema
                      childData={childData}
                      setChildData={setChildData}
                    />
                  )}
                  {index === 2 && (
                    <Nanay childData={childData} setChildData={setChildData} />
                  )}
                  {index === 3 && (
                    <Tatay childData={childData} setChildData={setChildData} />
                  )}
                  {index === 4 && (
                    <Kapatid
                      childData={childData}
                      setChildData={setChildData}
                    />
                  )}
                  {index === 5 && (
                    <Dokumento
                      childData={childData}
                      setChildData={setChildData}
                    />
                  )}
                  {index === 6 && (
                    <IbangImpormasyon
                      childData={childData}
                      setChildData={setChildData}
                    />
                  )}
                </div>
              </div>
            </Waypoint>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forms;