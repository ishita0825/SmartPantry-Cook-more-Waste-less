const express = require('express');
const router = express.Router();
const { data } = require('../data');

let nextRecipeId = 2;

// GET /api/recipes
router.get('/', (req, res) => {
  try {
    res.status(200).json({ 
      recipes: data.recipes,
      total: data.recipes.length 
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// GET /api/recipes/:id
router.get('/:id', (req, res) => {
  try {
    const recipe = data.recipes.find(r => r.id === parseInt(req.params.id));
    
    if (!recipe) {
      return res.status(404).json({ 
        error: 'Recipe not found',
        status: 404 
      });
    }

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// POST /api/recipes
router.post('/', (req, res) => {
  try {
    const { userId, name, ingredients, instructions } = req.body;

    if (!userId || !name || !ingredients || !instructions) {
      return res.status(400).json({ 
        error: 'userId, name, ingredients, and instructions are required',
        status: 400 
      });
    }

    const newRecipe = {
      id: nextRecipeId++,
      userId,
      name,
      ingredients,
      instructions,
      createdAt: new Date().toISOString().split('T')[0]
    };

    data.recipes.push(newRecipe);
    res.status(201).json({ 
      message: 'Recipe created successfully',
      recipe: newRecipe 
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// DELETE /api/recipes/:id
router.delete('/:id', (req, res) => {
  try {
    const index = data.recipes.findIndex(r => r.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ 
        error: 'Recipe not found',
        status: 404 
      });
    }

    data.recipes.splice(index, 1);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

module.exports = router;