const express = require("express")
const router = express.Router()
const {
  createAccount,
  getAllAccounts,
  getAccountsByCustomerNumber,
  updateChargesCustomer,
  deleteCustomer,
} = require("../controllers/accountController")

router.post("/accounts", createAccount)
router.get("/accounts", getAllAccounts)
router.get("/accounts/:numeroCliente", getAccountsByCustomerNumber)
router.put("/accounts/:numeroCliente", updateChargesCustomer)
router.delete("/accounts/:numeroCliente", deleteCustomer)

module.exports = router
