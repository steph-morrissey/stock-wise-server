import express from 'express';

import db from '../models';

const router = express.Router();

const addCategory = async (req, res) => {
  try {
    const payload = req.body;

    db.Category.create(payload);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

router.post('/categories', addCategory);

export default router;
