require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 6000
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRouter")
const cors = require("cors")



// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/task', taskRouter)


// db connection
const startport = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server Listening on port ${PORT}`);
    });
  } catch (error) {
      console.log(error);
  }
};

startport()




app.use((req, res) => {
  res.status(404).send("Resource Not Found");
});