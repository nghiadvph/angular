import Product from "../models/product";

export const getProducts = async (request, response) => {
  try {
    const data = await Product.find({});
    return response.status(201).json({data});
  } catch (error) {
    console.log(error);
  }
};

export const getProductByid =async (request, response) => {
  // console.log("request.params.id: " + request.params.id);
  try {
    const data = await Product.findById(request.params.id);
  return response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct =   async (request, response) => {
 try {
  const data = await Product(request.body).save();
 return response.status(201).json(data);
 } catch (error) {
  // response.status(404);
  console.log(error);
 }
};

export const updateProduct = async(request, response) => {
  // console.log("request.params.id: " + request.params.id);
  try {
    const data = await Product.findByIdAndUpdate(request.params.id,request.body,{new: true});
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (request, response) => {
  try {
    const data = await Product.findByIdAndDelete(request.params.id);
    response.status(200).json({ message:"Đã xóa thành công",data});
  } catch (error) {
    console.log(error);
  }
};
