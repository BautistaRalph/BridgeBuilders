import Accordion from "@/components/ui/Accordion";
import Select from "@/components/ui/Select";

const antasList = [
  { value: "None", name: "antas" },
  { value: "Elementary", name: "antas" },
  { value: "High School", name: "antas" },
  { value: "College", name: "antas" },
  { value: "ALS", name: "antas" },
];

const Kapatid = ({ childData, setChildData }) => {
  const addSibling = () => {
    const lastIndex =
      childData.kapatid[childData.kapatid.length - 1].kapatidIndex;
    setChildData({
      ...childData,
      kapatid: [
        ...childData.kapatid,
        {
          kapatidIndex: lastIndex + 1,
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
    });
  };

  const removeSibling = (event) => {
    const targetIndex = event.target.value;
    const newKapatidList = childData.kapatid.filter(
      (kapatid) => kapatid.kapatidIndex != targetIndex
    );
    setChildData({ ...childData, kapatid: newKapatidList });
  };

  return (
    <>
      <p>Information about siblings.</p>
      <button
        className="border-dashed border-2 border-bb-violet h-16 w-full flex items-center p-2 hover:bg-bb-violet hover:text-bb-white hover:border-bb-white transition-colors duration-200"
        onClick={addSibling}
      >
        <h1 className="flex-grow text-4xl text-left">Magdagdag ng Kapatid</h1>
        <span className="material-symbols-outlined text-5xl self-end">add</span>
      </button>

      {childData.kapatid.map((kapatid) => (
        <Accordion
          title={kapatid.name ?? "Unnamed sibling"}
          accordionOpenColor="bg-bb-violet text-bb-white"
          className="bg-bb-white text-4xl"
          containerClassName="bg-bb-white text-2xl"
          key={kapatid.name}
        >
          <div className="flex items-center w-full flex-col">
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Pangalan"
                className="p-2 border-bb-violet border-b-2 bg-inherit w-1/3 mr-8 outline-none text-2xl"
                id="kapatid-pangalan"
              />

              <input
                type="number"
                min="1"
                max="100"
                placeholder="Edad"
                className="p-2 border-bb-violet border-2 rounded-lg bg-inherit w-1/6 outline-none mr-8 text-2xl"
                id="kapatid-edad"
              />

              <label className="text-2xl mr-8 flex">
                <input type="radio" checked="checked" name="radio" />
                <p className="ml-2">Lalaki</p>
              </label>
              <label className="text-2xl mr-8 flex">
                <input type="radio" name="radio" />
                <p className="ml-2">Babae</p>
              </label>
              <label className="text-2xl flex-grow flex items-center">
                <input type="radio" name="radio" />
                <p className="ml-2">Other: </p>
                <input
                  type="text"
                  placeholder="Kasarian"
                  className="p-2 bg-inherit outline-none border-bb-violet border-b-2 text-2xl"
                  id="pangalan-tatay"
                />
              </label>
            </div>

            <div className="w-full flex items-center mt-4">
              <input
                type="text"
                placeholder="Trabaho"
                className="p-2 border-bb-violet border-b-2 bg-inherit w-1/2 mr-8 outline-none text-2xl"
                id="kapatid-trabaho"
              />

              <span className="flex-grow" />
              <p className="text-4xl">&#8369;</p>
              <input
                type="number"
                min="1"
                placeholder="Kita"
                className="p-2 border-bb-violet border-b-2 bg-inherit w-1/4 outline-none text-2xl"
                id="kapatid-kita"
              />
            </div>

            <div className="w-full">
              <Select
                className="flex items-center overflow-auto h-14 w-full border-2 border-bb-purple pr-4 pl-4 rounded-md transition-colors duration-300 hover:border-bb-violet mt-4"
                optionClassName="text-bb-violet bg-bb-white text-3xl transition-colors duration-300 hover:text-bb-white hover:bg-bb-purple"
                optionList={antasList}
              >
                <h1 className="text-2xl xl:text-4xl flex-grow text-left">
                  {kapatid.antas ?? "Naabot na Antas ng Paaralan"}
                </h1>
              </Select>
            </div>

            <div className="w-full h-16 flex items-center justify-end mt-2 mb-2">
              <button
                value={kapatid.kapatidIndex}
                onClick={removeSibling}
                className="w-64 h-12 rounded-lg text-2xl bg-bb-violet text-bb-white hover:bg-bb-light-purple hover:text-bb-violet transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default Kapatid;
