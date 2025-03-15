const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
  { id: 1, name: 'Ayush', email: 'ayush@gmail.com' },
  { id: 2, name: 'Ninja', email: 'ninja@secret.com' }
];

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Express' });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name, email: req.body.email };
  users.push(newUser);
  res.json({message: 'Successfully Inserted'});
});

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'Successfully Deleted' });
});

app.listen(PORT);