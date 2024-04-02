const purchase = require("../Models/purchaseModel");
const getPurchases = (req, res) => {
purchase.find().then(purchases=>res.send(purchases)).catch(err=>res.send(err));

};

const getPurchaseById = (req, res)=>{
    purchase.findById(req.body.id).then(purchase=>res.send(purchase)).catch(err=>res.send(err));
}
const updatePurchase = (req, res) => {
    const bk = {

      title: req.body.title,

      price: req.body.price,
     
    };
    purchase.findByIdAndUpdate(req.body.id, bk, { new: true })
      .then(updatedPurchase => res.send(updatedPurchase))
      .catch(err => res.status(400).send(err));
  }
  
const deletePurchase = (req, res)=>{
    purchase.findByIdAndDelete(req.body.id).then(purchase => res.send(purchase)).catch(err=>res.send(err));
}
  
  const createPurchase = async (req, res) => {
    const bk = new purchase({
        title: req.body.title,
        price: req.body.price,
      });
  
    try {
      const savedPurchase = await bk.save();
      res.json(savedPurchase);
    } catch (err) {
      res.send(err);
    }
  };
  

module.exports = {
    getPurchases, createPurchase, getPurchaseById, deletePurchase, updatePurchase
};

  

