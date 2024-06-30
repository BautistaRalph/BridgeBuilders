const PamilyaProblema = () => {
  return (
    <>
      <div className="mt-4 space-y-4">
        <p style={{ fontSize: "24px" }}>
          <b>Problema:</b>
        </p>
        <div className="flex flex-col">
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="abandoned" />
            Abandoned
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="neglected" />
            Neglected
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="ran-away" />
            Ran away from home
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="gang" />
            Gang involvement
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="pa" />
            Suffered physical abuse
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="sa" />
            Suffered sexual abuse
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="roam-street" />
            Roaming in the street
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="sleep-street" />
            Sleeping on the street
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="hygiene" />
            Hygiene
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="drop-out" />
            School drop-out
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="academic-problem" />
            Academic problem
          </label>
          <label className="flex items-center" style={{ fontSize: "18px" }}>
            <input type="checkbox" className="mr-2" id="not-studying" />
            Not studying
          </label>
        </div>
      </div>
    </>
  );
};

export default PamilyaProblema;
