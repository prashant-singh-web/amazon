import mongoose, { Document, Schema } from 'mongoose';



const querySchema: Schema = new Schema({
  productName: String,
  productModel: String,
  productType: String,
  productCompany: String,
  productPrice: Number,
  starRating: Number,
  productInfo: [{
      brand: String,
      modal: String,
      network: String,
      os: String,
      ct: String,
      description: [String]
  }],
  productImgUrl: [String],
  productColurOption: [{
      option: String,
      url: String
  }],
  productVarientOption: [{
      varient: String,
      price: Number
  }],
  productBox: [String]
});
let Product_Query;
if (mongoose.models.Product_Query) {
  Product_Query = mongoose.model('Product_Query');
} else {
  Product_Query = mongoose.model('Product_Query', querySchema);
}

export default mongoose.models.Product_Query || mongoose.model('Product_Query', querySchema);