const Nanay = () => {
  return (
    <>
      <div className="mt-4 space-y-4">
        <p style={{ fontSize: "24px" }}>
          <b>Impormasyon ng Nanay:</b>
        </p>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Pangalan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="pangalan-nanay"
          />
          <input
            type="text"
            placeholder="Palayaw"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="palayaw-nanay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Kasarian"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kasarian-nanay"
          />
          <input
            type="number"
            placeholder="Edad"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="edad-nanay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="date"
            placeholder="Petsa ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kapanganakan-nanay"
          />
          <input
            type="text"
            placeholder="Lugar ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kapanganakan-nanay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Relihiyon"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="relihiyon-nanay"
          />
          <input
            type="text"
            placeholder="Kasalukuyan/Naabot na Antas sa Paaralan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="antas-nanay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Huling Paaralang Pinasukan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="pinasukan-nanay"
          />
          <input
            type="text"
            placeholder="Kasalukuyang Tirahan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="tirahan-nanay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Probinsya"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="probinsya-nanay"
          />
          <input
            type="text"
            placeholder="Trabaho"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="trabaho-nanay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Kita"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kita-nanay"
          />
          <input
            type="text"
            placeholder="Skill Training Attended"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="skill-training-nanay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Skills"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2"
            id="skills-nanay"
          />
        </div>
        <p style={{ fontSize: "24px" }}>
          <b>Available documents/I.D:</b>
        </p>
        <div className="flex flex-col">
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="n-id-nanay" />
            National I.D
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="b-id-nanay" />
            Barangay I.D
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="sss-nanay" />
            SSS
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="phil-health-nanay" />
            PhilHealth
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="hdmf-nanay" />
            HDMF
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="bc-nanay" />
            Birth Certificate
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="dswd-nanay" />
            DSWD I.D
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input
              type="text"
              placeholder="Iba pa"
              className="p-1 border-bb-violet border-2 rounded-lg w-1/16"
              id="iba-pa-nanay"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Nanay;
