import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    
    foodId : String,
    otherCollectionIds: [String] ,
    reviews : [Object], default:[]
});

export default productschema;





