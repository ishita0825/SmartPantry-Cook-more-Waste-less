// In-memory database
const data = {
  users: [
    { id: 1, name: 'Ishita', email: 'ishita@example.com', password: 'pass123' }
  ],
  items: [
    { 
      id: 1, 
      userId: 1, 
      name: 'Sugar', 
      quantity: 500, 
      unit: 'grams', 
      expiryDate: '2025-12-31',
      category: 'pantry'
    },
    { 
      id: 2, 
      userId: 1, 
      name: 'Milk', 
      quantity: 1, 
      unit: 'liter', 
      expiryDate: '2026-01-05',
      category: 'dairy'
    }
  ],
  recipes: [
    { 
      id: 1, 
      userId: 1, 
      name: 'Chai', 
      ingredients: ['milk', 'sugar', 'tea leaves'],
      instructions: 'Boil water, add tea, milk, sugar',
      createdAt: '2026-01-01'
    }
  ]
};

let nextUserId = 2;
let nextItemId = 3;
let nextRecipeId = 2;

module.exports = { data, nextUserId, nextItemId, nextRecipeId };