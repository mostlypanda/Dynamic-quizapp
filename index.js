const express=require('express');
const bodyparser=require('body-parser');
const ejs=require('ejs');
const path=require('path');
const fs=require('fs');

const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
var content = fs.readFileSync("static/index.html", 'utf8');
app.use("/static", express.static('static'));
app.set('view engine', 'ejs');



const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});