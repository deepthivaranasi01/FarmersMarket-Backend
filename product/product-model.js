import mongoose from "mongoose";
import productschema from "./product-schema.js";

const productmodel = mongoose.model("products", productschema);
export default productmodel;