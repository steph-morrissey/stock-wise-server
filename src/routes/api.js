import express from 'express';
import db from '../models';

const router = express.Router();

const viewAllProducts = async (req, res) => {
  const inventory = await db.Product.find({}).catch((err) => console.log(err));
  res.json(inventory);
};

const viewAllCategories = async (req, res) => {
  const categories = await db.Category.find({}).catch((err) => console.log(err));
  res.json(categories);
};

const viewAllSuppliers = async (req, res) => {
  const suppliers = await db.Supplier.find({}).catch((err) => console.log(err));
  res.json(suppliers);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await db.Product.findOne()
    .where({ _id: id })
    .catch((err) => console.log(err));

  res.json(product);
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await db.Category.findOne()
    .where({ _id: id })
    .catch((err) => console.log(err));

  res.json(category);
};

const getSupplier = async (req, res) => {
  const { id } = req.params;
  const supplier = await db.Supplier.findOne()
    .where({ _id: id })
    .catch((err) => console.log(err));

  res.json(supplier);
};

const getDashboard = async (req, res) => {
  try {
    const products = await db.Product.find({
      status: 'Low In Stock',
    });

    const suppliers = await db.Supplier.find({}).limit(3);

    const categories = await db.Category.find({}).limit(3);

    res.json({ products, suppliers, categories });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductsBySupplier = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    const products = await db.Product.find({
      supplierId: id,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addCategory = async (req, res) => {
  try {
    const payload = req.body;

    db.Category.create(payload);

    res.status(201).json({
      category: 'Category successfully created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const addSupplier = async (req, res) => {
  try {
    const payload = req.body;

    db.Supplier.create(payload);

    res.status(201).json({
      supplier: 'Supplier successfully created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const payload = req.body;

    db.Product.create(payload);

    res.status(201).json({
      product: 'Product successfully created',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await db.Category.findByIdAndUpdate(id, body);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await db.Supplier.findByIdAndUpdate(id, body);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await db.Product.findByIdAndUpdate(id, body);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const removeCategory = await db.Category.findByIdAndDelete(id);

    res.status(200).json({ data: removeCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const removeSupplier = await db.Supplier.findByIdAndDelete(id);

    res.status(200).json({ data: removeSupplier });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const removeProduct = await db.Product.findByIdAndDelete(id);

    res.status(200).json({ data: removeProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// View all
router.get('/products', viewAllProducts);
router.get('/categories', viewAllCategories);
router.get('/suppliers', viewAllSuppliers);
// View Low in Stock
router.get('/dashboard', getDashboard);
// Find One
router.get('/products/:id', getProduct);
router.get('/categories/:id', getCategory);
router.get('/suppliers/:id', getSupplier);
// Add to Inventory
router.post('/categories', addCategory);
router.post('/suppliers', addSupplier);
router.post('/products', addProduct);
// Update Inventory
router.put('/categories/:id', updateCategory);
router.put('/suppliers/:id', updateSupplier);
router.put('/products/:id', updateProduct);
// Delete from Inventory
router.delete('/categories/:id', deleteCategory);
router.delete('/suppliers/:id', deleteSupplier);
router.delete('/products/:id', deleteProduct);
router.get('/suppliers/:id/products', getProductsBySupplier);
export default router;
