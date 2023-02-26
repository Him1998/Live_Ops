const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const loginRoute = require("./login");
const offerRoute = require("./offer");
const cors = require("cors");

const app = express();
app.use(express.json());
mongoose.set("strictQuery",true);
app.use(cors());

const url = 'mongodb+srv://live_ops:live_ops_testapp@cluster0.ykau5il.mongodb.net/?retryWrites=true&w=majority';

async function conn () {
    await mongoose.connect(url,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("connected to mongoose");
        }
    })
}
conn();

app.use("/users",loginRoute);
app.use("/offers",offerRoute);

app.get("/",(req,res) => {
    res.send("<h1> Welcome </h1>");
})

app.listen(8080, () => {
    console.log("server is up at 8080");
})

