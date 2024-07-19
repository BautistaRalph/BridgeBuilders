import Parent from "../../schemas/ParentSchema.js";
import express from "express";

const apiRouter = express.Router();

apiRouter.post("/intakeParent", async (req, res) => {
    console.log("Adding Parent...");
    
    try {
        const { id,
            pangalan,
            palayaw,
            kasarian,
            edad,
            birthday,
            lugarNgKapanganakan,
            relihiyon,
            edukasyon,
            hulingPaaralan,
            tirahan,
            probinsya,
            trabaho,
            kita,
            skillTraining,
            skills,
            dokumento
        } = req.body;

        if(!id || !pangalan || !palayaw || !kasarian || !edad || !birthday || !lugarNgKapanganakan ||
            !relihiyon || !edukasyon || !hulingPaaralan || !tirahan || !probinsya || !trabaho || !kita ||
            !skillTraining || !skills || !dokumento){
            return res.status(400).json({
                error: "Please provide username, password, userType, and accountType",
            });
        }

        const newParent = new Parent({
            id: id,
            pangalan: pangalan,
            palayaw: palayaw,
            kasarian: kasarian, 
            edad: edad,
            birthday: birthday, 
            lugarNgKapanganakan: lugarNgKapanganakan,
            relihiyon: relihiyon,
            edukasyon: edukasyon, 
            hulingPaaralan: hulingPaaralan, 
            tirahan: tirahan,
            probinsya: probinsya,
            trabaho:trabaho,
            kita: kita,
            skillTraining: skillTraining, 
            skills: skills,
            dokumento: dokumento,
        });

      await newParent.save();
      res.status(200);
    } catch (error) {
      res.status(401).send("Error fetching case data");
    }
});

export default apiRouter;