import { useRef, useState } from "react";
import Select from "@/components/ui/Select";

const documentList = [
  "National I.D",
  "Barangay I.D",
  "SSS",
  "PhilHealth",
  "HDMF",
  "Birth Certificate",
  "DSWD I.D",
  "",
];

const antasList = [
  { value: "None", name: "antas" },
  { value: "Elementary", name: "antas" },
  { value: "High School", name: "antas" },
  { value: "College", name: "antas" },
  { value: "ALS", name: "antas" },
];

const Nanay = ({ childData, setChildData }) => {
  const [otherDocuments, setOtherDocuments] = useState([]);
  const otherKasarianRef = useRef(null);
  // Handling textfield, number input, radio, and date input fields
  const handleChange = (event) => {
    setChildData({
      ...childData,
      nanay: {
        ...childData.nanay,
        [event.currentTarget.name]: event.currentTarget.value,
      },
    });
  };

  // Handling kasarian radio button to avoid conflict with other kasarian radio buttons
  const handleKasarian = (event) => {
    setChildData({
      ...childData,
      nanay: {
        ...childData.nanay,
        kasarian: event.currentTarget.value,
      },
    });
  };

  // Handling other kasarian input
  const handleOtherKasarian = () => {
    const kasarian = otherKasarianRef.current.value;
    setChildData({ ...childData, nanay: { ...childData.nanay, kasarian } });
  };

  const handleCheckbox = (event) => {
    const field = event.currentTarget.name;
    const value = event.currentTarget.value;

    setChildData({
      ...childData,
      nanay: {
        ...childData.nanay,
        [field]: event.currentTarget.checked
          ? [...childData.nanay[field], value]
          : childData.nanay[field].filter((data) => data != value),
      },
    });
  };

  const handleOtherDocuments = (event) => {
    const value = event.currentTarget.value;
    const documentList = value
      .trim()
      .split(/\s*,\s*/)
      .filter((feature) => feature !== "");

    const updatedDocuments = childData.nanay.dokumento.filter(
      (document) => !otherDocuments.includes(document)
    );

    const newDocuments = [...updatedDocuments, ...documentList];

    setChildData((prevChildData) => ({
      ...prevChildData,
      nanay: {
        ...prevChildData.nanay,
        dokumento: newDocuments,
      },
    }));

    setOtherDocuments(documentList);
  };

  return (
    <>
      <div className="mt-4 space-y-4">
        <p style={{ fontSize: "24px" }}>
          <b>Impormasyon ng Nanay:</b>
        </p>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Pangalan"
            name="pangalan"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            id="pangalan"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Palayaw"
            name="palayaw"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            id="palayaw"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <span className="flex items-center w-1/2 mr-2">
            <label className="text-2xl mr-4 flex">
              <input
                type="radio"
                name="nanay"
                checked={childData.nanay.kasarian == "Lalaki"}
                value={"Lalaki"}
                onChange={handleKasarian}
              />
              <p className="ml-2">Lalaki</p>
            </label>
            <label className="text-2xl mr-4 flex">
              <input
                type="radio"
                name="nanay"
                checked={childData.nanay.kasarian == "Babae"}
                value={"Babae"}
                onChange={handleKasarian}
              />
              <p className="ml-2">Babae</p>
            </label>
            <label className="text-2xl flex-grow flex items-center">
              <input
                type="radio"
                name="nanay"
                checked={
                  childData.nanay.kasarian != "Babae" &&
                  childData.nanay.kasarian != "Lalaki"
                }
                onChange={handleOtherKasarian}
              />
              <p className="ml-2">Other: </p>
              <input
                ref={otherKasarianRef}
                type="text"
                onChange={handleOtherKasarian}
                placeholder="Kasarian"
                className="p-2 bg-inherit outline-none border-bb-violet border-b-2 text-2xl w-1/2"
                name="kasarian-other"
              />
            </label>
          </span>
          <span className="w-1/2 mr-2">
            <input
              type="number"
              min="1"
              max="100"
              placeholder="Edad"
              className="p-2 border-bb-violet border-2 rounded-lg bg-inherit w-full outline-none text-2xl"
              name="edad"
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <input
            type="date"
            placeholder="Petsa ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            name="birthday"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Lugar ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            name="lugarNgKapanganakan"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Relihiyon"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            name="relihiyon"
            onChange={handleChange}
          />
          <div className="w-1/2 mr-2">
            <Select
              className="flex items-center overflow-auto h-14 w-full border-2 border-bb-violet pr-2 pl-2 rounded-md transition-colors duration-300 hover:border-bb-purple"
              optionClassName="text-bb-violet bg-bb-white text-2xl transition-colors duration-300 hover:text-bb-white hover:bg-bb-purple"
              optionList={antasList}
              handleChange={handleChange}
              listHeight=""
            >
              <h1 className="text-2xl flex-grow text-left">
                {childData?.nanay?.antas ?? "Naabot na Antas ng Paaralan"}
              </h1>
            </Select>
          </div>
        </div>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Huling Paaralang Pinasukan"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            name="hulingPaaralan"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Tirahan"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            name="tirahan"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Probinsya"
            className="p-2 border-bb-violet border-2 rounded-lg w-full mr-2"
            id="probinsya-tatay"
          />
          <input
            type="text"
            placeholder="Trabaho"
            className="p-2 border-bb-violet border-2 rounded-lg w-full mr-2"
            id="trabaho-tatay"
          />
        </div>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Kita"
            className="p-2 border-bb-violet border-2 rounded-lg w-full mr-2"
            id="kita-tatay"
          />
          <input
            type="text"
            placeholder="Skill Training Attended"
            className="p-2 border-bb-violet border-2 rounded-lg w-full mr-2"
            id="skill-training-tatay"
          />
        </div>
        <div className="flex items-center w-full" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Skills"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2 mr-2"
            id="skills-tatay"
          />
        </div>
        <p style={{ fontSize: "24px" }}>
          <b>Available documents/I.D:</b>
        </p>
        <div className="flex flex-col">
          {documentList.map((problem) => (
            <label
              className="flex items-center mb-2"
              style={{ fontSize: "18px" }}
              key={problem}
            >
              <input
                type="checkbox"
                className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
                name="dokumento"
                value={problem}
                onChange={handleCheckbox}
              />
              {problem}
            </label>
          ))}
          <span className="flex flex-col w-1/2">
            <p>Iba pa: (Paghiwalayin ang mga dokumento gamit ng comma)</p>
            <input
              type="text"
              placeholder="Iba pang mga dokumento"
              onBlur={handleOtherDocuments}
              className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Nanay;
