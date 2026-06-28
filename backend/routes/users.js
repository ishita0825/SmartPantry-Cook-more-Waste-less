const express = require('express');
const router = express.Router();
const { data } = require('../data');

let nextUserId = 2;

// POST /api/users/signup
router.post('/signup', (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: 'Name, email, and password are required',
        status: 400 
      });
    }

    const userExists = data.users.find(u => u.email === email);
    if (userExists) {
      return res.status(400).json({ 
        error: 'User already exists',
        status: 400 
      });
    }

    const newUser = {
      id: nextUserId++,
      name,
      email,
      password
    };

    data.users.push(newUser);
    res.status(201).json({ 
      message: 'User created successfully',
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

// POST /api/users/login
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required',
        status: 400 
      });
    }

    const user = data.users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid email or password',
        status: 401 
      });
    }

    res.status(200).json({ 
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500 });
  }
});

module.exports = router;