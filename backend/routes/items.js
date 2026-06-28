const express = require('express');
const router = express.Router();
const { data } = require('../data');

let nextItemId = 3;

// GET /api/items
router.get('/', (req, res) => {
  try {
    res.status(200).json({ 
      items: data.items,
      total: data.items.length 
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// GET /api/items/:id
router.get('/:id', (req, res) => {
  try {
    const item = data.items.find(i => i.id === parseInt(req.params.id));
    
    if (!item) {
      return res.status(404).json({ 
        error: 'Item not found',
        status: 404 
      });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// POST /api/items
router.post('/', (req, res) => {
  try {
    const { userId, name, quantity, unit, expiryDate, category } = req.body;

    if (!userId || !name || !quantity || !unit) {
      return res.status(400).json({ 
        error: 'userId, name, quantity, and unit are required',
        status: 400 
      });
    }

    const newItem = {
      id: nextItemId++,
      userId,
      name,
      quantity,
      unit,
      expiryDate: expiryDate || null,
      category: category || 'pantry'
    };

    data.items.push(newItem);
    res.status(201).json({ 
      message: 'Item created successfully',
      item: newItem 
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// PUT /api/items/:id
router.put('/:id', (req, res) => {
  try {
    const item = data.items.find(i => i.id === parseInt(req.params.id));
    
    if (!item) {
      return res.status(404).json({ 
        error: 'Item not found',
        status: 404 
      });
    }

    Object.assign(item, req.body);
    res.status(200).json({ 
      message: 'Item updated successfully',
      item 
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// DELETE /api/items/:id
router.delete('/:id', (req, res) => {
  try {
    const index = data.items.findIndex(i => i.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ 
        error: 'Item not found',
        status: 404 
      });
    }

    data.items.splice(index, 1);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// GET /api/items/search/:query
router.get('/search/:query', (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const results = data.items.filter(item => 
      item.name.toLowerCase().includes(query)
    );

    res.status(200).json({ 
      query,
      results,
      total: results.length 
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

module.exports = router;