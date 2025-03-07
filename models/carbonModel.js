const mongoose = require("mongoose");

const CarbonSchema = mongoose.Schema(
    {
        travelMode: { type: String, required: true },
        distance: { type: Number, required: true },
        fuelType: { type: String },
        passengers: { type: Number, required: true, default: 1 },
        carbonFootprint: { type: Number, required: true },
        recommendations: { type: String },
        createdAt: { type: Date, default: Date.now }
    },
    {
        versionKey: false
    }
);

const CarbonModel = mongoose.model("carbon", CarbonSchema);

module.exports = {
    CarbonModel
};
