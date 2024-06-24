import Appbar from "@/components/ui/Appbar";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

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
        <div className="md:w-1/3 lg:w-1/4 bg-bb-purple p-4">
          <h1 className="text-6xl mb-16">Intake Form</h1>

          <div
            id="s1-nav"
            className={`mt-8 mb-8 ${
              sectionActive == "s1"
                ? "bg-bb-violet text-bb-white"
                : "bg-bb-white text-bb-violet"
            }  flex items-center p-4 transition-colors duration-200 cursor-pointer`}
            onClick={navigateSection}
          >
            <h2 className={`text-2xl `}>Pangunahing Impormasyon</h2>
          </div>

          <div
            id="s2-nav"
            className={`mt-8 mb-8 ${
              sectionActive == "s2"
                ? "bg-bb-violet text-bb-white"
                : "bg-bb-white text-bb-violet"
            }  flex items-center p-4 transition-colors duration-200 cursor-pointer`}
            onClick={navigateSection}
          >
            <h2 className="text-2xl">Problemang Inihain ng Pamilya</h2>
          </div>

          <div
            id="s3-nav"
            className={`mt-8 mb-8 ${
              sectionActive == "s3"
                ? "bg-bb-violet text-bb-white"
                : "bg-bb-white text-bb-violet"
            }  flex items-center p-4 transition-colors duration-200 cursor-pointer`}
            onClick={navigateSection}
          >
            <h2 className="text-2xl">Nanay</h2>
          </div>

          <div
            id="s4-nav"
            className={`mt-8 mb-8 ${
              sectionActive == "s4"
                ? "bg-bb-violet text-bb-white"
                : "bg-bb-white text-bb-violet"
            }  flex items-center p-4 transition-colors duration-200 cursor-pointer`}
            onClick={navigateSection}
          >
            <h2 className="text-2xl">Tatay</h2>
          </div>

          <div
            id="s5-nav"
            className={`mt-8 mb-8 ${
              sectionActive == "s5"
                ? "bg-bb-violet text-bb-white"
                : "bg-bb-white text-bb-violet"
            }  flex items-center p-4 transition-colors duration-200 cursor-pointer`}
            onClick={navigateSection}
          >
            <h2 className="text-2xl">Kapatid</h2>
          </div>

          <div
            id="s6-nav"
            className={`mt-8 mb-8 ${
              sectionActive == "s6"
                ? "bg-bb-violet text-bb-white"
                : "bg-bb-white text-bb-violet"
            }  flex items-center p-4 transition-colors duration-200 cursor-pointer`}
            onClick={navigateSection}
          >
            <h2 className="text-2xl">Dokumento/Requirements</h2>
          </div>

          <div
            id="s7-nav"
            className={`mt-8 mb-8 ${
              sectionActive == "s7"
                ? "bg-bb-violet text-bb-white"
                : "bg-bb-white text-bb-violet"
            }  flex items-center p-4 transition-colors duration-200 cursor-pointer`}
            onClick={navigateSection}
          >
            <h2 className="text-2xl">Ibang Impormasyon</h2>
          </div>

          <button className="flex items-center justify-center p-4 bg-bb-violet text-bb-white w-full transition-colors duration-200 hover:bg-bb-white hover:text-bb-violet">
            <span className="material-symbols-outlined text-3xl mr-2">
              save_as
            </span>
            <h1 className="text-2xl">Save</h1>
          </button>
        </div>

        <div className="flex-grow p-8 overflow-auto text-bb-violet">
          <Waypoint onEnter={() => setSectionActive("s1")}>
            <div id="s1" className="h-screen mb-32 border-bb-violet border-2">
              <h1>Pangunahing Impormasyon</h1>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => setSectionActive("s2")} bottomOffset={"50%"}>
            <div id="s2" className="h-screen mb-32 border-bb-violet border-2">
              <h1>Problemang Inihain ng Pamilya</h1>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => setSectionActive("s3")} bottomOffset={"50%"}>
            <div id="s3" className="h-screen mb-32 border-bb-violet border-2">
              <h1>Nanay</h1>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => setSectionActive("s4")} bottomOffset={"50%"}>
            <div id="s4" className="h-screen mb-32 border-bb-violet border-2">
              <h1>Tatay</h1>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => setSectionActive("s5")} bottomOffset={"50%"}>
            <div id="s5" className="h-screen mb-32 border-bb-violet border-2">
              <h1>Kapatid</h1>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => setSectionActive("s6")} bottomOffset={"50%"}>
            <div id="s6" className="h-screen mb-32 border-bb-violet border-2">
              <h1>Mga Dokumento</h1>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => setSectionActive("s7")} bottomOffset={"50%"}>
            <div id="s7" className="h-screen border-bb-violet border-2">
              <h1>Ibang Impormasyon</h1>
            </div>
          </Waypoint>
        </div>
      </div>
    </>
  );
};

export default Forms;
