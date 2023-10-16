const express = require("express")
const mongoose = require("mongoose")
const accountRoutes = require("./routes/accountRoutes")
require("dotenv").config()

const app = express()

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err))

app.use(express.json())
app.use("/api", accountRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
