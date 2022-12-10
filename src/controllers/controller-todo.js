const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua activites
    getDataactivites(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM activites;'
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
    // Ambil data activites berdasarkan ID
    getDataactivitesByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM activites WHERE id = ?;'
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
    // Simpan data activites
    addDataactivites(req,res){
        let data = {
            id : req.body.id,
            activity_group_id : req.body.activity_group_id,
            email : req.body.email,
            title : req.body.title,
            created_at : req.body.created_at,
            updated_at : req.body.updated_at,
            deleted_at : req.body.deleted_at
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'INSERT INTO activites SET ?;'
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
    // Update data activites
    editDataactivites(req,res){
        let dataEdit = {
            id : req.body.id,
            activity_group_id : req.body.activity_group_id,
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
                'UPDATE activites SET ? WHERE id = ?;'
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
    // Delete data activites
    deleteDataactivites(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'DELETE FROM activites WHERE id = ?;'
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
    },


    // Ambil data semua activities
    getDataactivities(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM activities;'
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
    // Ambil data activities berdasarkan ID
    getDataactivitiesByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM activities WHERE id = ?;'
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
    // Simpan data activities
    addDataactivities(req,res){
        let data = {
            id : req.body.id,
            activity_group_id : req.body.activity_group_id,
            email : req.body.email,
            title : req.body.title,
            created_at : req.body.created_at,
            updated_at : req.body.updated_at,
            deleted_at : req.body.deleted_at
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'INSERT INTO activities SET ?;'
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
    // Update data activities
    editDataactivities(req,res){
        let dataEdit = {
            id : req.body.id,
            activity_group_id : req.body.activity_group_id,
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
                'UPDATE activities SET ? WHERE id = ?;'
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
    // Delete data activities
    deleteDataactivities(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'DELETE FROM activities WHERE id = ?;'
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
    },

    // Ambil data semua Todo
    getDataTodo(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM todos;'
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
    // Ambil data Todo berdasarkan ID
    getDataTodoByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'SELECT * FROM todos WHERE id = ?;'
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
    // Simpan data Todo
    addDataTodo(req,res){
        let data = {
            id : req.body.id,
            activity_group_id : req.body.activity_group_id,
            email : req.body.email,
            title : req.body.title,
            is_active : req.body.is_active,
            priority : req.body.priority,
            created_at : req.body.created_at,
            updated_at : req.body.updated_at,
            deleted_at : req.body.deleted_at
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'INSERT INTO todos SET ?;'
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
    // Update data Todo
    editDataTodo(req,res){
        let dataEdit = {
            id : req.body.id,
            activity_group_id : req.body.activity_group_id,
            email : req.body.email,
            title : req.body.title,
            is_active : req.body.is_active,
            priority : req.body.priority,
            created_at : req.body.created_at,
            updated_at : req.body.updated_at,
            deleted_at : req.body.deleted_at
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'UPDATE todos SET ? WHERE id = ?;'
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
    // Delete data Todo
    deleteDataTodo(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                'DELETE FROM todos WHERE id = ?;'
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