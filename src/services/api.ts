const API_BASE = 'http://localhost:5000/api';

// USERS
export const authService = {
  signup: async (name: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    return response.json();
  },

  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  }
};

// ITEMS
export const itemsService = {
  getAllItems: async () => {
    const response = await fetch(`${API_BASE}/items`);
    return response.json();
  },

  getItemById: async (id: number) => {
    const response = await fetch(`${API_BASE}/items/${id}`);
    return response.json();
  },

  createItem: async (item: any) => {
    const response = await fetch(`${API_BASE}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
    return response.json();
  },

  updateItem: async (id: number, updates: any) => {
    const response = await fetch(`${API_BASE}/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    });
    return response.json();
  },

  deleteItem: async (id: number) => {
    const response = await fetch(`${API_BASE}/items/${id}`, {
      method: 'DELETE'
    });
    return response.status === 204 ? { success: true } : response.json();
  },

  searchItems: async (query: string) => {
    const response = await fetch(`${API_BASE}/items/search/${query}`);
    return response.json();
  }
};

// RECIPES
export const recipesService = {
  getAllRecipes: async () => {
    const response = await fetch(`${API_BASE}/recipes`);
    return response.json();
  },

  getRecipeById: async (id: number) => {
    const response = await fetch(`${API_BASE}/recipes/${id}`);
    return response.json();
  },

  createRecipe: async (recipe: any) => {
    const response = await fetch(`${API_BASE}/recipes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe)
    });
    return response.json();
  },

  deleteRecipe: async (id: number) => {
    const response = await fetch(`${API_BASE}/recipes/${id}`, {
      method: 'DELETE'
    });
    return response.status === 204 ? { success: true } : response.json();
  }
};