const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 3000;


// Connect to MongoDb
mongoose
.connect('mongodb://localhost:27017/loginSignupDB',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("MongoDB connected."))
.catch((err) => console.error("MongoDB connection Error:",err));

// Use Schema
const userSchema = new mongoose.Schema({
    username:{type:String, unique:true,required:true},
    password:{type:String, required:true},
});

const User = mongoose.model('User',userSchema);

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','signup.html'));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','login.html'));
});

app.post('/signup', async(req,res)=>{
    const {username, password} = req.body;
    try{
        const newuser = new User({username,password});
        await newuser.save();
        res.send('Signup successful! <a href="/login"/>Go to Login<a/>');
    }
    catch(err){
        res.send('Error: User already exists or invalid input.');
    }
});

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username,password});
    if(user){
        res.send('Login successful! Welcome.'+username);
    }
    else{
        res.send('Invalid username and password.');
    }
});

// Start Server 
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

