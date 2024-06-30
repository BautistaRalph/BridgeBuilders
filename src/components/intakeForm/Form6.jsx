import { useState } from "react";

const documentList = [
  "School Report Card",
  "Baptismal",
  "ID Picture",
  "Birth Certificate",
  "Health Card",
];

const Dokumento = () => {
  const [additionalDocuments, setAdditionalDocuments] = useState([]);

  const addDocument = () => {
    const lastIndex =
      additionalDocuments[additionalDocuments.length - 1]?.documentIndex ?? 0;
    setAdditionalDocuments([
      ...additionalDocuments,
      { documentIndex: lastIndex + 1, pangalan: "" },
    ]);
  };

  const removeDocument = (event) => {
    const targetIndex = event.currentTarget.value;
    const newKapatidList = additionalDocuments.filter(
      (dokumento) => dokumento.documentIndex != targetIndex
    );
    setAdditionalDocuments(newKapatidList);
  };

  return (
    <>
      <p>Required documents.</p>
      {documentList.map((document, index) => (
        <span className="flex items-center" key={index}>
          <input
            type="checkbox"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            name="goal"
          />
          <p className="text-2xl">{document}</p>
        </span>
      ))}
      {additionalDocuments.map((document) => (
        <span className="flex items-center" key={document.documentIndex}>
          <input
            type="checkbox"
            className="w-8 h-8 mr-4 border-bb-violet border-4 appearance-none outline-none cursor-pointer transition-colors checked:bg-bb-light-purple bridgeBuilderCheckbox relative"
            name="goal"
          />

          <input
            type="text"
            placeholder="Pangalan ng dokumento"
            className="p-2 border-bb-violet border-b-2 bg-inherit w-1/3 outline-none text-2xl"
          />

          <button value={document.documentIndex} onClick={removeDocument}>
            <span className="material-symbols-outlined text-3xl">delete</span>
          </button>
        </span>
      ))}

      <button
        className="border-dashed border-2 border-bb-violet h-16 w-full flex items-center p-2 hover:bg-bb-violet hover:text-bb-white hover:border-bb-white transition-colors duration-200"
        onClick={addDocument}
      >
        <h1 className="flex-grow text-4xl text-left">Magdagdag ng Dokumento</h1>
        <span className="material-symbols-outlined text-5xl self-end">add</span>
      </button>

      <h1 className="text-3xl mt-4">Form Intake</h1>
      <input
        type="file"
        className="p-2 border-bb-violet border-2 rounded-lg w-full"
      />
    </>
  );
};

export default Dokumento;
