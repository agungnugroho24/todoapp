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


// GET localhost:3030/activities => Ambil data semua activities
router.get('/activities', todo.getDataactivities);

// GET localhost:3030/activities/2 => Ambil data semua activities berdasarkan id = 2
router.get('/activities/:id', todo.getDataactivitiesByID);

// POST localhost:3030/activities/add => Tambah data activities ke database
router.post('/activities/add', todo.addDataactivities);

// POST localhost:3030/activities/2 => Edit data activities
router.post('/activities/edit', todo.editDataactivities);

// POST localhost:3030/activities/delete => Delete data activities
router.post('/activities/delete/', todo.deleteDataactivities);


// GET localhost:3030/activites => Ambil data semua activites
router.get('/activites', todo.getDataactivites);

// GET localhost:3030/activites/2 => Ambil data semua activites berdasarkan id = 2
router.get('/activites/:id', todo.getDataactivitesByID);

// POST localhost:3030/activites/add => Tambah data activites ke database
router.post('/activites/add', todo.addDataactivites);

// POST localhost:3030/activites/2 => Edit data activites
router.post('/activites/edit', todo.editDataactivites);

// POST localhost:3030/activites/delete => Delete data activites
router.post('/activites/delete/', todo.deleteDataactivites);
module.exports = router;