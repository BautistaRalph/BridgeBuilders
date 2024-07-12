import Child from "../../schemas/ChildSchema.js";
import express from "express";

const apiRouter = express.Router();
const userAccess = "superUser"; //temp

//overview page
apiRouter.get("/overview", async (req, res) => {
  console.log("Getting children data...");
  var vals;

  try {
    if (userAccess == "superUser") vals = await Child.find();
    else if (userAccess == "homeCare")
      vals = await Child.find({ program: "Home Care" });
    else if (userAccess == "community")
      vals = await Child.find({ program: "Community Based Program" });

    res.status(200).json(vals);
  } catch (error) {
    res.status(500).send("Error fetching children data");
  }
});

//profile page
apiRouter.get("/profile/:caseNo", async (req, res) => {
  console.log("Viewing case data...");
  const cursor = await Child.find({ caseNo: parseInt(req.params.caseNo) });

  cursor
    .toArray()
    .then(function (vals) {
      res.status(200).json(vals);
    })
    .catch(() => res.status(401).send("Error fetching case data"));
});

//save edited profile changes
apiRouter.post("/editProfile/:caseNo", async (req, res) => {
  console.log("Editing case data...");

  const caseNo = parseInt(req.params.caseNo);
  const { _id, ...profileData } = req.body["profileData"];

  try {
    await Child.replaceOne({ caseNo: caseNo }, profileData);
    res.status(200);
  } catch (error) {
    res.status(401).send("Error fetching case data");
  }
});

export default apiRouter;
