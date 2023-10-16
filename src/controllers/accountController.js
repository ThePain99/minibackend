const Account = require("../models/account")

exports.createAccount = async (req, res) => {
  try {
    const account = new Account(req.body)
    await account.save()
    res.status(201).json({message: "Cuenta creada con éxito"})
  } catch (err) {
    res
      .status(400)
      .send({message: "Error al crear la cuenta", error: err.message})
  }
}

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find()
    if (accounts.length === 0) {
      return res.status(404).json({message: "Lista de clientes no encontrada"})
    }
    res.json(accounts)
  } catch (err) {
    res
      .status(500)
      .send({message: "Error al obtener las cuentas", error: err.message})
  }
}

exports.getAccountsByCustomerNumber = async (req, res) => {
  try {
    const client = await Account.findOne({
      numeroCliente: req.params.numeroCliente,
    })
    if (!client) {
      return res.status(404).send({message: "Cliente no encontrado"})
    }
    res.json(client)
  } catch (err) {
    res.status(500).send({
      message: "Error al buscar el cliente por número de cliente",
      error: err.message,
    })
  }
}

exports.updateChargesCustomer = async (req, res) => {
  try {
    const client = await Account.findOne({
      numeroCliente: req.params.numeroCliente,
    })
    if (!client) {
      return res.status(404).send({message: "Cliente no encontrado"})
    }
    client.montoCobrar = req.body.montoCobrar
    await client.save()
    res.json({message: "Monto a cobrar actualizado con éxito"})
  } catch (err) {
    res.status(400).send({
      message: "Error al actualizar el monto a cobrar del cliente",
      error: err.message,
    })
  }
}

exports.deleteCustomer = async (req, res) => {
  try {
    const client = await Account.findOneAndRemove({
      numeroCliente: req.params.numeroCliente,
    })
    if (!client) {
      return res.status(404).send({message: "Cliente no encontrado"})
    }
    res.json({message: "Cliente eliminado con éxito"})
  } catch (err) {
    res
      .status(500)
      .send({message: "Error al eliminar el cliente", error: err.message})
  }
}
