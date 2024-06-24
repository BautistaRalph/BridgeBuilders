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
        <div className="md:w-1/3 lg:w-1/4 bg-bb-purple p-4 space-y-8">
          <h1 className="text-6xl mb-16">Intake Form</h1>

          {sections.map((section, index) => (
            <div
              key={section}
              id={`s${index + 1}-nav`}
              className={`transition-colors duration-200 cursor-pointer flex items-center p-4 rounded-lg ${
                sectionActive === section
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
                className="h-screen mb-32 border-bb-violet border-2 p-4 rounded-lg shadow-lg"
              >
                <h1 className="text-4xl mb-4">{sectionTitle}</h1>
                <p className="text-lg">Content for {sectionTitle}</p>
                <div className="mt-4 space-y-4">
                  {index === 0 && (
                    <>
                      <p>This is the main information about the form.</p>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
                      <input
                        type="text"
                        placeholder="Enter your address"
                        className="p-2 border-bb-violet border-2 rounded-lg w-full"
                      />
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
