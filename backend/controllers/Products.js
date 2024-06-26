import ProductModels from "../models/ProductModels.js";
import Product from "../models/ProductModels.js";


export const getAllProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name_products, quantity, url_img, categories_id } = req.body;
  const { id: user_id } = req.user;

  try {
    // Buat produk baru di database
    const newProduct = await Product.create({
      name_products: name_products,
      quantity: quantity,
      url_img: url_img,
      user_id: user_id, 
      categories_id: categories_id,
      create_by: user_id,
      update_by: user_id,
    });

    res.status(201).json({ msg: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { quantity } = req.body;
  const { id: user_id } = req.user;


  try {
    const product = await ProductModels.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    // Update
    product.quantity = quantity;
    product.update_by = user_id;

    await product.save();

    return res.status(200).json({ message: "Quantity Updated Successfully"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.message });
  }
};


export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "No Product Found" });
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product Deleted Successfully" });
  } catch (error) {
    console.log('error.message');
  }
};
