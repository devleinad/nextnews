import mysql from "mysql";

const db = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    database:"nextapp",
    user:"root",
    password:""
});

db.connect((err) => {
    if(err){
        console.log('Error:'+error.message)
    }else{
        console.log('Database connected successfully!');
    }
})

export default db;