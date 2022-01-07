const mysql= require("mysql")
const Promise=require("bluebird")
Promise.promisifyAll(require("mysql/lib/Connection").prototype)

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"cdacmumbai",
}

const addUser=async(user)=>{
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`insert into user(message,message1)values(?,?)`;
    await connection.queryAsync(sql,[user.message,user.message1])
    console.log("record added");
    await connection.endAsync();
}

let user={
    message: "first message",
    message1: "second message"
};

addUser(user);
const selectAllUsers=async()=>{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql=`select * from user`;
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log("list");
    return list;
}

module.exports={selectAllUsers, addUser};