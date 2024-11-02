const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOveride = require("method-override");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));
const Chat = require("./models/chats.js");



main()
  .then(() => {
    console.log("Succefully database connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



app.listen(8080, () => {
  console.log("app is litening 8080");
});
// Home route
app.get("/", (req, res) => {
  res.send("home is working");
});

// Index Route
app.get("/chats", async (req,res)=>{
   let chats = await Chat.find();
   res.render("index.ejs",{chats});

});

//New chat Route.

app.get("/chats/new",(req,res)=>{
  res.render("new.ejs")});

//create Route
app.post("/chats",(req,res)=>{
  let {from,to,message} = req.body;
  let newChat = new Chat({
    from:from,
    to:to,
    message:message,
    created_at:new Date(),
  });
  newChat.save().then(res=>{console.log("Chat was saved")}).catch(err=>{console.log(err)});
  res.redirect("/chats");

});

//Edit Route
app.get("/chats/:id/edit", async (req,res)=>{
   let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update Route
app.put("/chats/:id",async (req,res)=>{
   let {id} = req.params;
   let {message:newMsg} = req.body;
   let updatedChat = await Chat.findByIdAndUpdate(id,
    {message:newMsg},
    {updated_at:new Date()},
    {runValidators:true,new:true}
   );
   res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id", async (req,res)=>{
   let {id} = req.params;
   let deletedChat = await Chat.findByIdAndDelete(id);
   res.redirect("/chats");
});