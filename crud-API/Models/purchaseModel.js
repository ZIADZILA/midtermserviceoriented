const mongoose =  require("mongoose");

const purchaseSchema =  mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        
       
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Purchase", purchaseSchema);
