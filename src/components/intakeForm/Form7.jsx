import { useState } from "react";

const IbangImpormasyon = ({ childData, setChildData }) => {
  const [illnesses, setIllnesses] = useState([]);
  const [extracurriculars, setExtracurriculars] = useState([]);

  // Handling textfield, number input, radio, and date input fields
  const handleChange = (event) => {
    setChildData({
      ...childData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleCheckbox = (event) => {
    const field = event.currentTarget.name;
    setChildData({
      ...childData,
      [field]: event.currentTarget.checked ? true : false,
    });
  };

  const handleIllnesses = (event) => {
    const value = event.currentTarget.value;
    const illnessList = value
      .trim()
      .split(/\s*,\s*/)
      .filter((illness) => illness !== "");

    const updatedFamilyIllnesses = childData.familyIllnesses.filter(
      (illness) => !illnesses.includes(illness)
    );

    const newFamilyIllnesses = [...updatedFamilyIllnesses, ...illnessList];

    setChildData((prevChildData) => ({
      ...prevChildData,
      familyIllnesses: newFamilyIllnesses,
    }));

    setIllnesses(illnessList);
  };

  const handleExtracurriculars = (event) => {
    const value = event.currentTarget.value;
    const extracurricularsList = value
      .trim()
      .split(/\s*,\s*/)
      .filter((e) => e !== "");

    const updatedExtracurriculars = childData.extracurriculars.filter(
      (e) => !extracurriculars.includes(e)
    );

    const newExtracurriculars = [
      ...updatedExtracurriculars,
      ...extracurricularsList,
    ];

    setChildData((prevChildData) => ({
      ...prevChildData,
      extracurriculars: newExtracurriculars,
    }));

    setExtracurriculars(extracurricularsList);
  };

  return (
    <>
      <p>Additional information.</p>

      <div className="w-full flex items-center">
        <span className="flex flex-col w-1/2 mr-8">
          <p>Ilan ang nag-aaral sa pamilya?</p>
          <input
            type="number"
            min="1"
            placeholder="Ilan ang nag-aaral sa pamilya?"
            className="p-2 border-bb-violet border-b-2 bg-inherit w-full outline-none text-2xl"
            name="schoolCount"
            onChange={handleChange}
          />
        </span>

        <span className="flex flex-col w-1/2">
          <p>Ilan ang baon sa school?</p>
          <span className="flex">
            <p className="text-4xl">&#8369;</p>
            <input
              type="number"
              min="1"
              placeholder="Ilan ang baon sa school?"
              className="p-2 border-bb-violet border-b-2 bg-inherit w-full outline-none text-2xl"
              name="baon"
              onChange={handleChange}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  items-center">
        <span className="flex flex-col w-1/2 mr-8">
          <p>Saan ginagastos ang baon?</p>
          <input
            type="text"
            placeholder="Saan ginagastos ang baon?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            name="baonExpense"
            onChange={handleChange}
          />
        </span>

        <span className="flex flex-col w-1/2">
          <p>
            Mga Sinasalihang Activity sa School? (Paghiwalayin ang mga activity
            gamit ng comma)
          </p>
          <input
            type="text"
            placeholder="Mga Sinasalihang Activity sa School?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            onChange={handleExtracurriculars}
          />
        </span>
      </div>

      <div className="w-full flex items-center">
        <span className="flex flex-col w-1/2 mr-8">
          <p>Ginagamit na Family Planning method?</p>
          <input
            type="text"
            placeholder="Ginagamit na Family Planning method?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            name="familyPlanning"
            onChange={handleChange}
          />
        </span>

        <span className="flex flex-col w-1/2">
          <p>Saan Kumukuha ng malinis na tubig?</p>
          <input
            type="text"
            placeholder="Saan Kumukuha ng malinis na tubig?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            name="waterSource"
            onChange={handleChange}
          />
        </span>
      </div>

      <div className="w-full flex items-center">
        <span className="flex flex-col w-1/2 mr-8">
          <p>Saan naglalaba ng damit?</p>
          <input
            type="text"
            placeholder="Saan naglalaba ng damit?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            name="laundryPlace"
            onChange={handleChange}
          />
        </span>

        <span className="flex flex-col w-1/2">
          <p>Saan nag-CR?</p>
          <input
            type="text"
            placeholder="Saan nag-CR?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            name="crPlace"
            onChange={handleChange}
          />
        </span>
      </div>

      <div className="w-full flex items-center">
        <span className="flex flex-col w-1/2 mr-8">
          <p>Ilang beses kumakain sa isang araw?</p>
          <input
            type="number"
            min="1"
            max="3"
            placeholder="Ilang beses kumakain sa isang araw?"
            className="p-2 border-bb-violet border-b-2 bg-inherit w-full outline-none text-2xl"
            name="eatPerDay"
            onChange={handleChange}
          />
        </span>

        <span className="flex flex-col w-1/2">
          <p>Ilang beses naliligo sa isang araw?</p>
          <input
            type="number"
            min="1"
            max="3"
            placeholder="Ilang beses naliligo sa isang araw?"
            className="p-2 border-bb-violet border-b-2 bg-inherit w-full outline-none text-2xl"
            name="showerPerDay"
            onChange={handleChange}
          />
        </span>
      </div>

      <div className="w-full">
        <span className="flex flex-col w-full">
          <p>
            Kadalasang sakit sa pamilya? (Paghiwalayin ang mga activity gamit ng
            comma)
          </p>
          <input
            type="text"
            placeholder="Kadalasang sakit sa pamilya?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            onChange={handleIllnesses}
          />
        </span>
      </div>
      
      
      <div className="w-full flex items-center">
        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            name="eatBeforeSchool"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            onChange={handleCheckbox}
          />
          <p className="text-xl">Kumakain bago pumasok sa school?</p>
        </span>

        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            name="attendedALS"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            onChange={handleCheckbox}
          />
          <p className="text-xl">Nag-attend ng Alternative Learning System?</p>
        </span>

        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            name="healthCenterCheckup"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            onChange={handleCheckbox}
          />
          <p className="text-xl">Nagpacheckup sa health center?</p>
        </span>

        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            name="ipon"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            onChange={handleCheckbox}
          />
          <p className="text-xl">May ipon?</p>
        </span>

        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            name="utang"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            onChange={handleCheckbox}
          />
          <p className="text-xl">May utang?</p>
        </span>

        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            name="dswd"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            onChange={handleCheckbox}
          />
          <p className="text-xl">DSWD?</p>
        </span>
      </div>
    </>
  );
};

export default IbangImpormasyon;
