const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(`mongodb+srv://bobz:${process.env.MONGODB_PASSWORD}@cluster0.ngbhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
