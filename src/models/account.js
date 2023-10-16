const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  nombreCliente: {
    type: String,
    required: true,
  },
  numeroCliente: {
    type: Number,
    required: true,
    unique: true,
  },
  montoCobrar: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
