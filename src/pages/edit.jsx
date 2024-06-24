import Appbar from "@/components/ui/Appbar";
import Select from "@/components/ui/Select";
import Goal from "@/components/ui/Goal";
import Tooltip from "@/components/ui/Tooltip";
import useMedia from "@/utils/hooks/useMedia";
import useProfile from "@/utils/hooks/useProfile";
import { useRef } from "react";

const programOptions = [
  { value: "Community Based Program", name: "program" },
  { value: "Home Care", name: "program" },
];

const Edit = () => {
  const pictureRef = useRef(null);
  const { profileData, setProfileData } = useProfile("Darryl Javier");
  const { image, handleImageChange } = useMedia();

  const handlePictureClick = () => {
    pictureRef.current.click();
  };

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleGoalChange = (event) => {
    if (!profileData.goalsAchieved.includes(event.target.value)) {
      setProfileData({
        ...profileData,
        goalsAchieved: [...profileData.goalsAchieved, event.target.value],
      });
    } else {
      setProfileData({
        ...profileData,
        goalsAchieved: profileData.goalsAchieved.filter(
          (goal) => goal != event.target.value
        ),
      });
    }
  };

  return (
    <>
      <div className="w-screen h-max md:h-screen bg-white">
        <Appbar />

        <div className="flex flex-col md:flex-row h-max md:h-[calc(100%-10rem)] mt-8 ml-8 mr-8">
          <div className="flex flex-col h-full w-full md:w-3/4 lg:w-1/3 xl:w-1/4 mr-8">
            <div className="w-full h-full md:h-1/2 lg:h-2/3 xl:h-3/6 bg-bb-light-purple flex align-center justify-center self-center">
              <img src={image} className="object-contain" />
              <span
                onClick={handlePictureClick}
                className="material-symbols-outlined text-bb-white absolute self-center text-4xl lg:text-8xl cursor-pointer hover:text-bb-violet transition-colors duration-300 "
              >
                photo_camera
              </span>
              <input
                ref={pictureRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <div className="flex flex-col mt-4 text-bb-violet">
              <div className="flex items-center mt-4 mb-4">
                <h1 className="text-4xl mr-4">About</h1>
                <div className="flex-grow h-1 bg-bb-violet"></div>
              </div>

              <div className="flex items-center mt-1 mb-1">
                <span className="material-symbols-outlined mr-2 text-4xl">
                  id_card
                </span>
                <h2 className="w-full">
                  <input
                    type="text"
                    name="palayaw"
                    className="w-full border-2 border-bb-purple p-1 rounded-md focus:outline-none transition-colors duration-300 hover:border-bb-violet focus:border-bb-violet"
                    placeholder="Palayaw"
                    value={profileData.palayaw}
                    onChange={handleChange}
                  />
                </h2>
              </div>

              <div className="flex items-center mt-1 mb-1">
                <span className="material-symbols-outlined mr-2 text-4xl">
                  hourglass_empty
                </span>
                <h2 className="w-full">
                  <input
                    type="text"
                    className="w-full border-2 border-bb-purple p-1 rounded-md focus:outline-none transition-colors duration-300 hover:border-bb-violet focus:border-bb-violet"
                    placeholder="Edad"
                    name="edad"
                    value={profileData.edad}
                    onChange={handleChange}
                  />
                </h2>
              </div>

              <div className="flex items-center mt-1 mb-1">
                <span className="material-symbols-outlined mr-2 text-4xl">
                  wc
                </span>
                <h2 className="w-full">
                  <input
                    type="text"
                    className="w-full border-2 border-bb-purple p-1 rounded-md focus:outline-none transition-colors duration-300 hover:border-bb-violet focus:border-bb-violet"
                    placeholder="Kasarian"
                    name="kasarian"
                    value={profileData.kasarian}
                    onChange={handleChange}
                  />
                </h2>
              </div>

              <div className="flex items-center mt-1 mb-1">
                <span className="material-symbols-outlined mr-2 text-4xl">
                  cake
                </span>
                <h2 className="w-full">
                  <input
                    type="text"
                    className="w-full border-2 border-bb-purple p-1 rounded-md focus:outline-none transition-colors duration-300 hover:border-bb-violet focus:border-bb-violet"
                    placeholder="Petsa ng Kapanganakan"
                    name="birthday"
                    value={profileData.birthday}
                    onChange={handleChange}
                  />
                </h2>
              </div>

              <div className="flex items-center mt-1 mb-1">
                <span className="material-symbols-outlined mr-2 text-4xl">
                  church
                </span>
                <h2 className="w-full">
                  <input
                    type="text"
                    className="w-full border-2 border-bb-purple p-1 rounded-md focus:outline-none transition-colors duration-300 hover:border-bb-violet focus:border-bb-violet"
                    placeholder="Relihiyon"
                    name="relihiyon"
                    value={profileData.relihiyon}
                    onChange={handleChange}
                  />
                </h2>
              </div>

              <div className="flex-grow h-1 mt-4 bg-bb-violet"></div>

              <h3 className="mt-2">
                <strong>Case number:</strong> {profileData.caseNo}
              </h3>

              <div className="flex-grow h-1 mt-4 mb-4 bg-bb-violet"></div>
            </div>
          </div>

          <div className="flex flex-col h-full flex-grow overflow-auto z-0 text-bb-violet mr-4 xl:mr-28">
            <div className="flex items-center mb-8">
              <h1 className="text-4xl xl:text-7xl flex-grow">
                <input
                  type="text"
                  className="w-full border-2 border-bb-purple p-1 rounded-md focus:outline-none transition-colors duration-300 hover:border-bb-violet focus:border-bb-violet"
                  placeholder="Pangalan"
                  name="pangalan"
                  value={profileData.pangalan}
                  onChange={handleChange}
                />
              </h1>
              <Tooltip tooltipText={"Save"} className=" mr-6 ml-6 ">
                <a href="/profile">
                  <span className="material-symbols-outlined text-3xl md:text-5xl text-center text-bb-purple hover:text-bb-violet cursor-pointer">
                    save_as
                  </span>
                </a>
              </Tooltip>
              <Tooltip tooltipText={"Return"} className=" mr-6 ml-6 ">
                <a href="/profile">
                  <span className="material-symbols-outlined text-3xl md:text-5xl text-center text-bb-purple hover:text-bb-violet cursor-pointer">
                    keyboard_return
                  </span>
                </a>
              </Tooltip>
            </div>

            <div className="flex items-center">
              <h2 className="text-3xl xl:text-5xl mr-2">Program: </h2>
              <div className="relative flex-grow">
                <Select
                  className="flex items-center h-14 w-full border-2 border-bb-purple pr-4 pl-4 rounded-md transition-colors duration-300 hover:border-bb-violet"
                  optionList={programOptions}
                  handleChange={handleChange}
                >
                  <h1 className="text-2xl xl:text-4xl flex-grow text-left">
                    {profileData.program}
                  </h1>
                </Select>
              </div>
            </div>

            <div className="flex items-center mt-12">
              <h1 className="text-4xl mr-4">Intervention</h1>
              <div className="flex-grow h-1 bg-bb-violet"></div>
            </div>

            <div className="flex w-full overflow-auto">
              <div className="flex flex-col">
                <Goal
                  name="goal1"
                  goalsAchieved={profileData.goalsAchieved}
                  editMode
                  handleGoalChange={handleGoalChange}
                  image={"/src/assets/logo.png"}
                  title="Mental"
                  goal={1}
                />
              </div>

              <div className="flex flex-col">
                <Goal
                  name="goal2"
                  goalsAchieved={profileData.goalsAchieved}
                  editMode
                  handleGoalChange={handleGoalChange}
                  image={"/src/assets/logo.png"}
                  title="Physical/Social"
                  goal={2}
                />
              </div>

              <div className="flex flex-col">
                <Goal
                  name="goal3"
                  goalsAchieved={profileData.goalsAchieved}
                  editMode
                  handleGoalChange={handleGoalChange}
                  image={"/src/assets/logo.png"}
                  title="Support to Caregiver"
                  goal={3}
                />
              </div>
            </div>

            <div className="flex items-center mt-8">
              <h1 className="text-4xl mr-4">More Information</h1>
              <div className="flex-grow h-1 bg-bb-violet"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
