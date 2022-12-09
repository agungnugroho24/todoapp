const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua todo_list
    getDataTodo(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM todo_list;'
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results 
                });
            });
            connection.release();
        })
    },
    // Ambil data todo_list berdasarkan ID
    getDataTodoByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM todo_list WHERE id = ?;'
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        })
    },
    // Simpan data todo_list
    addDataTodo(req,res){
        let data = {
            id : req.body.id,
            email : req.body.email,
            title : req.body.title,
            created_at : req.body.created_at,
            updated_at : req.body.updated_at,
            deleted_at : req.body.deleted_at
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'INSERT INTO todo_list SET ?;'
            , [data],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil tambah data!',
                });
            });
            connection.release();
        })
    },
    // Update data todo_list
    editDataTodo(req,res){
        let dataEdit = {
            id : req.body.id,
            email : req.body.email,
            title : req.body.title,
            created_at : req.body.created_at,
            updated_at : req.body.updated_at,
            deleted_at : req.body.deleted_at
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'UPDATE todo_list SET ? WHERE id = ?;'
            , [dataEdit, id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        })
    },
    // Delete data todo_list
    deleteDataTodo(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'DELETE FROM todo_list WHERE id = ?;'
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}