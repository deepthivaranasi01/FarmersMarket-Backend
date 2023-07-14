import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  address: String,
  companyAddress: String,
  companyName: String,
  companyRegNo: String,
  deliveryPartner: String,
  email: String,
  operatingStates: String,
  phone: String,
  userType: String,
  bodyType: String,
  fitnessGoalType: String,
  fitnessGoalWeight: String,
  height: String,
  weight: String,
  age:Number,
  gender:String,
  products: {
    type: [Object],
    default: function () {
      return this.userType === "seller" ? [] : undefined;
    },
  },
  cart: {
    type: [Object],
    default: function () {
      return this.userType === "normal" ? [] : undefined;
    },
  },
  bought: {
    type: [Object],
    default: function () {
      return this.userType === "normal" ? [] : undefined;
    },
  },
  reviews: {
    type: [Object],
    default: function () {
      return this.userType === "normal" ? [] : undefined;
    },
  },

  log: {
    type: [Object],
    default: function () {
      return this.userType === "logger" ? [] : undefined;
    },
  },
  
});

export default usersSchema;
