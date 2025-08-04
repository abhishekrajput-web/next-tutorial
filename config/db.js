import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"oggyjack12",
    database:"doctors_db"
});

try{
const connection = await db.getConnection();
console.log("database connected successfully");
connection.release();
}

catch(err){
console.log("databse connection failed", err);
process.exit(1);
}