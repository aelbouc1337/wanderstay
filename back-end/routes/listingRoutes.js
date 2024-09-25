const express = require("express");

const listingRouter = express.Router();

const {
  getListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing,
} = require("../controllers/listingController");

// Define routes
listingRouter.get("/", getListings);
listingRouter.get("/:id", getListingById);
listingRouter.post("/", createListing);
listingRouter.put("/:id", updateListing);
listingRouter.delete("/:id", deleteListing);

module.exports = listingRouter;
