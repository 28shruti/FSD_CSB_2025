const express = require('express');
const cors = require('cors');
const app = express();
const fs=require('fs').promises;
app.use(express.json());
app.use(cors());
const PORT = 7878;  //PORT ALWAYS GREATER THAN 1024

app.get('/', (req, res)=>{
    res.send("<h2>Hello from Express server!</h2>");
})

app.get('/msg', (req, res)=>{
    res.json({message: "This is a message from the server"});
})
 
app.post('/register', async (req, res)=>{
    // console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const arr=[];
    // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    // fs.readFile('./student.js', 'utf-8')
    const data=await fs.readFile('./student.json', {encoding: 'utf-8'});
    arr=JSON.parse(data);
    const status = arr.find(ele=> ele.email===email);
    if(status){
        res.json({msg: "User already registered"});
    }else{
        arr.push({name, email, password});
        fs.writeFile('./student.json', JSON.stringify(arr));
        return res.json({msg: "Registered successfully"});
    }
    res.json({msg: "Data received successfully"});
})
app.listen(PORT, ()=>{
    console.log("Server is running on "+PORT);
})


// postman se khud ka apna server bna skte hai
// http//172.  krke browser pr hit krenge then / msg likhenge toh msg object ki form me aaega
// node app.js se server start krenge