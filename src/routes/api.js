import express from 'express';

import db from '../models';

const router = express.Router();

const viewInventory = async (req, res) => {
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

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await db.Category.findByIdAndDelete(id);

    res.status(200).json({ data: deleteBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// const addSupplier = async (req, res) => {
//   try {
//     const payload = req.body;

//     db.Supplier.create(payload);

//     res.status(201).json({
//       category: 'Supplier successfully created',
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// };

router.get('/inventory', viewInventory);
router.get('/categories', viewAllCategories);
router.get('/suppliers', viewAllSuppliers);
router.post('/categories', addCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);
// router.post('/suppliers', addSupplier);
export default router;
