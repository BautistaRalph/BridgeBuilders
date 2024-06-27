import Appbar from "@/components/ui/Appbar";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

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
  const [sectionActive, setSectionActive] = useState("s1");
  const [showNGOandLGU, setShowNGOandLGU] = useState(false);

  const navigateSection = (event) => {
    const targetDiv = event.currentTarget.id.split("-")[0];
    const targetElement = document.getElementById(targetDiv);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isReferral = (event) => {
    setShowNGOandLGU(event.target.checked);
  };

  return (
    <>
      <Appbar />
      <div className="flex h-[calc(100vh-7rem)]">
        <div className="md:w-1/3 lg:w-1/4 bg-bb-purple p-4 space-y-8">
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
              bottomOffset={"50%"}
            >
              <div
                id={`s${index + 1}`}
                className="mb-48"
              >
                <h1 className="text-4xl mb-4">{sectionTitle}</h1>
                <div className="mt-4 space-y-4">
                  {/* Pangunahing Impormasyon */}
                  {index === 0 && (
                    <>
                      <div
                        id={`s0`}
                        className="h-screen mb-32"
                      >
                        <div className="mt-4 space-y-4">
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Pangalan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="pangalan" />
                            <input type="text" placeholder="Palayaw" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="palayaw" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Kasarian" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kasarian" />
                            <input type="number" placeholder="Edad" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="edad" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="date" placeholder="Petsa ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kapanganakan" />
                            <input type="text" placeholder="Lugar ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kapanganakan" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Relihiyon" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="relihiyon" />
                            <input type="text" placeholder="Kasalukuyan/Naabot na Antas sa Paaralan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="antas" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Huling Paaralang Pinasukan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="pinasukan" />
                            <input type="text" placeholder="Tirahan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="tirahan" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Allergy" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="allergy" />
                            <input type="text" placeholder="Vaccine" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="vaccine" />
                          </div>
                          <p style={{ fontSize: '24px' }}><b>Inisyal na Itsurang Pisikal ng Bata:</b></p>
                          <div className="flex flex-col">
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="madumi-punit-damit" />
                              Madumi at punit na damit
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="sugat-katawan" />
                              May sugat/galis sa katawan
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="mapayat" />
                              Payat na pangangatawan
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="maduming-kuko" />
                              Maduming kuko
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="magulong-buhok" />
                              Magulong buhok
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="malaking-tiyan" />
                              Malaki ang tiyan
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="sirang-ngipin" />
                              May sirang ngipin
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="nakayapak" />
                              Nakayapak/walang tsinelas
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="masamang-amoy" />
                              May hindi magandang amoy
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="text" placeholder="Iba pa" className="p-1 border-bb-violet border-2 rounded-lg w-1/16" id="iba-pa-itsura"/>
                            </label>
                          </div>
                          <p style={{ fontSize: '24px' }}><b>Kategoryang Kinapapalooban:</b></p>
                          <div className="flex flex-wrap space-x-4">
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="approached-voluntarily" />
                              Kusang Lumapit
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="referral" onChange={isReferral} />
                              Referral
                            </label>
                          </div>
                          {showNGOandLGU && (
                            <>
                              <input type="text" placeholder="NGO" style={{ fontSize: '18px' }} className="p-2 border-bb-violet border-2 rounded-lg w-full" id="ngo" />
                              <input type="text" placeholder="LGU" style={{ fontSize: '18px' }} className="p-2 border-bb-violet border-2 rounded-lg w-full" id="lgu" />
                            </>
                          )}
                          <p style={{ fontSize: '24px' }}><b>Mga Dokumento/Requirements na Mayroon:</b></p>
                          <div className="flex flex-col">
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="report-card" />
                              School Report Card
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="baptismal" />
                              Baptismal
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="school-id" />
                              School I.D
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="birth-certificate" />
                              Birth Certificate
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="health-card" />
                              Health Card
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="malaking-tiyan" />
                              Malaki ang tiyan
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="vaccination-card" />
                              Vaccination Card
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="text" placeholder="Iba pa" className="p-1 border-bb-violet border-2 rounded-lg w-1/16"  id="iba-pa-dokumento"/>
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Problemang inihain ng pamilay */}
                  {index === 1 && (
                    <>
                      <div
                        id={`s0`}
                        className="h-screen mb-32"
                      >
                        <div className="mt-4 space-y-4">
                        <p style={{ fontSize: '24px' }}><b>Problema:</b></p>
                          <div className="flex flex-col">
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="abandoned" />
                              Abandoned
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="neglected" />
                              Neglected
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="ran-away" />
                              Ran away from home
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="gang" />
                              Gang involvement
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="pa" />
                              Suffered physical abuse
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="sa" />
                              Suffered sexual abuse
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="roam-street" />
                              Roaming in the street
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="sleep-street" />
                              Sleeping on the street
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="hygiene" />
                              Hygiene
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="drop-out" />
                              School drop-out
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="academic-problem" />
                              Academic problem
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="not-studying" />
                              Not studying
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Nanay */}
                  {index === 2 && (
                    <>
                      <div
                        id={`s0`}
                        className="h-screen mb-32"
                      >
                        <div className="mt-4 space-y-4">
                        <p style={{ fontSize: '24px' }}><b>Impormasyon ng Nanay:</b></p>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Pangalan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="pangalan-nanay" />
                            <input type="text" placeholder="Palayaw" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="palayaw-nanay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Kasarian" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kasarian-nanay" />
                            <input type="number" placeholder="Edad" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="edad-nanay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="date" placeholder="Petsa ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kapanganakan-nanay" />
                            <input type="text" placeholder="Lugar ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kapanganakan-nanay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Relihiyon" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="relihiyon-nanay" />
                            <input type="text" placeholder="Kasalukuyan/Naabot na Antas sa Paaralan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="antas-nanay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Huling Paaralang Pinasukan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="pinasukan-nanay" />
                            <input type="text" placeholder="Kasalukuyang Tirahan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="tirahan-nanay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Probinsya" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="probinsya-nanay" />
                            <input type="text" placeholder="Trabaho" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="trabaho-nanay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Kita" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kita-nanay" />
                            <input type="text" placeholder="Skill Training Attended" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="skill-training-nanay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Skills" className="p-2 border-bb-violet border-2 rounded-lg w-1/2" id="skills-nanay" />
                          </div>
                          <p style={{ fontSize: '24px' }}><b>Available documents/I.D:</b></p>
                          <div className="flex flex-col">
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="n-id-nanay" />
                              National I.D
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="b-id-nanay" />
                              Barangay I.D
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="sss-nanay" />
                              SSS
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="phil-health-nanay" />
                              PhilHealth
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="hdmf-nanay" />
                              HDMF
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="bc-nanay" />
                              Birth Certificate
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="dswd-nanay" />
                              DSWD I.D
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="text" placeholder="Iba pa" className="p-1 border-bb-violet border-2 rounded-lg w-1/16"  id="iba-pa-nanay"/>
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Tatay */}
                  {index === 3 && (
                    <>
                      <div
                        id={`s0`}
                        className="h-screen mb-32"
                      >
                        <div className="mt-4 space-y-4">
                        <p style={{ fontSize: '24px' }}><b>Impormasyon ng Tatay:</b></p>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Pangalan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="pangalan-tatay" />
                            <input type="text" placeholder="Palayaw" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="palayaw-tatay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Kasarian" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kasarian-tatay" />
                            <input type="number" placeholder="Edad" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="edad-tatay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="date" placeholder="Petsa ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kapanganakan-tatay" />
                            <input type="text" placeholder="Lugar ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kapanganakan-tatay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Relihiyon" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="relihiyon-tatay" />
                            <input type="text" placeholder="Kasalukuyan/Naabot na Antas sa Paaralan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="antas-tatay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Huling Paaralang Pinasukan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="pinasukan-tatay" />
                            <input type="text" placeholder="Kasalukuyang Tirahan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="tirahan-tatay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Probinsya" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="probinsya-tatay" />
                            <input type="text" placeholder="Trabaho" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="trabaho-tatay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Kita" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kita-tatay" />
                            <input type="text" placeholder="Skill Training Attended" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="skill-training-tatay" />
                          </div>
                          <div className="flex space-x-4" style={{ fontSize: '18px' }}>
                            <input type="text" placeholder="Skills" className="p-2 border-bb-violet border-2 rounded-lg w-1/2" id="skills-tatay" />
                          </div>
                          <p style={{ fontSize: '24px' }}><b>Available documents/I.D:</b></p>
                          <div className="flex flex-col">
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="n-id-tatay" />
                              National I.D
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="b-id-tatay" />
                              Barangay I.D
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="sss-tatay" />
                              SSS
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="phil-health-tatay" />
                              PhilHealth
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="hdmf-tatay" />
                              HDMF
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="bc-tatay" />
                              Birth Certificate
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="checkbox" className="mr-2" id="dswd-tatay" />
                              DSWD I.D
                            </label>
                            <label className="flex items-center" style={{ fontSize: '18px' }}>
                              <input type="text" placeholder="Iba pa" className="p-1 border-bb-violet border-2 rounded-lg w-1/16"  id="iba-pa-tatay"/>
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <p>Information about siblings.</p>
                      <input
                        type="text"
                        placeholder="Enter sibling's name"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
                      <input
                        type="text"
                        placeholder="Enter sibling's age"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <p>Required documents.</p>
                      <input
                        type="file"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
                    </>
                  )}
                  {index === 6 && (
                    <>
                      <p>Additional information.</p>
                      <textarea
                        placeholder="Any additional information"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full h-32"
                      ></textarea>
                    </>
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
