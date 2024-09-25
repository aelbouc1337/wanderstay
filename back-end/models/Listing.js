const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  photos: [String],
  guestCapacity: { type: Number, required: true },
  rooms: { type: Number, required: true },
  type: { type: String, required: true },
  authorizedChildren: { type: Boolean, default: false },
  authorizedPets: { type: Boolean, default: false },
  authorizedParty: { type: Boolean, default: false },
  authorizedSmoking: { type: Boolean, default: false },
  location: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], required: true },
    address: String,
  },
  features: [String],
  equipment: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Listing", listingSchema);
