import { childSchemaServer } from "../../schemas/FormValidationSchema.js";
import Child from "../../schemas/ChildSchema.js";
import express from "express";
import * as Yup from "yup";

const apiRouter = express.Router();

//profile page
apiRouter.get("/profile/:caseNo", async (req, res) => {
  console.log("Viewing case data...");
  var vals;

  try {
    vals = await Child.find({ caseNo: parseInt(req.params.caseNo) });
    res.status(200).json(vals);
  } catch (error) {
    res.status(500).send("Error fetching children data");
  }
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

//archive or unarchive profile
apiRouter.post("/archiveProfile/:caseNo", async (req, res) => {
  console.log("Editing case archive status...");
  const caseNo = parseInt(req.params.caseNo);

  const currentDocument = await Child.findOne({ caseNo: caseNo });
  const newStatus = currentDocument.status === "Active" ? "Deleted" : "Active";

  try {
    await Child.updateOne({ caseNo: caseNo }, { $set: { status: newStatus } });
    res.status(200);
  } catch (error) {
    res.status(401).send("Error fetching case data");
  }
});

// Category filtering - overview
apiRouter.get("/overview", async (req, res) => {
  const { program, year, search, edad, kasarian } = req.query;

  let query = { program, status: "Active" };

  if (year) {
    query.yearAdmitted = year;
  }

  if (search) {
    query.pangalan = { $regex: search, $options: "i" };
  }

  if (edad) {
    const [minAge, maxAge] = edad.split("-").map(Number);
    query.edad = { $gte: minAge, $lte: maxAge };
  }

  if (kasarian) {
    query.kasarian = { $regex: kasarian, $options: "i" };
  }

  try {
    const children = await Child.find(query);
    res.status(200).json(children);
  } catch (error) {
    console.error("Error filtering children data:", error);
    res.status(500).send("Error filtering children data");
  }
});

// Category filtering - archive
apiRouter.get("/archive", async (req, res) => {
  const { program, year, search, edad, kasarian } = req.query;

  let query = { program, status: "Deleted" };

  if (year) {
    query.yearAdmitted = year;
  }

  if (search) {
    query.pangalan = { $regex: search, $options: "i" };
  }

  if (edad) {
    const [minAge, maxAge] = edad.split("-").map(Number);
    query.edad = { $gte: minAge, $lte: maxAge };
  }

  if (kasarian) {
    query.kasarian = { $regex: kasarian, $options: "i" };
  }

  try {
    const children = await Child.find(query);
    res.status(200).json(children);
  } catch (error) {
    console.error("Error filtering children data:", error);
    res.status(500).send("Error filtering children data");
  }
});

apiRouter.post("/intakeChild", async (req, res) => {
  try {
    const childData = req.body.childInfo;
    console.log(childData);
    // Validate the request body
    await childSchemaServer.validate(childData, { abortEarly: false });
    /* const postImgURL = await imageUploader(req.files[0]); */
    await Child.create(childData);

    res.status(200).json({ message: "Created child successfully" });
  } catch (error) {
    console.log("THERES ACTUALLY AN ERROR 0_0", error.message);
    if (error instanceof Yup.ValidationError) {
      // Validation failed
      const errors = error.inner.map((err) => err.message);
      console.log(errors);
      return res.status(400).json({ errors });
    }
  }
});

export default apiRouter;
