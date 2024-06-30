import PangunahingImpormasyon from "@/components/intakeForm/Form1";
import PamilyaProblema from "@/components/intakeForm/Form2";
import Nanay from "@/components/intakeForm/Form3";
import Tatay from "@/components/intakeForm/Form4";
import Kapatid from "@/components/intakeForm/Form5";
import Dokumento from "@/components/intakeForm/Form6";
import IbangImpormasyon from "@/components/intakeForm/Form7";
import Appbar from "@/components/ui/Appbar";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const initialUser = {
  caseNo: 8591273056712,
  pangalan: "Darryl Javier",
  program: "Community Based Program",
  palayaw: "Darealtube",
  edad: "18-24",
  kasarian: "Lalaki",
  birthday: "September 6, 2004",
  yearAdmitted: "2018",
  relihiyon: "Christian",
  antas: null,
  lugarNgKapanganakan: "",
  hulingPaaralan: "",
  tirahan: "",
  allergies: [],
  vaccines: [],
  kategorya: "",
  initialItsura: [],
  problema: [],
  nanay: [
    {
      pangalan: "",
      palayaw: "",
      kasarian: "",
      edad: "",
      birthday: "",
      antas: "",
      tirahan: "",
      lugarNgKapanganakan: "",
      hulingPaaralan: "",
      probinsya: "",
      trabaho: "",
      kita: "",
      skillsTraining: [],
      skills: [],
      dokumento: [],
    },
  ],
  tatay: [
    {
      pangalan: "",
      palayaw: "",
      kasarian: "",
      edad: "",
      birthday: "",
      antas: "",
      tirahan: "",
      lugarNgKapanganakan: "",
      hulingPaaralan: "",
      probinsya: "",
      trabaho: "",
      kita: "",
      skillsTraining: [],
      skills: [],
      dokumento: [],
    },
  ],
  kapatid: [
    {
      kapatidIndex: 1,
      pangalan: "",
      palayaw: "",
      kasarian: "",
      edad: "",
      trabaho: "",
      kita: "",
      antas: null,
      dokumento: [],
    },
  ],
  dokumento: [],
  formIntake: "",
  schoolCount: "",
  baon: 0,
  baonExpense: "",
  extracurriculars: [],
  eatBeforeSchool: false,
  attendedALS: false,
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

          <button className="flex items-center justify-center p-4 bg-bb-violet text-bb-white w-full rounded-lg transition-colors duration-200 hover:bg-bb-white hover:text-bb-violet">
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
                  {index === 0 && <PangunahingImpormasyon />}
                  {index === 1 && <PamilyaProblema />}
                  {index === 2 && <Nanay />}
                  {index === 3 && <Tatay />}
                  {index === 4 && (
                    <Kapatid
                      childData={childData}
                      setChildData={setChildData}
                    />
                  )}
                  {index === 5 && <Dokumento />}
                  {index === 6 && <IbangImpormasyon />}
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
