require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const listingRouter = require("./routes/listingRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes

app.use("/api/listings", listingRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
