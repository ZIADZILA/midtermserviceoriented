const customer = require("../Models/customerModel");
const getCustomers = (req, res) => {
customer.find().then(customers=>res.send(customers)).catch(err=>res.send(err));

};

const getCustomerById = (req, res)=>{
    customer.findById(req.body.id).then(customer=>res.send(customer)).catch(err=>res.send(err));
}
const updateCustomer = (req, res) => {
    const cust = {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
     
    };
    customer.findByIdAndUpdate(req.body.id, cust, { new: true })
      .then(updatedCustomer => res.send(updatedCustomer))
      .catch(err => res.status(400).send(err));
  }
  
const deleteCustomer = (req, res)=>{
  customer.findByIdAndDelete(req.body.id).then(customer => res.send(customer)).catch(err=>res.send(err));
}
  
  const createCustomer = async (req, res) => {
    const cust = new customer({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
       
      });
  
    try {
      const savedCustomer = await cust.save();
      res.json(savedCustomer);
    } catch (err) {
      res.send(err);
    }
  };
  

module.exports = {
    getCustomers,
    createCustomer, getCustomerById, deleteCustomer, updateCustomer
};

  

