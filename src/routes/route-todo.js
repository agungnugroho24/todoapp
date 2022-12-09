const router = require('express').Router();
const { todo } = require('../controllers');

// GET localhost:3030/todo => Ambil data semua todo
router.get('/todo', todo.getDataTodo);

// GET localhost:3030/todo/2 => Ambil data semua todo berdasarkan id = 2
router.get('/todo/:id', todo.getDataTodoByID);

// POST localhost:3030/todo/add => Tambah data todo ke database
router.post('/todo/add', todo.addDataTodo);

// POST localhost:3030/todo/2 => Edit data todo
router.post('/todo/edit', todo.editDataTodo);

// POST localhost:3030/todo/delete => Delete data todo
router.post('/todo/delete/', todo.deleteDataTodo);

module.exports = router;