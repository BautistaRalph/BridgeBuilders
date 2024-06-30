const Tatay = () => {
  return (
    <>
      <div className="mt-4 space-y-4">
        <p style={{ fontSize: "24px" }}>
          <b>Impormasyon ng Tatay:</b>
        </p>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Pangalan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="pangalan-tatay"
          />
          <input
            type="text"
            placeholder="Palayaw"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="palayaw-tatay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Kasarian"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kasarian-tatay"
          />
          <input
            type="number"
            placeholder="Edad"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="edad-tatay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="date"
            placeholder="Petsa ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kapanganakan-tatay"
          />
          <input
            type="text"
            placeholder="Lugar ng Kapanganakan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kapanganakan-tatay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Relihiyon"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="relihiyon-tatay"
          />
          <input
            type="text"
            placeholder="Kasalukuyan/Naabot na Antas sa Paaralan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="antas-tatay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Huling Paaralang Pinasukan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="pinasukan-tatay"
          />
          <input
            type="text"
            placeholder="Kasalukuyang Tirahan"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="tirahan-tatay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Probinsya"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="probinsya-tatay"
          />
          <input
            type="text"
            placeholder="Trabaho"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="trabaho-tatay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Kita"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="kita-tatay"
          />
          <input
            type="text"
            placeholder="Skill Training Attended"
            className="p-2 border-bb-violet border-2 rounded-lg w-full"
            id="skill-training-tatay"
          />
        </div>
        <div className="flex space-x-4" style={{ fontSize: "18px" }}>
          <input
            type="text"
            placeholder="Skills"
            className="p-2 border-bb-violet border-2 rounded-lg w-1/2"
            id="skills-tatay"
          />
        </div>
        <p style={{ fontSize: "24px" }}>
          <b>Available documents/I.D:</b>
        </p>
        <div className="flex flex-col">
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="n-id-tatay" />
            National I.D
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="b-id-tatay" />
            Barangay I.D
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="sss-tatay" />
            SSS
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="phil-health-tatay" />
            PhilHealth
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="hdmf-tatay" />
            HDMF
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="bc-tatay" />
            Birth Certificate
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="dswd-tatay" />
            DSWD I.D
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input
              type="text"
              placeholder="Iba pa"
              className="p-1 border-bb-violet border-2 rounded-lg w-1/16"
              id="iba-pa-tatay"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Tatay;
