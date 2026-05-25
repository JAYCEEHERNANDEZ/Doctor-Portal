import {
  createLabRequest,
  getLabResults
} from "../services/labService.js";
// Create laboratory request
export const createLab =
async (req, res) => {

    try {

        const request =
        await createLabRequest(
            req.body,
            req.token
        );

        res.json(request);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};
// Fetch laboratory results
export const fetchLabResults =
async (req, res) => {

    try {

        const results =
        await getLabResults(
            req.params.patientId,
            req.token
        );

        res.json(results);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};