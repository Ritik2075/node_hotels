const mongoose= require('mongoose');

// define the Menu Schema

const MenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },

    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }
})

// create Menu model
const MenuItem= mongoose.model("MenuItem",MenuSchema);
module.exports= MenuItem;
