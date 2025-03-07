const { Router } = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const carbonRouter = Router();

// **POST /carbon/calculate** → AI-based Carbon Footprint Calculation & Recommendations
carbonRouter.post("/calculate", async (req, res) => {
    try {
        const { travelMode, distance, fuelType, passengers } = req.body;

        // Validate request
        if (!travelMode || !distance || !passengers) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Initialize AI Model
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // AI Prompt
        const prompt = `
            I traveled ${distance} km using a ${travelMode} ${fuelType ? `with ${fuelType} fuel` : ""} and ${passengers} passenger(s).
            1. Estimate my carbon footprint in kg CO2 based on standard emission rates.
            2. Suggest ways to reduce my carbon footprint, including alternative transport options and lifestyle changes.
            3. Return only a valid JSON response in the following format: 
            {
                "carbonFootprint": "X kg CO2",
                "recommendations": "..."
            }
        `;

        // Generate AI Response
        const result = await model.generateContent([prompt]);
        let aiResponse = result.response.text(); // Extract raw text response

        // **Fix: Remove unwanted formatting (e.g., triple backticks, markdown, etc.)**
        aiResponse = aiResponse.replace(/```json|```/g, "").trim();

        // Parse AI JSON Response
        const aiData = JSON.parse(aiResponse);

        res.json({
            success: true,
            data: aiData
        });

    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

module.exports = {
    carbonRouter
};
