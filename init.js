const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



const chats = [
    {
      from: "Rupesh",
      to: "Mukesh",
      message: "Send your contact info",
      created_at: new Date(),
    },
    {
      from: "Amit",
      to: "Sunil",
      message: "Can we meet tomorrow?",
      created_at: new Date(),
    },
    {
      from: "Pooja",
      to: "Rohit",
      message: "Please review the document",
      created_at: new Date(),
    },
    {
      from: "Neha",
      to: "Karan",
      message: "Looking forward to our call",
      created_at: new Date(),
    },
    {
      from: "Rahul",
      to: "Anjali",
      message: "Let’s discuss the project update",
      created_at: new Date(),
    },
    {
      from: "Meera",
      to: "Suresh",
      message: "Happy to help with your request",
      created_at: new Date(),
    },
    {
      from: "Ramesh",
      to: "Geeta",
      message: "Can you share the files?",
      created_at: new Date(),
    },
    {
      from: "Nisha",
      to: "Vikash",
      message: "Thanks for the update",
      created_at: new Date(),
    },
    {
      from: "Sonia",
      to: "Vivek",
      message: "Let’s finalize the plan",
      created_at: new Date(),
    },
    {
      from: "Anil",
      to: "Preeti",
      message: "Call me when you’re free",
      created_at: new Date(),
    }
  ];
  
  Chat.insertMany(chats)
    .then(() => {
      console.log("Documents inserted successfully!");
    })
    .catch((error) => {
      console.error("Error inserting documents:", error);
    });
  