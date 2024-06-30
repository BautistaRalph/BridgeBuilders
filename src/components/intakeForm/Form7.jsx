const IbangImpormasyon = () => {
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
            id="pangalan"
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
          />
        </span>

        <span className="flex flex-col w-1/2">
          <p>Saan Kumukuha ng malinis na tubig?</p>
          <input
            type="text"
            placeholder="Saan Kumukuha ng malinis na tubig?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            id="pangalan"
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
          />
        </span>

        <span className="flex flex-col w-1/2">
          <p>Saan nag-CR?</p>
          <input
            type="text"
            placeholder="Saan nag-CR?"
            className="p-2 border-bb-violet border-b-2 text-2xl outline-none"
            id="pangalan"
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
            id="pangalan"
          />
        </span>
      </div>

      <div className="w-full flex items-center">
        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
          />
          <p className="text-xl">Kumakain bago pumasok sa school?</p>
        </span>

        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
          />
          <p className="text-xl">Nag-attend ng Alternative Learning System?</p>
        </span>

        <span className="flex items-center w-1/3 mr-8">
          <input
            type="checkbox"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
          />
          <p className="text-xl">Nagpacheckup sa health center?</p>
        </span>
      </div>
    </>
  );
};

export default IbangImpormasyon;
