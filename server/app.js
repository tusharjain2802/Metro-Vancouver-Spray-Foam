const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const { body, validationResult } = require('express-validator');
let bodyParser = require("body-parser");
const User = require('./models/User');
require('dotenv').config();
mongoose.connect("mongodb+srv://admin-tushar:pswd6920@cluster0.lngsx.mongodb.net/sprayFoam",{UseNewUrlParser:true});
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

function decryptData(ciphertext) {
    const decryptedData = atob(ciphertext); 
    return decryptedData;
}
  


var listSchema = {
    name: String,
    items: [String]
};

const List = mongoose.model("List", listSchema);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


app.post('/sendData', async(req,res)=>{
    const email = decryptData(req.body.email);
    const data = req.body.data;
    try {
        let user = await List.findOne({name:email});
        if (!user) {
            const newList = new List({
                name: email,
                items: [data]
            });
            newList.save();
            res.json({ success:false, error:"You should be logged in to access our portal." })
     
        }else{
            List.findOneAndUpdate(
                { name: email },
                { $push: { items: data } },
                { new: true, useFindAndModify: false },
                (err) => {
                  if (err) {
                    console.error('Error inserting item:', err);
                  } else {
                    res.json({ success:true })
                  }
                }
              );
        }

    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }    
})

app.post('/getItems', async (req, res) => {
    try {
      const email = decryptData(req.body.email);
      if (!email) {
        return res.status(400).json({ success: false, error: "Invalid encrypted email" });
      }
  
      const user = await List.findOne({ name: email });
      if (!user) {
        return res.status(400).json({ success: false, error: "User not found" });
      }
  
      res.status(200).json({ success: true, data: user.items });
    } catch (error) {
      console.error('Error in fetching items:', error.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });


app.listen(5000 || process.env.PORT, function(){
console.log("Server started on port 5000");
});
