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

        <div className="flex-grow p-8 overflow-auto text-bb-violet">
          {sections.map((sectionTitle, index) => (
            <Waypoint
              key={index}
              onEnter={() => setSectionActive(`s${index + 1}`)}
              bottomOffset={"50%"}
            >
              <div
                id={`s${index + 1}`}
                className="h-screen mb-48"
              >
                <h1 className="text-4xl mb-4">{sectionTitle}</h1>
                <p className="text-lg">Content para sa {sectionTitle}</p>
                <div className="mt-4 space-y-4">
                  {index === 0 && (
                    <>
                      <div
                        id={`s1`}
                        className="h-screen mb-32"
                      >
                        <div className="mt-4 space-y-4">
                          <div className="flex space-x-4">
                            <input type="text" placeholder="Pangalan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="pangalan" />
                            <input type="text" placeholder="Palayaw" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="palayaw" />
                          </div>
                          <div className="flex space-x-4">
                            <input type="text" placeholder="Kasarian" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kasarian" />
                            <input type="number" placeholder="Edad" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="edad" />
                          </div>
                          <div className="flex space-x-4">
                            <input type="date" placeholder="Petsa ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="petsa-ng-kapanganakan" />
                            <input type="text" placeholder="Lugar ng Kapanganakan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="lugar-ng-kapanganakan" />
                          </div>
                          <div className="flex space-x-4">
                            <input type="text" placeholder="Relihiyon" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="relihiyon" />
                            <input type="text" placeholder="Kasalukuyan/Naabot na Antas sa Paaralan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="kasalukuyan-antas-sa-paaralan" />
                          </div>
                          <div className="flex space-x-4">
                            <input type="text" placeholder="Huling Paaralang Pinasukan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="huling-paaralang-pinasukan" />
                            <input type="text" placeholder="Tirahan" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="tirahan" />
                          </div>
                          <div className="flex space-x-4">
                            <input type="text" placeholder="Allergy" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="allergy" />
                            <input type="text" placeholder="Vaccine" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="vaccine" />
                          </div>
                          <p><b>Inisyal na Itsurang Pisikal ng Bata:</b></p>
                          <div className="flex flex-col">
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="madumi-punit-damit" />
                              Madumi at punit na damit
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="sugat-katawan" />
                              May sugat/galis sa katawan
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="mapayat" />
                              Payat na pangangatawan
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="maduming-kuko" />
                              Maduming kuko
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="magulong-buhok" />
                              Magulong buhok
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="malaking-tiyan" />
                              Malaki ang tiyan
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="sirang-ngipin" />
                              May sirang ngipin
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="nakayapak" />
                              Nakayapak/walang tsinelas
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="masamang-amoy" />
                              May hindi magandang amoy
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="iba-pa-itsura" />
                              Iba pa
                            </label>
                          </div>
                          <p><b>Kategoryang Kinapapalooban:</b></p>
                          <div className="flex flex-wrap space-x-4">
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="approached-voluntarily" />
                              Kusang Lumapit
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="referral" onChange={isReferral} />
                              Referral
                            </label>
                          </div>
                          {showNGOandLGU && (
                            <>
                              <input type="text" placeholder="NGO" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="ngo" />
                              <input type="text" placeholder="LGU" className="p-2 border-bb-violet border-2 rounded-lg w-full" id="lgu" />
                            </>
                          )}
                          <p><b>Mga Dokumento/Requirements na Mayroon:</b></p>
                          <div className="flex flex-col">
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="report-card" />
                              School Report Card
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="baptismal" />
                              Baptismal
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="school-id" />
                              School I.D
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="birth-certificate" />
                              Birth Certificate
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="health-card" />
                              Health Card
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="malaking-tiyan" />
                              Malaki ang tiyan
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="vaccination-card" />
                              Vaccination Card
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="nakayapak" />
                              Iba pa
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="masamang-amoy" />
                              May hindi magandang amoy
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" id="iba-pa-dokumento" />
                              Iba pa
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p>Details about family problems.</p>
                      <textarea
                        placeholder="Describe the problem"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full h-32"
                      ></textarea>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p>Information about Nanay (Mother).</p>
                      <input
                        type="text"
                        placeholder="Enter mother's name"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
                      <input
                        type="text"
                        placeholder="Enter mother's occupation"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <p>Information about Tatay (Father).</p>
                      <input
                        type="text"
                        placeholder="Enter father's name"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
                      <input
                        type="text"
                        placeholder="Enter father's occupation"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
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
