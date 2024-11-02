const { create } = require("domain");
const mongoose = require("mongoose");
const { type } = require("os");

const chatSchema = new mongoose.Schema({
    from:{
      type:String,
      required:true,
    },
    to:{
      type:String,
      required:true,
    },
    message:{
        type:String,
        maxLength:60
    },
    created_at:{
        type:Date,
      required:true,
    },

});

const Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat;