import { useState } from "react";

const PangunahingImpormasyon = () => {
  const [showNGOandLGU, setShowNGOandLGU] = useState(false);
  const isReferral = (event) => {
    setShowNGOandLGU(event.target.checked);
  };

  return (
    <>
      <div className="mt-4 space-y-4">
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Pangalan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="pangalan"
          />
          <input
            type="text"
            placeholder="Palayaw"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="palayaw"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Kasarian"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kasarian"
          />
          <input
            type="number"
            placeholder="Edad"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="edad"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="date"
            placeholder="Petsa ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kapanganakan"
          />
          <input
            type="text"
            placeholder="Lugar ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kapanganakan"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Relihiyon"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="relihiyon"
          />
          <input
            type="text"
            placeholder="Kasalukuyan/Naabot na Antas sa Paaralan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="antas"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Huling Paaralang Pinasukan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="pinasukan"
          />
          <input
            type="text"
            placeholder="Tirahan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="tirahan"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Allergy"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="allergy"
          />
          <input
            type="text"
            placeholder="Vaccine"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="vaccine"
          />
        </div>
        <p style={{ fontSize: "24px" }}>
          <b>Inisyal na Itsurang Pisikal ng Bata:</b>
        </p>
        <div className="flex flex-col">
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="madumi-punit-damit" />
            Madumi at punit na damit
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="sugat-katawan" />
            May sugat/galis sa katawan
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="mapayat" />
            Payat na pangangatawan
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="maduming-kuko" />
            Maduming kuko
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="magulong-buhok" />
            Magulong buhok
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="malaking-tiyan" />
            Malaki ang tiyan
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="sirang-ngipin" />
            May sirang ngipin
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="nakayapak" />
            Nakayapak/walang tsinelas
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="masamang-amoy" />
            May hindi magandang amoy
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input
              type="text"
              placeholder="Iba pa"
              className="p-1 border-bb-violet border-2 rounded-lg w-1/16"
              id="iba-pa-itsura"
            />
          </label>
        </div>
        <p style={{ fontSize: "24px" }}>
          <b>Kategoryang Kinapapalooban:</b>
        </p>
        <div className="flex flex-wrap space-x-4">
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input
              type="checkbox"
              className="mr-2"
              id="approached-voluntarily"
            />
            Kusang Lumapit
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input
              type="checkbox"
              className="mr-2"
              id="referral"
              onChange={isReferral}
            />
            Referral
          </label>
        </div>
        {showNGOandLGU && (
          <>
            <input
              type="text"
              placeholder="NGO"
              style={{ fontSize: "18px" }}
              className="p-2 border-bb-violet border-2 rounded-lg w-full"
              id="ngo"
            />
            <input
              type="text"
              placeholder="LGU"
              style={{ fontSize: "18px" }}
              className="p-2 border-bb-violet border-2 rounded-lg w-full"
              id="lgu"
            />
          </>
        )}
        <p style={{ fontSize: "24px" }}>
          <b>Mga Dokumento/Requirements na Mayroon:</b>
        </p>
        <div className="flex flex-col">
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="report-card" />
            School Report Card
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="baptismal" />
            Baptismal
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="school-id" />
            School I.D
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="birth-certificate" />
            Birth Certificate
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="health-card" />
            Health Card
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="malaking-tiyan" />
            Malaki ang tiyan
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="vaccination-card" />
            Vaccination Card
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input
              type="text"
              placeholder="Iba pa"
              className="p-1 border-bb-violet border-2 rounded-lg w-1/16"
              id="iba-pa-dokumento"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default PangunahingImpormasyon;
