const express=require("express")
const {selectAllUsers,addUser}=require("./user");
const app=express();
app.use(express.json());
const cors=require("cors");
app.use(cors());

app.get("/message",async(req,res)=>{
   
    res.json({message:"this is the message"});

});

app.get("/users",async(req,res)=>{
    const list=await selectAllUsers();
    res.json(list);

});

app.post("/adduser", async(req,res)=>{

    const user=req.body;
   /* console.log(user) */
    await addUser(user) 
    res.json({message:"user added"});
});

app.listen('4000', ()=> console.log("server stared"));